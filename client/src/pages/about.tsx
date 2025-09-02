import { Heart, Shield, Brain, Users, BookOpen, Clock, Target, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function About() {
  const [, setLocation] = useLocation();

  const teamMembers = [
    {
      name: "Pranjal",
      role: "Captain",
      description: "Backend development, research, and core logic implementation. Leading the technical architecture and ensuring robust system design.",
      specialties: ["Backend", "Research", "Logic"]
    },
    {
      name: "Divyansh",
      role: "Authentication & Presentation",
      description: "Developing secure APIs for login systems and crafting compelling presentations to showcase our platform.",
      specialties: ["APIs", "Authentication", "Presentation"]
    },
    {
      name: "Gaurav",
      role: "Questionnaire Specialist",
      description: "Preparing psychologically-grounded questionnaires, ensuring all screening questions are clinically relevant and evidence-based.",
      specialties: ["Psychology", "Research", "Clinical Validation"]
    },
    {
      name: "Debashish & Abhay",
      role: "Frontend Development",
      description: "Creating intuitive, empathetic user interfaces that make mental health screening accessible and comfortable for all users.",
      specialties: ["Frontend", "UI/UX", "User Experience"]
    }
  ];

  const approach = [
    {
      icon: Heart,
      title: "Empathy-First Design",
      description: "Every interaction is crafted with care, ensuring users feel supported throughout their journey."
    },
    {
      icon: Shield,
      title: "Privacy by Design",
      description: "Your privacy isn't an afterthought—it's built into every aspect of our platform from the ground up."
    },
    {
      icon: Brain,
      title: "Evidence-Based Questions",
      description: "Our screening questions are based on established clinical research and developmental psychology."
    },
    {
      icon: Users,
      title: "Family-Centered Approach",
      description: "We understand that supporting young people means supporting entire families and communities."
    }
  ];

  const comingSoonFeatures = [
    {
      icon: Clock,
      title: "Expanded Age Groups",
      description: "Support for all age ranges from childhood through elderly (ages 3-80), with age-appropriate screening tools.",
      timeline: "Coming Q2 2024"
    },
    {
      icon: Users,
      title: "Extended Roles",
      description: "New screening perspectives for partners, siblings, grandparents, and other family members.",
      timeline: "Coming Q3 2024"
    },
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Custom ML model trained on psychiatric research and clinical data for enhanced accuracy and personalized recommendations.",
      timeline: "Coming Q4 2024"
    },
    {
      icon: Target,
      title: "Medical Report Generation",
      description: "Professional reports that can be shared with healthcare providers to support your therapy journey.",
      timeline: "Coming 2025"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-blue via-gentle-mint to-warm-coral">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 right-10 w-28 h-28 bg-primary-light/20 rounded-full blur-xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-sm">
              <Heart className="text-primary-medium mr-2 h-4 w-4" />
              <span className="text-sm font-medium text-primary-dark">Our Story & Mission</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6">
              About Sahayata
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Sahayata means "assistance" in Sanskrit. We're building technology that assists families, educators, and individuals in understanding developmental and mental health patterns with compassion and care.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              Our Thoughtful Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe technology should feel human, especially when it comes to mental health
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approach.map((item, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white/90 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-to-br from-primary-light to-primary-medium p-4 rounded-2xl w-fit mx-auto mb-6">
                    <item.icon className="text-white h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-dark mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Features */}
      <section className="py-20 bg-gradient-to-b from-white/50 to-neutral-bg relative">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-10 w-40 h-40 bg-warm-coral rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-32 h-32 bg-warm-blue rounded-full blur-2xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-primary-medium/10 px-4 py-2 rounded-full mb-6">
              <Zap className="text-primary-medium mr-2 h-4 w-4" />
              <span className="text-sm font-medium text-primary-dark">What's Next</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              Exciting Features Coming Soon
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're continuously expanding Sahayata to serve more families and provide deeper insights
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {comingSoonFeatures.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/95 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-start mb-6">
                    <div className="bg-gradient-to-br from-primary-light to-primary-medium p-3 rounded-xl mr-4 flex-shrink-0">
                      <feature.icon className="text-white h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary-dark mb-2">{feature.title}</h3>
                      <div className="inline-flex items-center bg-primary-medium/10 px-3 py-1 rounded-full mb-3">
                        <span className="text-xs font-medium text-primary-medium">{feature.timeline}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="ghoststack-team" className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              GhostStack Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built with love by developers who care deeply about mental health accessibility
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white/95 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-start mb-6">
                    <div className="bg-gradient-to-br from-primary-light to-primary-medium p-3 rounded-xl mr-4 flex-shrink-0">
                      <Users className="text-white h-8 w-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary-dark mb-2">{member.name}</h3>
                      <p className="text-primary-medium font-semibold mb-3">{member.role}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {member.specialties.map((specialty, idx) => (
                          <span key={idx} className="inline-flex items-center bg-primary-medium/10 px-3 py-1 rounded-full text-xs font-medium text-primary-medium">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Take the first step towards understanding with our compassionate screening tool
          </p>
          <Button 
            onClick={() => setLocation("/role-selection")}
            className="bg-gradient-to-r from-primary-medium to-primary-light hover:from-primary-dark hover:to-primary-medium text-white font-semibold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <Heart className="mr-2 h-5 w-5" />
            Start Your Assessment
          </Button>
        </div>
      </section>
    </div>
  );
}