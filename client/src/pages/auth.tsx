import React from "react";
import { useLocation } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Key, Lock } from "lucide-react";

export default function Auth() {
  const [, setLocation] = useLocation();

  const handleSignIn = () => {
    // Use the proper Replit authentication flow
    window.location.href = '/api/login';
  };

  const handleSkip = () => {
    setLocation("/age-selection");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-blue via-gentle-mint to-warm-coral flex items-center justify-center py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-10 w-28 h-28 bg-white/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-10 w-36 h-36 bg-primary-light/20 rounded-full blur-2xl"></div>
      </div>
      
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Card className="shadow-2xl bg-white/95 backdrop-blur-sm border-0">
          <CardContent className="p-10">
            <div className="text-center mb-10">
              <div className="bg-gradient-to-br from-primary-light to-primary-medium p-4 rounded-2xl w-fit mx-auto mb-6">
                <Key className="text-white text-4xl" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">Keep Your Journey Safe</h2>
              <p className="text-gray-600 text-lg leading-relaxed">Would you like to sign in to save and track your progress over time? This helps us support your family's ongoing journey. You can sign in with Google, GitHub, X (Twitter), or email.</p>
            </div>
            
            <div className="space-y-6">
              <Button 
                onClick={handleSignIn}
                className="w-full bg-gradient-to-r from-primary-medium to-primary-light hover:from-primary-dark hover:to-primary-medium text-white font-semibold py-6 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <div className="flex items-center justify-center">
                  <svg className="mr-3 h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <span className="text-lg">Sign In (Google, GitHub, X, Email)</span>
                </div>
              </Button>
              
              <Button 
                variant="outline"
                onClick={handleSkip}
                className="w-full border-2 border-gray-300 text-gray-700 hover:border-primary-medium hover:text-primary-medium hover:bg-primary-medium/5 font-semibold py-6 px-8 rounded-2xl transition-all duration-300 backdrop-blur-sm bg-white/50"
              >
                <span className="text-lg">Continue Without Signing In</span>
              </Button>
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-warm-blue to-gentle-mint rounded-2xl">
              <div className="flex items-start">
                <Lock className="text-primary-medium h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <span className="font-semibold">Your privacy matters.</span> Whether you sign in or continue anonymously, your responses are always protected with enterprise-grade security.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
