import { useLocation } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { User, Users, GraduationCap, Heart, Shield } from "lucide-react";

export default function RoleSelection() {
  const [, setLocation] = useLocation();

  const selectRole = (role: string) => {
    if (role === "myself") {
      // Store role and skip auth for anonymous assessment
      localStorage.setItem("userRole", role);
      setLocation("/questionnaire");
    } else {
      // Store role and show auth options
      localStorage.setItem("userRole", role);
      setLocation("/auth");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-blue via-gentle-mint to-warm-coral flex items-center justify-center py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-24 h-24 bg-white/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-primary-light/20 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-warm-yellow/30 rounded-full blur-lg"></div>
      </div>
      
      <div className="max-w-3xl mx-4 w-full relative z-10">
        <Card className="shadow-2xl bg-white/95 backdrop-blur-sm border-0">
          <CardContent className="p-10">
            <div className="text-center mb-10">
              <div className="inline-flex items-center bg-primary-medium/10 px-4 py-2 rounded-full mb-6">
                <Heart className="text-primary-medium mr-2 h-4 w-4" />
                <span className="text-sm font-medium text-primary-dark">Choose your path</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">Who are you taking this screening for?</h2>
              <p className="text-gray-600 text-lg leading-relaxed">Every journey begins with understanding. Choose the path that feels right for your situation.</p>
            </div>
            
            <div className="space-y-6">
              <button 
                onClick={() => selectRole("myself")}
                className="group w-full p-8 bg-gradient-to-r from-warm-blue to-white border-2 border-blue-200/50 rounded-2xl hover:from-primary-light hover:to-primary-medium hover:text-white transition-all duration-500 text-left shadow-lg hover:shadow-2xl transform hover:-translate-y-1"
              >
                <div className="flex items-center">
                  <div className="bg-white/80 group-hover:bg-white/20 p-4 rounded-2xl mr-6 transition-all duration-300">
                    <User className="text-primary-medium group-hover:text-white text-3xl transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl mb-2 text-gray-800 group-hover:text-white transition-colors duration-300">For Myself</h3>
                    <p className="text-gray-600 group-hover:text-gray-100 transition-colors duration-300">A completely private, anonymous self-assessment. Your responses stay with you.</p>
                    <div className="mt-3 flex items-center text-sm text-primary-medium group-hover:text-white/80">
                      <Shield className="w-4 h-4 mr-2" />
                      100% Anonymous • No data stored
                    </div>
                  </div>
                </div>
              </button>
              
              <button 
                onClick={() => selectRole("child")}
                className="group w-full p-8 bg-gradient-to-r from-gentle-mint to-white border-2 border-green-200/50 rounded-2xl hover:from-green-400 hover:to-green-500 hover:text-white transition-all duration-500 text-left shadow-lg hover:shadow-2xl transform hover:-translate-y-1"
              >
                <div className="flex items-center">
                  <div className="bg-white/80 group-hover:bg-white/20 p-4 rounded-2xl mr-6 transition-all duration-300">
                    <Heart className="text-green-600 group-hover:text-white text-3xl transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl mb-2 group-hover:text-white transition-colors duration-300">For My Child</h3>
                    <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-300">Parent or guardian assessment with optional progress tracking to support your child's growth.</p>
                    <div className="mt-3 flex items-center text-sm text-green-600 group-hover:text-white/80">
                      <Users className="w-4 h-4 mr-2" />
                      Family-focused • Optional saving
                    </div>
                  </div>
                </div>
              </button>
              
              <button 
                onClick={() => selectRole("student")}
                className="group w-full p-8 bg-gradient-to-r from-soft-orange to-white border-2 border-orange-200/50 rounded-2xl hover:from-yellow-400 hover:to-orange-400 hover:text-white transition-all duration-500 text-left shadow-lg hover:shadow-2xl transform hover:-translate-y-1"
              >
                <div className="flex items-center">
                  <div className="bg-white/80 group-hover:bg-white/20 p-4 rounded-2xl mr-6 transition-all duration-300">
                    <GraduationCap className="text-orange-600 group-hover:text-white text-3xl transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl mb-2 group-hover:text-white transition-colors duration-300">For My Student</h3>
                    <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-300">Teacher assessment with classroom insights to better support your student's learning journey.</p>
                    <div className="mt-3 flex items-center text-sm text-orange-600 group-hover:text-white/80">
                      <GraduationCap className="w-4 h-4 mr-2" />
                      Educator-focused • Classroom insights
                    </div>
                  </div>
                </div>
              </button>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500 leading-relaxed">
                <Heart className="inline w-4 h-4 mr-1 text-primary-medium" />
                Each path is designed with care and respect for your unique situation
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
