import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import type { Question, QuestionResponse } from "@shared/schema";

export default function Questionnaire() {
  const [, setLocation] = useLocation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [responses, setResponses] = useState<QuestionResponse[]>([]);
  const [currentAnswer, setCurrentAnswer] = useState<string>("");

  const userRole = localStorage.getItem("userRole") || "myself";
  const ageGroup = localStorage.getItem("ageGroup");

  const { data: questions, isLoading } = useQuery<Question[]>({
    queryKey: ["/api/questions", userRole, ageGroup],
    queryFn: async () => {
      const params = new URLSearchParams();
      if (userRole) params.append('userRole', userRole);
      if (ageGroup) params.append('ageGroup', ageGroup);
      
      const response = await fetch(`/api/questions?${params}`);
      if (!response.ok) {
        throw new Error('Failed to fetch questions');
      }
      return response.json();
    }
  });

  const submitAssessment = useMutation({
    mutationFn: async (data: any) => {
      const response = await apiRequest("POST", "/api/assessments", data);
      return response.json();
    },
    onSuccess: (result) => {
      localStorage.setItem("assessmentResults", JSON.stringify(result));
      setLocation("/results");
    },
  });

  useEffect(() => {
    // Load current answer if it exists
    const existingResponse = responses.find(r => r.questionId === questions?.[currentIndex]?.id);
    setCurrentAnswer(existingResponse?.answer || "");
  }, [currentIndex, questions, responses]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-warm-blue to-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-medium mx-auto mb-4"></div>
          <p className="text-gray-600">Loading questionnaire...</p>
        </div>
      </div>
    );
  }

  if (!questions || questions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-warm-blue to-white flex items-center justify-center">
        <Card className="max-w-md">
          <CardContent className="p-8 text-center">
            <p className="text-gray-600">No questions available for this assessment.</p>
            <Button onClick={() => setLocation("/")} className="mt-4">
              Return Home
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;

  const handleAnswerSelect = (answer: string) => {
    setCurrentAnswer(answer);
    
    // Update responses array
    const newResponses = responses.filter(r => r.questionId !== currentQuestion.id);
    newResponses.push({
      questionId: currentQuestion.id,
      answer: answer as 'yes' | 'maybe' | 'no'
    });
    setResponses(newResponses);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Submit assessment
      submitAssessment.mutate({
        userRole,
        ageGroup,
        responses: responses.reduce((acc, r) => {
          acc[r.questionId] = r.answer;
          return acc;
        }, {} as Record<string, string>),
        isAnonymous: userRole === "myself" ? 1 : 0,
      });
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "attention": return "bg-primary-light text-white";
      case "emotional": return "bg-green-500 text-white";
      case "reading": return "bg-yellow-500 text-white";
      case "social": return "bg-purple-500 text-white";
      default: return "bg-gray-500 text-white";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-blue via-gentle-mint to-warm-coral py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-primary-light/30 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-warm-yellow/40 rounded-full blur-lg"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Progress Section */}
        <div className="mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <span className="text-sm font-medium text-primary-dark mr-3">Your Progress</span>
                <div className="inline-flex items-center bg-primary-medium/10 px-3 py-1 rounded-full">
                  <span className="text-xs font-medium text-primary-dark">
                    Question {currentIndex + 1} of {questions.length}
                  </span>
                </div>
              </div>
              <span className="text-sm font-semibold text-primary-medium">
                {Math.round(progress)}% Complete
              </span>
            </div>
            <Progress value={progress} className="h-3 bg-gray-200" />
            <div className="mt-2 text-xs text-gray-600 text-center">
              Taking your time helps us provide better insights
            </div>
          </div>
        </div>

        {/* Question Card */}
        <Card className="shadow-2xl mb-8 bg-white/95 backdrop-blur-sm border-0">
          <CardContent className="p-10">
            <div className="mb-10">
              <div className="flex items-center mb-6">
                <span className={`px-4 py-2 rounded-2xl text-sm font-semibold ${getCategoryColor(currentQuestion.category)} shadow-sm`}>
                  {currentQuestion.category.charAt(0).toUpperCase() + currentQuestion.category.slice(1)}
                </span>
                <div className="ml-4 flex-1 h-px bg-gradient-to-r from-gray-200 to-transparent"></div>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-primary-dark leading-relaxed mb-6">
                {currentQuestion.text}
              </h2>
              
              {currentQuestion.description && (
                <div className="bg-gradient-to-r from-warm-blue to-gentle-mint p-4 rounded-xl">
                  <p className="text-gray-700 leading-relaxed">
                    {currentQuestion.description}
                  </p>
                </div>
              )}
            </div>

            {/* Answer Options */}
            <div className="space-y-4">
              {[
                { value: "yes", label: "Yes, frequently", description: "This happens often or most of the time", color: "from-red-50 to-red-100 border-red-200" },
                { value: "maybe", label: "Sometimes", description: "This happens occasionally or in certain situations", color: "from-yellow-50 to-yellow-100 border-yellow-200" },
                { value: "no", label: "No, rarely", description: "This rarely happens or is not typical", color: "from-green-50 to-green-100 border-green-200" }
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleAnswerSelect(option.value)}
                  className={`group w-full p-6 border-2 rounded-2xl transition-all duration-300 text-left transform hover:scale-102 ${
                    currentAnswer === option.value
                      ? "border-primary-medium bg-gradient-to-r from-primary-light/20 to-primary-medium/20 shadow-lg"
                      : `border-gray-200 bg-gradient-to-r ${option.color} hover:border-primary-medium hover:shadow-md`
                  }`}
                >
                  <div className="flex items-start">
                    <div className="flex items-center justify-center w-8 h-8 border-2 rounded-full mr-4 mt-1 flex-shrink-0 transition-all duration-300">
                      {currentAnswer === option.value ? (
                        <div className="w-4 h-4 bg-primary-medium rounded-full animate-pulse"></div>
                      ) : (
                        <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          option.value === 'yes' ? 'bg-red-300' :
                          option.value === 'maybe' ? 'bg-yellow-300' : 'bg-green-300'
                        } group-hover:scale-110`}></div>
                      )}
                    </div>
                    <div className="flex-1">
                      <span className="font-semibold text-lg text-gray-800 block mb-1">{option.label}</span>
                      <span className="text-sm text-gray-600">{option.description}</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="px-8 py-4 border-2 border-white/50 text-gray-700 rounded-2xl hover:border-primary-medium hover:text-primary-medium hover:bg-white/80 transition-all duration-300 disabled:opacity-50 backdrop-blur-sm bg-white/60"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Previous
          </Button>
          
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">
              {currentIndex === questions.length - 1 ? "Ready to see your insights?" : "Continue when ready"}
            </p>
          </div>
          
          <Button
            onClick={handleNext}
            disabled={!currentAnswer || submitAssessment.isPending}
            className="px-8 py-4 bg-gradient-to-r from-primary-medium to-primary-light text-white rounded-2xl hover:from-primary-dark hover:to-primary-medium transition-all duration-300 disabled:opacity-50 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            {submitAssessment.isPending ? (
              <div className="flex items-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Processing...
              </div>
            ) : (
              <>
                {currentIndex === questions.length - 1 ? "See My Results" : "Next Question"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
