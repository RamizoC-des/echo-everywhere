import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Users, 
  Upload, 
  BarChart3, 
  MessageSquare, 
  Search,
  Settings,
  Menu,
  X
} from "lucide-react";

const MobileNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
    { icon: Home, label: "Dashboard", href: "#dashboard" },
    { icon: Users, label: "Community", href: "#community" },
    { icon: Upload, label: "Upload", href: "#upload" },
    { icon: Search, label: "Research", href: "#research" },
    { icon: MessageSquare, label: "Engage", href: "#engage" },
    { icon: BarChart3, label: "Analytics", href: "#analytics" },
  ];

  return (
    <>
      {/* Mobile Header */}
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Users className="w-4 h-4 text-primary-foreground" />
            </div>
            <h1 className="text-lg font-bold text-foreground">Community+</h1>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-sm">
          <nav className="flex flex-col p-4 pt-20 space-y-2">
            {navItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                className="justify-start h-12 text-left"
                onClick={() => setIsMenuOpen(false)}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.label}
              </Button>
            ))}
            <div className="pt-4 border-t border-border">
              <Button variant="ghost" className="justify-start h-12 text-left">
                <Settings className="w-5 h-5 mr-3" />
                Settings
              </Button>
            </div>
          </nav>
        </div>
      )}

      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-t border-border">
        <div className="flex items-center justify-around py-2">
          {navItems.slice(0, 5).map((item) => (
            <Button
              key={item.label}
              variant="ghost"
              size="sm"
              className="flex flex-col items-center p-2 min-w-0 text-xs"
            >
              <item.icon className="w-4 h-4 mb-1" />
              <span className="truncate">{item.label}</span>
            </Button>
          ))}
        </div>
      </nav>
    </>
  );
};

export default MobileNavigation;