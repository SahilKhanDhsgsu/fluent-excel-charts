import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, Upload, PieChart, TrendingUp, FileText, Activity } from "lucide-react";
import { Link } from "react-router-dom";
import { DashboardLayout } from "@/components/layout/DashboardLayout";

export default function Dashboard() {
  const stats = [
    {
      title: "Total Files",
      value: "12",
      description: "+2 from last week",
      icon: FileText,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      title: "Charts Created",
      value: "34",
      description: "+8 from last week",
      icon: BarChart3,
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      title: "Data Points",
      value: "2.5K",
      description: "+15% from last month",
      icon: Activity,
      color: "text-success",
      bgColor: "bg-success/10",
    },
    {
      title: "Visualizations",
      value: "18",
      description: "+4 from last week",
      icon: TrendingUp,
      color: "text-warning",
      bgColor: "bg-warning/10",
    },
  ];

  const recentFiles = [
    { name: "Sales_Data_Q4.xlsx", date: "2 hours ago", charts: 5 },
    { name: "Marketing_Analytics.csv", date: "1 day ago", charts: 3 },
    { name: "Financial_Report.xlsx", date: "3 days ago", charts: 8 },
    { name: "Customer_Data.csv", date: "1 week ago", charts: 2 },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gradient">Dashboard</h1>
            <p className="text-muted-foreground mt-1">
              Welcome back! Here's an overview of your analytics.
            </p>
          </div>
          <Link to="/upload">
            <Button className="btn-gradient">
              <Upload className="mr-2 w-4 h-4" />
              Upload Data
            </Button>
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="dashboard-grid">
          {stats.map((stat) => (
            <Card key={stat.title} className="card-analytics hover:scale-105 transition-transform duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <div className={`w-8 h-8 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                  <stat.icon className={`w-4 h-4 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid lg:grid-cols-3 gap-6">
          <Link to="/upload" className="block">
            <Card className="card-analytics p-6 text-center hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Upload className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Upload New File</h3>
              <p className="text-muted-foreground">
                Upload Excel or CSV files to start creating visualizations
              </p>
            </Card>
          </Link>

          <Link to="/charts" className="block">
            <Card className="card-analytics p-6 text-center hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Create 2D Charts</h3>
              <p className="text-muted-foreground">
                Generate beautiful bar, line, pie, and scatter charts
              </p>
            </Card>
          </Link>

          <Link to="/charts-3d" className="block">
            <Card className="card-analytics p-6 text-center hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="w-16 h-16 bg-success/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <PieChart className="w-8 h-8 text-success" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3D Visualizations</h3>
              <p className="text-muted-foreground">
                Create immersive 3D charts and interactive experiences
              </p>
            </Card>
          </Link>
        </div>

        {/* Recent Files */}
        <Card className="card-analytics">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Recent Files
            </CardTitle>
            <CardDescription>
              Your recently uploaded data files and their analytics
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentFiles.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{file.name}</p>
                      <p className="text-sm text-muted-foreground">{file.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{file.charts} charts</p>
                    <p className="text-xs text-muted-foreground">created</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}