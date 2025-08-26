import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  User, 
  MapPin, 
  Globe, 
  Heart,
  Users,
  Upload,
  MessageCircle,
  Star
} from "lucide-react";

const CommunityProfile = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const userProfile = {
    name: "Amina Hassan",
    role: "Community Leader",
    location: "Mogadishu, Somalia",
    languages: ["Somali", "English", "Arabic"],
    communityType: "Youth Empowerment",
    joinedDate: "March 2024",
    stats: {
      contributions: 47,
      engaged: 156,
      surveys: 12,
      impact: 89
    }
  };

  const recentActivity = [
    {
      type: "upload",
      title: "Youth Skills Training Report",
      time: "2 hours ago",
      engagement: 23
    },
    {
      type: "survey",
      title: "Community Needs Assessment",
      time: "1 day ago",
      responses: 87
    },
    {
      type: "discussion",
      title: "Women's Economic Empowerment",
      time: "3 days ago",
      comments: 34
    }
  ];

  return (
    <div className="space-y-6 pb-20">
      {/* Profile Header */}
      <Card className="card-community">
        <div className="flex items-start space-x-4">
          <Avatar className="w-16 h-16">
            <AvatarImage src="/placeholder-avatar.jpg" />
            <AvatarFallback className="bg-gradient-community text-white text-lg font-bold">
              AH
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-1 min-w-0">
            <h2 className="text-xl font-bold text-foreground">{userProfile.name}</h2>
            <p className="text-muted-foreground">{userProfile.role}</p>
            
            <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                {userProfile.location}
              </div>
              <div className="flex items-center">
                <Globe className="w-4 h-4 mr-1" />
                {userProfile.languages.length} languages
              </div>
            </div>
            
            <Badge className="mt-2 bg-community-warm/10 text-community-warm border-community-warm/20">
              {userProfile.communityType}
            </Badge>
          </div>
        </div>
      </Card>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="p-4 text-center">
          <Upload className="w-6 h-6 mx-auto mb-2 text-community-success" />
          <div className="text-2xl font-bold text-foreground">{userProfile.stats.contributions}</div>
          <div className="text-sm text-muted-foreground">Contributions</div>
        </Card>
        
        <Card className="p-4 text-center">
          <Heart className="w-6 h-6 mx-auto mb-2 text-destructive" />
          <div className="text-2xl font-bold text-foreground">{userProfile.stats.engaged}</div>
          <div className="text-sm text-muted-foreground">People Engaged</div>
        </Card>
        
        <Card className="p-4 text-center">
          <Users className="w-6 h-6 mx-auto mb-2 text-accent" />
          <div className="text-2xl font-bold text-foreground">{userProfile.stats.surveys}</div>
          <div className="text-sm text-muted-foreground">Surveys Created</div>
        </Card>
        
        <Card className="p-4 text-center">
          <Star className="w-6 h-6 mx-auto mb-2 text-community-warning" />
          <div className="text-2xl font-bold text-foreground">{userProfile.stats.impact}%</div>
          <div className="text-sm text-muted-foreground">Impact Score</div>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="card-community">
        <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {recentActivity.map((activity, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/50">
              <div className={`p-2 rounded-lg ${
                activity.type === 'upload' ? 'bg-community-success/10' :
                activity.type === 'survey' ? 'bg-accent/10' : 'bg-community-warm/10'
              }`}>
                {activity.type === 'upload' && <Upload className="w-4 h-4 text-community-success" />}
                {activity.type === 'survey' && <Users className="w-4 h-4 text-accent" />}
                {activity.type === 'discussion' && <MessageCircle className="w-4 h-4 text-community-warm" />}
              </div>
              
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-foreground">{activity.title}</h4>
                <p className="text-sm text-muted-foreground">{activity.time}</p>
                <div className="text-xs text-community-success mt-1">
                  {activity.engagement && `${activity.engagement} engagements`}
                  {activity.responses && `${activity.responses} responses`}
                  {activity.comments && `${activity.comments} comments`}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4">
        <Button className="btn-community">
          <Upload className="w-4 h-4 mr-2" />
          Upload Content
        </Button>
        <Button variant="outline" className="border-community-warm text-community-warm hover:bg-community-warm/10">
          <Users className="w-4 h-4 mr-2" />
          Create Survey
        </Button>
      </div>
    </div>
  );
};

export default CommunityProfile;