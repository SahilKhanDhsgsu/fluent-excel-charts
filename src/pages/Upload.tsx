import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Upload as UploadIcon, FileText, CheckCircle, X } from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { toast } from "sonner";

interface UploadedFile {
  id: string;
  file: File;
  progress: number;
  status: 'uploading' | 'completed' | 'error';
}

export default function Upload() {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const newFiles = acceptedFiles.map(file => ({
      id: Math.random().toString(36).substr(2, 9),
      file,
      progress: 0,
      status: 'uploading' as const,
    }));

    setUploadedFiles(prev => [...prev, ...newFiles]);

    // Simulate upload progress
    newFiles.forEach(uploadFile => {
      const interval = setInterval(() => {
        setUploadedFiles(prev => 
          prev.map(f => {
            if (f.id === uploadFile.id) {
              const newProgress = f.progress + Math.random() * 15;
              if (newProgress >= 100) {
                clearInterval(interval);
                toast.success(`${f.file.name} uploaded successfully!`);
                return { ...f, progress: 100, status: 'completed' };
              }
              return { ...f, progress: newProgress };
            }
            return f;
          })
        );
      }, 200);
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
      'application/vnd.ms-excel': ['.xls'],
      'text/csv': ['.csv'],
    },
    multiple: true,
  });

  const removeFile = (id: string) => {
    setUploadedFiles(prev => prev.filter(f => f.id !== id));
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gradient">Upload Data</h1>
          <p className="text-muted-foreground mt-1">
            Upload your Excel or CSV files to start creating visualizations
          </p>
        </div>

        {/* Upload Area */}
        <Card className="card-analytics">
          <CardHeader>
            <CardTitle>File Upload</CardTitle>
            <CardDescription>
              Drag and drop your files here, or click to browse. Supports .xlsx, .xls, and .csv files.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div
              {...getRootProps()}
              className={`upload-area cursor-pointer ${
                isDragActive ? 'border-primary bg-primary/10' : ''
              }`}
            >
              <input {...getInputProps()} />
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <UploadIcon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-center">
                  <p className="text-lg font-medium">
                    {isDragActive ? 'Drop your files here' : 'Choose files or drag here'}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Excel (.xlsx, .xls) and CSV files up to 50MB
                  </p>
                </div>
                <Button variant="outline" className="hover:bg-muted/50">
                  Browse Files
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Uploaded Files */}
        {uploadedFiles.length > 0 && (
          <Card className="card-analytics">
            <CardHeader>
              <CardTitle>Uploaded Files</CardTitle>
              <CardDescription>
                Track the progress of your file uploads
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {uploadedFiles.map((upload) => (
                  <div
                    key={upload.id}
                    className="flex items-center justify-between p-4 border border-border rounded-lg"
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        {upload.status === 'completed' ? (
                          <CheckCircle className="w-5 h-5 text-success" />
                        ) : (
                          <FileText className="w-5 h-5 text-primary" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium truncate">{upload.file.name}</p>
                        <div className="flex items-center gap-4">
                          <p className="text-sm text-muted-foreground">
                            {formatFileSize(upload.file.size)}
                          </p>
                          {upload.status === 'uploading' && (
                            <div className="flex-1 max-w-32">
                              <Progress value={upload.progress} className="h-2" />
                            </div>
                          )}
                          {upload.status === 'completed' && (
                            <p className="text-sm text-success font-medium">Completed</p>
                          )}
                        </div>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeFile(upload.id)}
                      className="hover:bg-destructive/10 hover:text-destructive"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Next Steps */}
        {uploadedFiles.some(f => f.status === 'completed') && (
          <Card className="card-analytics">
            <CardHeader>
              <CardTitle>What's Next?</CardTitle>
              <CardDescription>
                Your files are ready! Start creating visualizations.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-gradient">
                  Create 2D Charts
                </Button>
                <Button variant="outline" className="hover:bg-muted/50">
                  Create 3D Charts
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
}