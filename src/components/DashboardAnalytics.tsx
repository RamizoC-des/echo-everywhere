import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Users, 
  MessageSquare, 
  Upload,
  Download,
  Eye,
  Heart,
  Share,
  Calendar,
  Globe
} from "lucide-react";

const DashboardAnalytics = () => {
  const weeklyStats = [
    { day: 'Mon', engagement: 45, uploads: 12 },
    { day: 'Tue', engagement: 67, uploads: 8 },
    { day: 'Wed', engagement: 89, uploads: 15 },
    { day: 'Thu', engagement: 72, uploads: 11 },
    { day: 'Fri', engagement: 94, uploads: 18 },
    { day: 'Sat', engagement: 56, uploads: 6 },
    { day: 'Sun', engagement: 38, uploads: 4 }
  ];

  const recentInsights = [
    {
      title: "Youth Participation Up 34%",
      description: "Engagement among 18-25 age group increased significantly",
      trend: "positive",
      category: "Demographics"
    },
    {
      title: "Video Content Drives Engagement",
      description: "Video uploads receive 3x more interactions than text",
      trend: "positive",
      category: "Content"
    },
    {
      title: "Evening Peak Activity",
      description: "Most community activity happens between 7-9 PM",
      trend: "neutral",
      category: "Timing"
    }
  ];

  const communityMetrics = {
    totalMembers: 1247,
    activeToday: 89,
    totalUploads: 256,
    totalEngagement: 5642,
    surveysCompleted: 34,
    avgResponseTime: "2.3h"
  };

  return (
    <div className="space-y-6 pb-20">
      {/* Key Metrics */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="p-4 text-center">
          <Users className="w-8 h-8 mx-auto mb-2 text-primary" />
          <div className="text-2xl font-bold text-foreground">{communityMetrics.totalMembers.toLocaleString()}</div>
          <div className="text-sm text-muted-foreground">Total Members</div>
          <div className="text-xs text-community-success mt-1">+{communityMetrics.activeToday} active today</div>
        </Card>
        
        <Card className="p-4 text-center">
          <Upload className="w-8 h-8 mx-auto mb-2 text-community-success" />
          <div className="text-2xl font-bold text-foreground">{communityMetrics.totalUploads}</div>
          <div className="text-sm text-muted-foreground">Total Uploads</div>
          <div className="text-xs text-community-success mt-1">+15 this week</div>
        </Card>
        
        <Card className="p-4 text-center">
          <Heart className="w-8 h-8 mx-auto mb-2 text-destructive" />
          <div className="text-2xl font-bold text-foreground">{communityMetrics.totalEngagement.toLocaleString()}</div>
          <div className="text-sm text-muted-foreground">Engagements</div>
          <div className="text-xs text-community-success mt-1">+23% from last week</div>
        </Card>
        
        <Card className="p-4 text-center">
          <MessageSquare className="w-8 h-8 mx-auto mb-2 text-accent" />
          <div className="text-2xl font-bold text-foreground">{communityMetrics.surveysCompleted}</div>
          <div className="text-sm text-muted-foreground">Surveys Done</div>
          <div className="text-xs text-community-success mt-1">{communityMetrics.avgResponseTime} avg response</div>
        </Card>
      </div>

      {/* Weekly Engagement Chart */}
      <Card className="card-community">
        <h3 className="text-lg font-semibold mb-4">Weekly Activity</h3>
        <div className="space-y-4">
          {weeklyStats.map((stat, index) => (
            <div key={stat.day} className="flex items-center space-x-4">
              <div className="w-8 text-sm text-muted-foreground">{stat.day}</div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-foreground">Engagement</span>
                  <span className="text-sm font-medium">{stat.engagement}</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-gradient-primary h-2 rounded-full transition-all"
                    style={{ width: `${(stat.engagement / 100) * 100}%` }}
                  />
                </div>
              </div>
              <div className="w-16 text-right">
                <div className="text-xs text-muted-foreground">uploads</div>
                <div className="text-sm font-medium text-community-success">{stat.uploads}</div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* AI Insights */}
      <Card className="card-community">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">AI Insights</h3>
          <Badge className="bg-accent/10 text-accent border-accent/20">
            Auto-generated
          </Badge>
        </div>
        
        <div className="space-y-4">
          {recentInsights.map((insight, index) => (
            <div key={index} className="p-4 rounded-lg bg-muted/50 border-l-4 border-l-primary">
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-medium text-foreground">{insight.title}</h4>
                <Badge 
                  variant="secondary" 
                  className={`text-xs ${
                    insight.trend === 'positive' ? 'bg-community-success/10 text-community-success' :
                    insight.trend === 'negative' ? 'bg-destructive/10 text-destructive' :
                    'bg-muted text-muted-foreground'
                  }`}
                >
                  <TrendingUp className="w-3 h-3 mr-1" />
                  {insight.category}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">{insight.description}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4">
        <Button variant="outline" className="h-16 flex-col border-accent text-accent hover:bg-accent/10">
          <Download className="w-6 h-6 mb-1" />
          <span className="text-sm">Export Data</span>
        </Button>
        <Button variant="outline" className="h-16 flex-col border-community-warm text-community-warm hover:bg-community-warm/10">
          <Share className="w-6 h-6 mb-1" />
          <span className="text-sm">Share Report</span>
        </Button>
      </div>

      {/* Community Health Score */}
      <Card className="p-6 bg-gradient-community text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-1">Community Health Score</h3>
            <p className="text-white/80 text-sm">Based on engagement, participation & growth</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold">87%</div>
            <div className="text-white/80 text-sm">Excellent</div>
          </div>
        </div>
        
        <div className="mt-4 flex items-center space-x-4 text-sm">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
            Active Members: 89%
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-white/60 rounded-full mr-2"></div>
            Content Quality: 92%
          </div>
        </div>
      </Card>
    </div>
  );
};

export default DashboardAnalytics;