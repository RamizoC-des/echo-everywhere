import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  PlusCircle,
  FileQuestion,
  Users,
  BarChart3,
  Clock,
  CheckCircle,
  MessageSquare,
  Globe,
  Wifi,
  WifiOff,
  Download
} from "lucide-react";

const ResearchTools = () => {
  const [activeTab, setActiveTab] = useState("surveys");
  const [offlineMode, setOfflineMode] = useState(false);

  const activeSurveys = [
    {
      id: 1,
      title: "Community Healthcare Access",
      status: "active",
      responses: 156,
      target: 200,
      timeLeft: "5 days",
      languages: ["English", "Somali"],
      offline: true
    },
    {
      id: 2,
      title: "Youth Education Priorities",
      status: "draft",
      responses: 0,
      target: 150,
      timeLeft: "Not started",
      languages: ["English", "Somali", "Arabic"],
      offline: true
    },
    {
      id: 3,
      title: "Women's Economic Empowerment",
      status: "completed",
      responses: 187,
      target: 150,
      timeLeft: "Completed",
      languages: ["English", "Somali"],
      offline: false
    }
  ];

  const quickTemplates = [
    {
      icon: Users,
      title: "Community Needs",
      description: "Assess community priorities and needs",
      category: "General",
      estimated: "5 min"
    },
    {
      icon: BarChart3,
      title: "Impact Assessment",
      description: "Measure program effectiveness",
      category: "Evaluation",
      estimated: "8 min"
    },
    {
      icon: MessageSquare,
      title: "Feedback Collection",
      description: "Gather user experience feedback",
      category: "Feedback",
      estimated: "3 min"
    },
    {
      icon: Globe,
      title: "Cultural Survey",
      description: "Understand cultural preferences",
      category: "Cultural",
      estimated: "10 min"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-community-success/10 text-community-success border-community-success/20';
      case 'draft': return 'bg-community-warning/10 text-community-warning border-community-warning/20';
      case 'completed': return 'bg-muted text-muted-foreground border-border';
      default: return 'bg-muted text-muted-foreground border-border';
    }
  };

  return (
    <div className="space-y-6 pb-20">
      {/* Offline Status */}
      <Card className={`p-4 ${offlineMode ? 'bg-community-warning/10 border-community-warning/20' : 'bg-community-success/10 border-community-success/20'}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {offlineMode ? 
              <WifiOff className="w-5 h-5 text-community-warning" /> : 
              <Wifi className="w-5 h-5 text-community-success" />
            }
            <div>
              <h4 className="font-medium">
                {offlineMode ? 'Offline Mode Active' : 'Online - Synced'}
              </h4>
              <p className="text-sm text-muted-foreground">
                {offlineMode ? 'Surveys will sync when connected' : 'All data synchronized'}
              </p>
            </div>
          </div>
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => setOfflineMode(!offlineMode)}
          >
            {offlineMode ? 'Connect' : 'Go Offline'}
          </Button>
        </div>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-4">
        <Card className="p-4 text-center">
          <FileQuestion className="w-6 h-6 mx-auto mb-2 text-primary" />
          <div className="text-xl font-bold text-foreground">12</div>
          <div className="text-sm text-muted-foreground">Active Surveys</div>
        </Card>
        
        <Card className="p-4 text-center">
          <Users className="w-6 h-6 mx-auto mb-2 text-community-success" />
          <div className="text-xl font-bold text-foreground">2.4K</div>
          <div className="text-sm text-muted-foreground">Responses</div>
        </Card>
        
        <Card className="p-4 text-center">
          <BarChart3 className="w-6 h-6 mx-auto mb-2 text-accent" />
          <div className="text-xl font-bold text-foreground">87%</div>
          <div className="text-sm text-muted-foreground">Completion Rate</div>
        </Card>
      </div>

      {/* Create New Survey */}
      <Card className="card-community">
        <h3 className="text-lg font-semibold mb-4">Create New Survey</h3>
        
        <div className="grid grid-cols-2 gap-3 mb-4">
          {quickTemplates.map((template, index) => (
            <Button
              key={index}
              variant="outline"
              className="h-auto p-4 flex-col text-left hover:bg-primary/5 hover:border-primary/20"
            >
              <div className="w-full flex items-start space-x-3">
                <template.icon className="w-5 h-5 text-primary mt-1" />
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm">{template.title}</div>
                  <div className="text-xs text-muted-foreground mt-1 line-clamp-2">
                    {template.description}
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <Badge variant="secondary" className="text-xs">
                      {template.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {template.estimated}
                    </span>
                  </div>
                </div>
              </div>
            </Button>
          ))}
        </div>
        
        <Button className="w-full btn-community">
          <PlusCircle className="w-4 h-4 mr-2" />
          Create Custom Survey
        </Button>
      </Card>

      {/* Active Surveys */}
      <Card className="card-community">
        <h3 className="text-lg font-semibold mb-4">Your Surveys</h3>
        
        <div className="space-y-4">
          {activeSurveys.map((survey) => (
            <div key={survey.id} className="p-4 rounded-lg bg-muted/50 border border-border">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-foreground">{survey.title}</h4>
                  <div className="flex items-center space-x-4 mt-1 text-sm text-muted-foreground">
                    <span>{survey.responses} / {survey.target} responses</span>
                    <span className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {survey.timeLeft}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  {survey.offline && (
                    <Badge variant="secondary" className="text-xs bg-community-info/10 text-community-info">
                      <WifiOff className="w-3 h-3 mr-1" />
                      Offline
                    </Badge>
                  )}
                  <Badge className={getStatusColor(survey.status)}>
                    {survey.status}
                  </Badge>
                </div>
              </div>
              
              {survey.status === 'active' && (
                <div className="mb-3">
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium">
                      {Math.round((survey.responses / survey.target) * 100)}%
                    </span>
                  </div>
                  <Progress 
                    value={(survey.responses / survey.target) * 100} 
                    className="h-2"
                  />
                </div>
              )}
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Globe className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    {survey.languages.join(', ')}
                  </span>
                </div>
                
                <div className="flex items-center space-x-2">
                  {survey.status === 'completed' && (
                    <Button variant="ghost" size="sm">
                      <Download className="w-4 h-4 mr-1" />
                      Export
                    </Button>
                  )}
                  <Button variant="ghost" size="sm">
                    <BarChart3 className="w-4 h-4 mr-1" />
                    View Results
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Integration Options */}
      <Card className="card-community">
        <h3 className="text-lg font-semibold mb-4">External Integrations</h3>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-community-success/10 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-community-success" />
              </div>
              <div>
                <div className="font-medium text-sm">Google Forms</div>
                <div className="text-xs text-muted-foreground">Connected & syncing</div>
              </div>
            </div>
            <Button variant="ghost" size="sm">Configure</Button>
          </div>
          
          <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                <FileQuestion className="w-4 h-4 text-accent" />
              </div>
              <div>
                <div className="font-medium text-sm">KoBoToolbox</div>
                <div className="text-xs text-muted-foreground">Ready to connect</div>
              </div>
            </div>
            <Button variant="outline" size="sm">Connect</Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ResearchTools;