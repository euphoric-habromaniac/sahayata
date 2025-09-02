import { useLocation } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { User, UserCheck, Heart } from "lucide-react";

export default function AgeSelection() {
  const [, setLocation] = useLocation();

  const selectAge = (ageGroup: string) => {
    localStorage.setItem("ageGroup", ageGroup);
    setLocation("/questionnaire");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-blue via-gentle-mint to-warm-coral flex items-center justify-center py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-28 h-28 bg-white/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-36 h-36 bg-primary-light/20 rounded-full blur-2xl"></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-warm-yellow/30 rounded-full blur-lg"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="bg-gradient-to-br from-primary-light to-primary-medium p-4 rounded-2xl w-fit mx-auto mb-6">
            <UserCheck className="text-white text-4xl" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">Choose the Right Age Group</h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
            Selecting the appropriate age range helps us tailor questions for the most meaningful insights about development and growth patterns.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <button 
            onClick={() => selectAge("8-13")}
            className="group p-10 bg-gradient-to-br from-warm-blue to-white border-2 border-blue-200/50 rounded-3xl hover:from-primary-light hover:to-primary-medium hover:text-white transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105"
          >
            <div className="bg-white/80 group-hover:bg-white/20 p-4 rounded-2xl w-fit mx-auto mb-6 transition-all duration-300">
              <User className="text-primary-medium group-hover:text-white text-4xl transition-colors duration-300" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-white transition-colors duration-300">Ages 8-13</h3>
            <p className="text-gray-600 group-hover:text-gray-100 transition-colors duration-300 leading-relaxed mb-4">
              Elementary to middle school years - focusing on foundational learning and social development patterns
            </p>
            <div className="flex items-center justify-center text-sm text-primary-medium group-hover:text-white/80">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
              Tailored for younger learners
            </div>
          </button>
          
          <button 
            onClick={() => selectAge("14-19")}
            className="group p-10 bg-gradient-to-br from-gentle-mint to-white border-2 border-green-200/50 rounded-3xl hover:from-green-400 hover:to-green-500 hover:text-white transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105"
          >
            <div className="bg-white/80 group-hover:bg-white/20 p-4 rounded-2xl w-fit mx-auto mb-6 transition-all duration-300">
              <UserCheck className="text-green-600 group-hover:text-white text-4xl transition-colors duration-300" />
            </div>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors duration-300">Ages 14-19</h3>
            <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-300 leading-relaxed mb-4">
              High school to early college years - exploring more complex emotional and academic challenges
            </p>
            <div className="flex items-center justify-center text-sm text-green-600 group-hover:text-white/80">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              Designed for teen development
            </div>
          </button>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600 leading-relaxed">
            <Heart className="inline w-4 h-4 mr-1 text-primary-medium" />
            Both age ranges are thoughtfully designed with developmentally appropriate questions
          </p>
        </div>
      </div>
    </div>
  );
}
