import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import MobileNavigation from "@/components/MobileNavigation";
import CommunityProfile from "@/components/CommunityProfile";
import UploadCenter from "@/components/UploadCenter";
import DashboardAnalytics from "@/components/DashboardAnalytics";
import ResearchTools from "@/components/ResearchTools";
import communityHero from "@/assets/community-hero.jpg";
import { 
  Users, 
  Upload, 
  BarChart3, 
  MessageSquare,
  ArrowRight,
  Globe,
  Heart,
  Shield,
  Smartphone
} from "lucide-react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("dashboard");

  const features = [
    {
      icon: Users,
      title: "Community Profiles",
      description: "Customizable profiles for youth, women, and PWDs with cultural relevance",
      color: "text-community-warm"
    },
    {
      icon: Upload,
      title: "Secure Uploads",
      description: "Upload reports, videos, pictures, and audio with offline sync",
      color: "text-community-success"
    },
    {
      icon: BarChart3,
      title: "AI Insights",
      description: "Automated daily summaries and AI-driven insights from content",
      color: "text-accent"
    },
    {
      icon: MessageSquare,
      title: "Smart Engagement",
      description: "AI-powered comments, moderation, and interactive features",
      color: "text-primary"
    }
  ];

  const supportedLanguages = ["English", "Somali", "Arabic", "Oromo"];

  const renderContent = () => {
    switch (activeSection) {
      case "community":
        return <CommunityProfile />;
      case "upload":
        return <UploadCenter />;
      case "analytics":
        return <DashboardAnalytics />;
      case "research":
        return <ResearchTools />;
      default:
        return (
          <div className="space-y-8 pb-20">
            {/* Hero Section */}
            <div className="relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-community opacity-90" />
              <img 
                src={communityHero} 
                alt="Community engagement and collaboration" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center text-center p-6">
                <div className="text-white">
                  <h1 className="text-2xl font-bold mb-2">Empowering Communities</h1>
                  <p className="text-white/90 text-sm mb-4">
                    Cross-platform community engagement designed for low-bandwidth environments
                  </p>
                  <Button className="bg-white text-primary hover:bg-white/90">
                    <Smartphone className="w-4 h-4 mr-2" />
                    Get Started
                  </Button>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 text-center">
                <div className="text-2xl font-bold text-community-success">1,247</div>
                <div className="text-sm text-muted-foreground">Community Members</div>
                <div className="text-xs text-community-success mt-1">+89 active today</div>
              </Card>
              
              <Card className="p-4 text-center">
                <div className="text-2xl font-bold text-accent">256</div>
                <div className="text-sm text-muted-foreground">Content Uploads</div>
                <div className="text-xs text-community-success mt-1">+15 this week</div>
              </Card>
            </div>

            {/* Features Grid */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-foreground">Platform Features</h2>
              <div className="grid gap-4">
                {features.map((feature, index) => (
                  <Card key={index} className="p-4 hover:shadow-medium transition-smooth cursor-pointer">
                    <div className="flex items-start space-x-4">
                      <div className={`p-2 rounded-lg bg-primary/10`}>
                        <feature.icon className={`w-5 h-5 ${feature.color}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{feature.description}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground" />
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Language Support */}
            <Card className="card-community">
              <div className="flex items-center space-x-3 mb-4">
                <Globe className="w-6 h-6 text-accent" />
                <h3 className="text-lg font-semibold">Multilingual Support</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                Auto-translate, text-to-speech, and voice-to-text capabilities
              </p>
              <div className="flex flex-wrap gap-2">
                {supportedLanguages.map((lang) => (
                  <Badge key={lang} variant="secondary" className="text-xs">
                    {lang}
                  </Badge>
                ))}
                <Badge variant="outline" className="text-xs">
                  +Regional Dialects
                </Badge>
              </div>
            </Card>

            {/* Security & Compliance */}
            <Card className="p-4 bg-gradient-subtle border-primary/20">
              <div className="flex items-center space-x-3">
                <Shield className="w-6 h-6 text-primary" />
                <div>
                  <h3 className="font-semibold text-foreground">Security & Privacy</h3>
                  <p className="text-sm text-muted-foreground">
                    2FA, role-based access, GDPR compliance, encrypted storage
                  </p>
                </div>
                <Heart className="w-5 h-5 text-destructive ml-auto" />
              </div>
            </Card>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4">
              <Button 
                className="btn-community h-16"
                onClick={() => setActiveSection("upload")}
              >
                <Upload className="w-6 h-6 mb-1" />
                <span className="text-sm">Upload Content</span>
              </Button>
              <Button 
                variant="outline" 
                className="h-16 flex-col border-accent text-accent hover:bg-accent/10"
                onClick={() => setActiveSection("research")}
              >
                <MessageSquare className="w-6 h-6 mb-1" />
                <span className="text-sm">Create Survey</span>
              </Button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <MobileNavigation />
      
      <main className="mobile-container pt-6">
        {/* Section Navigation */}
        <div className="flex overflow-x-auto space-x-2 mb-6 pb-2">
          {[
            { id: "dashboard", label: "Dashboard", icon: BarChart3 },
            { id: "community", label: "Community", icon: Users },
            { id: "upload", label: "Upload", icon: Upload },
            { id: "research", label: "Research", icon: MessageSquare },
            { id: "analytics", label: "Analytics", icon: BarChart3 }
          ].map((section) => (
            <Button
              key={section.id}
              variant={activeSection === section.id ? "default" : "outline"}
              size="sm"
              className={`whitespace-nowrap ${
                activeSection === section.id ? "btn-community" : ""
              }`}
              onClick={() => setActiveSection(section.id)}
            >
              <section.icon className="w-4 h-4 mr-1" />
              {section.label}
            </Button>
          ))}
        </div>

        {renderContent()}
      </main>
    </div>
  );
};

export default Index;
