import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Upload, 
  FileText, 
  Image, 
  Video, 
  Mic,
  Cloud,
  CheckCircle,
  AlertCircle,
  Clock
} from "lucide-react";

const UploadCenter = () => {
  const [dragActive, setDragActive] = useState(false);
  const [uploads, setUploads] = useState([
    {
      id: 1,
      name: "Community Survey Results.pdf",
      type: "document",
      size: "2.4 MB",
      status: "completed",
      progress: 100,
      uploadedAt: "2 minutes ago"
    },
    {
      id: 2,
      name: "Youth Workshop Video.mp4",
      type: "video",
      size: "45.2 MB",
      status: "uploading",
      progress: 67,
      estimatedTime: "2m remaining"
    },
    {
      id: 3,
      name: "Interview Audio.wav",
      type: "audio",
      size: "12.8 MB",
      status: "queued",
      progress: 0,
      estimatedTime: "Waiting..."
    }
  ]);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    // Handle file drop logic here
  };

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'document': return <FileText className="w-5 h-5" />;
      case 'image': return <Image className="w-5 h-5" />;
      case 'video': return <Video className="w-5 h-5" />;
      case 'audio': return <Mic className="w-5 h-5" />;
      default: return <FileText className="w-5 h-5" />;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-4 h-4 text-community-success" />;
      case 'uploading': return <Clock className="w-4 h-4 text-community-warning" />;
      case 'queued': return <AlertCircle className="w-4 h-4 text-muted-foreground" />;
      default: return <AlertCircle className="w-4 h-4 text-muted-foreground" />;
    }
  };

  return (
    <div className="space-y-6 pb-20">
      {/* Upload Status Overview */}
      <div className="grid grid-cols-3 gap-4">
        <Card className="p-4 text-center">
          <CheckCircle className="w-6 h-6 mx-auto mb-2 text-community-success" />
          <div className="text-xl font-bold text-foreground">24</div>
          <div className="text-sm text-muted-foreground">Completed</div>
        </Card>
        
        <Card className="p-4 text-center">
          <Clock className="w-6 h-6 mx-auto mb-2 text-community-warning" />
          <div className="text-xl font-bold text-foreground">3</div>
          <div className="text-sm text-muted-foreground">In Progress</div>
        </Card>
        
        <Card className="p-4 text-center">
          <Cloud className="w-6 h-6 mx-auto mb-2 text-accent" />
          <div className="text-xl font-bold text-foreground">2.1GB</div>
          <div className="text-sm text-muted-foreground">Total Size</div>
        </Card>
      </div>

      {/* Upload Area */}
      <Card className="card-community">
        <div
          className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
            dragActive 
              ? 'border-primary bg-primary/5' 
              : 'border-border hover:border-primary/50'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
          <h3 className="text-lg font-semibold mb-2">Upload Documents & Media</h3>
          <p className="text-muted-foreground mb-4">
            Drag and drop files here, or click to select
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            <Badge variant="secondary" className="text-xs">Reports</Badge>
            <Badge variant="secondary" className="text-xs">Videos</Badge>
            <Badge variant="secondary" className="text-xs">Audio</Badge>
            <Badge variant="secondary" className="text-xs">Images</Badge>
          </div>
          
          <Button className="btn-community">
            <Upload className="w-4 h-4 mr-2" />
            Choose Files
          </Button>
          
          <div className="mt-4 text-xs text-muted-foreground">
            <p>Supports: PDF, DOC, MP4, MP3, JPG, PNG • Max 100MB per file</p>
            <p className="mt-1">🌐 Offline uploads will sync when connected</p>
          </div>
        </div>
      </Card>

      {/* Quick Upload Actions */}
      <div className="grid grid-cols-2 gap-4">
        <Button variant="outline" className="h-16 flex-col border-community-success text-community-success hover:bg-community-success/10">
          <FileText className="w-6 h-6 mb-1" />
          <span className="text-sm">Report</span>
        </Button>
        <Button variant="outline" className="h-16 flex-col border-accent text-accent hover:bg-accent/10">
          <Video className="w-6 h-6 mb-1" />
          <span className="text-sm">Video</span>
        </Button>
      </div>

      {/* Recent Uploads */}
      <Card className="card-community">
        <h3 className="text-lg font-semibold mb-4">Recent Uploads</h3>
        <div className="space-y-4">
          {uploads.map((upload) => (
            <div key={upload.id} className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50">
              <div className="p-2 rounded-lg bg-primary/10">
                {getFileIcon(upload.type)}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-medium text-foreground truncate">{upload.name}</h4>
                  {getStatusIcon(upload.status)}
                </div>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{upload.size}</span>
                  <span>
                    {upload.status === 'completed' && upload.uploadedAt}
                    {upload.status === 'uploading' && upload.estimatedTime}
                    {upload.status === 'queued' && upload.estimatedTime}
                  </span>
                </div>
                
                {upload.status === 'uploading' && (
                  <Progress value={upload.progress} className="mt-2 h-2" />
                )}
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* AI Processing Status */}
      <Card className="p-4 bg-gradient-subtle border-accent/20">
        <div className="flex items-center space-x-3">
          <div className="p-2 rounded-lg bg-accent/10">
            <CheckCircle className="w-5 h-5 text-accent" />
          </div>
          <div>
            <h4 className="font-medium text-foreground">AI Processing Complete</h4>
            <p className="text-sm text-muted-foreground">
              3 new insights generated from your uploads
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default UploadCenter;