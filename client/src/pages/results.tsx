import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, RotateCcw, Search, AlertTriangle, Brain, Heart, BookOpen, Users } from "lucide-react";
import type { AssessmentResults } from "@shared/schema";

export default function Results() {
  const [, setLocation] = useLocation();
  const [results, setResults] = useState<AssessmentResults | null>(null);

  useEffect(() => {
    const savedResults = localStorage.getItem("assessmentResults");
    if (savedResults) {
      setResults(JSON.parse(savedResults));
    } else {
      setLocation("/");
    }
  }, [setLocation]);

  if (!results) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-warm-blue to-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-medium mx-auto mb-4"></div>
          <p className="text-gray-600">Loading results...</p>
        </div>
      </div>
    );
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "attention": return <Brain className="text-white h-5 w-5" />;
      case "emotional": return <Heart className="text-white h-5 w-5" />;
      case "reading": return <BookOpen className="text-white h-5 w-5" />;
      case "social": return <Users className="text-white h-5 w-5" />;
      default: return <Brain className="text-white h-5 w-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "attention": return "bg-primary-light";
      case "emotional": return "bg-green-500";
      case "reading": return "bg-yellow-500";
      case "social": return "bg-purple-500";
      default: return "bg-gray-500";
    }
  };

  const getScoreColor = (category: string) => {
    switch (category) {
      case "attention": return "stroke-primary-medium";
      case "emotional": return "stroke-green-500";
      case "reading": return "stroke-yellow-500";
      case "social": return "stroke-purple-500";
      default: return "stroke-gray-500";
    }
  };

  const getRecommendationBg = (category: string) => {
    switch (category) {
      case "attention": return "bg-warm-blue";
      case "emotional": return "bg-green-50";
      case "reading": return "bg-yellow-50";
      case "social": return "bg-purple-50";
      default: return "bg-gray-50";
    }
  };

  const handleRetake = () => {
    localStorage.removeItem("assessmentResults");
    localStorage.removeItem("userRole");
    localStorage.removeItem("ageGroup");
    setLocation("/role-selection");
  };

  const calculateStrokeDashoffset = (percentage: number) => {
    const circumference = 2 * Math.PI * 40; // radius = 40
    return circumference - (percentage / 100) * circumference;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-blue to-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Disclaimer */}
        <div className="mb-12 p-6 bg-warm-yellow border-l-4 border-yellow-400 rounded-xl">
          <div className="flex items-start">
            <AlertTriangle className="text-yellow-600 text-xl mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Important Disclaimer</h3>
              <p className="text-gray-700">
                Sahayata is a screening tool, not a diagnostic instrument. These results are meant to provide insights and encourage conversation with qualified professionals. Please consult with healthcare providers for comprehensive assessment and support.
              </p>
            </div>
          </div>
        </div>

        {/* Results Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary-dark mb-4">Your Screening Results</h1>
          <p className="text-xl text-gray-600">Here's what we found based on your responses</p>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {Object.entries(results).map(([category, result]) => (
            <Card key={category} className="shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-xl mr-4 ${getCategoryColor(category)}`}>
                    {getCategoryIcon(category)}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-dark">{result.name}</h3>
                    <p className="text-gray-600 text-sm">{result.description}</p>
                  </div>
                </div>
                
                {/* Score Circle */}
                <div className="flex items-center justify-between mb-6">
                  <div className="relative w-24 h-24">
                    <svg className="w-24 h-24 transform -rotate-90">
                      <circle 
                        cx="48" 
                        cy="48" 
                        r="40" 
                        stroke="#E5E7EB" 
                        strokeWidth="8" 
                        fill="transparent"
                      />
                      <circle 
                        cx="48" 
                        cy="48" 
                        r="40" 
                        className={getScoreColor(category)}
                        strokeWidth="8" 
                        fill="transparent" 
                        strokeDasharray="251.2"
                        strokeDashoffset={calculateStrokeDashoffset(result.percentage)}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary-dark">{result.percentage}%</span>
                    </div>
                  </div>
                  <div className="flex-1 ml-6">
                    <div className="bg-gray-200 rounded-full h-3 mb-2">
                      <div 
                        className={`h-3 rounded-full ${getCategoryColor(category)}`}
                        style={{ width: `${result.percentage}%` }}
                      />
                    </div>
                    <p className="text-sm font-medium text-gray-700">{result.level}</p>
                  </div>
                </div>

                {/* Recommendations */}
                <div className={`p-4 rounded-xl ${getRecommendationBg(category)}`}>
                  <h4 className="font-semibold text-gray-800 mb-2">Suggested Next Steps</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    {result.recommendations.map((rec, index) => (
                      <li key={index}>• {rec}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="text-center space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <Button className="w-full sm:w-auto bg-primary-medium hover:bg-primary-dark text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300">
            <Download className="mr-2 h-4 w-4" />
            Download Results
          </Button>
          <Button 
            variant="outline"
            onClick={handleRetake}
            className="w-full sm:w-auto border-2 border-primary-medium text-primary-medium hover:bg-primary-medium hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300"
          >
            <RotateCcw className="mr-2 h-4 w-4" />
            Retake Assessment
          </Button>
          <Button className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300">
            <Search className="mr-2 h-4 w-4" />
            Find Professional Support
          </Button>
        </div>
      </div>
    </div>
  );
}
