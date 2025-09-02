import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Brain, Lightbulb, Users, Heart, BookOpen } from "lucide-react";

export default function Landing() {
  const [, setLocation] = useLocation();

  const handleGetStarted = () => {
    setLocation("/role-selection");
  };

  return (
    <div className="min-h-screen bg-neutral-bg">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-warm-blue via-gentle-mint to-warm-coral py-20 lg:py-32 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/20 rounded-full blur-xl"></div>
          <div className="absolute top-1/3 right-20 w-32 h-32 bg-primary-light/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-warm-yellow/30 rounded-full blur-xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-sm">
                <Heart className="text-primary-medium mr-2 h-4 w-4" />
                <span className="text-sm font-medium text-primary-dark">Trusted by families & educators</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-dark leading-tight mb-6">
                Your warm, confidential first step to 
                <span className="text-primary-medium bg-gradient-to-r from-primary-medium to-primary-light bg-clip-text text-transparent"> understanding</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Sahayata provides a gentle, private screening experience designed with empathy. We help identify early signs of developmental and mental health patterns in young people, supporting families with compassionate guidance.
              </p>
              <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex">
                <Button 
                  onClick={handleGetStarted}
                  className="w-full sm:w-auto bg-gradient-to-r from-primary-medium to-primary-light hover:from-primary-dark hover:to-primary-medium text-white font-semibold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                >
                  <ArrowRight className="mr-2 h-5 w-5" />
                  Begin Your Journey - Free & Private
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => setLocation("/about")}
                  className="w-full sm:w-auto border-2 border-primary-medium text-primary-medium hover:bg-primary-medium hover:text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 backdrop-blur-sm bg-white/50"
                >
                  <BookOpen className="mr-2 h-4 w-4" />
                  Learn Our Approach
                </Button>
              </div>
              <div className="mt-8 p-6 bg-warm-yellow border-l-4 border-yellow-400 rounded-xl">
                <div className="flex items-start">
                  <Shield className="text-yellow-600 h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-800 leading-relaxed">
                    <span className="font-semibold">Gentle Reminder:</span> Sahayata is a supportive screening tool designed to guide conversations, not replace professional diagnosis. We warmly encourage connecting with qualified professionals for comprehensive care.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-3xl shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400" 
                    alt="Warm counseling session with supportive therapist and family in a comfortable, welcoming environment" 
                    className="rounded-2xl w-full max-w-md" 
                  />
                </div>
                
                {/* Floating cards */}
                <div className="absolute -bottom-4 -left-8 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-green-200/50">
                  <div className="flex items-center">
                    <div className="bg-gradient-to-br from-green-400 to-green-500 p-2 rounded-xl mr-3">
                      <Shield className="text-white h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-gray-800">100% Private</p>
                      <p className="text-xs text-gray-600">Your story stays safe</p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -top-4 -right-8 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-blue-200/50">
                  <div className="flex items-center">
                    <div className="bg-gradient-to-br from-primary-medium to-primary-light p-2 rounded-xl mr-3">
                      <Heart className="text-white h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-gray-800">Made with Care</p>
                      <p className="text-xs text-gray-600">Empathy-centered design</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-white to-neutral-bg relative">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-20 right-10 w-40 h-40 bg-warm-blue rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-32 h-32 bg-warm-coral rounded-full blur-2xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-primary-medium/10 px-4 py-2 rounded-full mb-6">
              <Users className="text-primary-medium mr-2 h-4 w-4" />
              <span className="text-sm font-medium text-primary-dark">Designed for everyone's comfort</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              Why people trust Sahayata
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our gentle approach combines compassionate design with thoughtful insights, creating a safe space for understanding and growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Privacy Card */}
            <div className="group bg-gradient-to-br from-warm-blue to-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100/50">
              <div className="bg-gradient-to-br from-primary-light to-primary-medium p-4 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="text-white h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-primary-dark mb-4">Your Privacy, Protected</h3>
              <p className="text-gray-700 leading-relaxed">Anonymous self-assessments stay completely private. For family screenings, we offer secure, optional progress tracking with full transparency.</p>
              <div className="mt-6 flex items-center text-sm text-primary-medium font-medium">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                Zero data stored for self-assessments
              </div>
            </div>

            {/* Comprehensive Card */}
            <div className="group bg-gradient-to-br from-gentle-mint to-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-green-100/50">
              <div className="bg-gradient-to-br from-green-400 to-green-500 p-4 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <Brain className="text-white h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-primary-dark mb-4">Thoughtfully Comprehensive</h3>
              <p className="text-gray-700 leading-relaxed">Gentle exploration across attention, emotions, learning, and social connections. Each question is crafted with care and clinical insight.</p>
              <div className="mt-6 grid grid-cols-2 gap-2 text-xs text-gray-600">
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                  Attention patterns
                </div>
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                  Emotional wellness
                </div>
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2"></div>
                  Learning styles
                </div>
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></div>
                  Social connections
                </div>
              </div>
            </div>

            {/* Supportive Card */}
            <div className="group bg-gradient-to-br from-soft-orange to-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-orange-100/50">
              <div className="bg-gradient-to-br from-yellow-400 to-orange-400 p-4 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <Lightbulb className="text-white h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-primary-dark mb-4">Supportive Guidance</h3>
              <p className="text-gray-700 leading-relaxed">Receive warm, actionable suggestions designed to empower your next steps. Every insight comes with encouragement and practical support.</p>
              <div className="mt-6 flex items-center text-sm text-orange-600 font-medium">
                <Heart className="w-4 h-4 mr-2" />
                Crafted with empathy & hope
              </div>
            </div>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-16 text-center">
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="flex items-center text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                Evidence-based questions
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                Educator approved
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                Family tested
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                Privacy first
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
