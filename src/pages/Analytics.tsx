import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  TrendingDown, 
  Activity, 
  Users, 
  FileText, 
  Calendar,
  BarChart3,
  PieChart,
  Download
} from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";

export default function Analytics() {
  const analyticsData = {
    overview: {
      totalUploads: 28,
      activeCharts: 45,
      dataPoints: 12500,
      avgProcessingTime: "2.3s"
    },
    trends: [
      { period: "This Week", uploads: 8, change: +25, trend: "up" },
      { period: "This Month", uploads: 28, change: +12, trend: "up" },
      { period: "Last Month", uploads: 25, change: -8, trend: "down" },
    ],
    chartTypes: [
      { type: "Bar Charts", count: 18, percentage: 40 },
      { type: "Line Charts", count: 12, percentage: 27 },
      { type: "Pie Charts", count: 10, percentage: 22 },
      { type: "3D Charts", count: 5, percentage: 11 },
    ],
    recentActivity: [
      { action: "Created Bar Chart", file: "Sales_Q4.xlsx", time: "2 hours ago", status: "completed" },
      { action: "Uploaded File", file: "Marketing_Data.csv", time: "4 hours ago", status: "completed" },
      { action: "Generated 3D Visualization", file: "Product_Analytics.xlsx", time: "6 hours ago", status: "completed" },
      { action: "Downloaded Chart", file: "Revenue_Trends.xlsx", time: "1 day ago", status: "completed" },
      { action: "Created Pie Chart", file: "Customer_Segments.csv", time: "2 days ago", status: "completed" },
    ],
    performanceMetrics: [
      { metric: "Upload Success Rate", value: 98.5, target: 95 },
      { metric: "Chart Generation Speed", value: 87.2, target: 80 },
      { metric: "User Satisfaction", value: 94.1, target: 90 },
      { metric: "Data Processing Accuracy", value: 99.2, target: 98 },
    ]
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gradient">Analytics Dashboard</h1>
            <p className="text-muted-foreground mt-1">
              Comprehensive insights into your data visualization activities
            </p>
          </div>
          <Button className="btn-gradient">
            <Download className="mr-2 w-4 h-4" />
            Export Report
          </Button>
        </div>

        {/* Overview Stats */}
        <div className="dashboard-grid">
          <Card className="card-analytics">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Uploads</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analyticsData.overview.totalUploads}</div>
              <p className="text-xs text-muted-foreground">
                +12% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="card-analytics">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Charts</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analyticsData.overview.activeCharts}</div>
              <p className="text-xs text-muted-foreground">
                +8 new this week
              </p>
            </CardContent>
          </Card>

          <Card className="card-analytics">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Data Points</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analyticsData.overview.dataPoints.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                Processing {analyticsData.overview.avgProcessingTime} avg
              </p>
            </CardContent>
          </Card>

          <Card className="card-analytics">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Efficiency Score</CardTitle>
              <TrendingUp className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">94.2%</div>
              <p className="text-xs text-muted-foreground">
                +2.1% improvement
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Upload Trends */}
          <Card className="card-analytics">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Upload Trends
              </CardTitle>
              <CardDescription>File upload activity over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analyticsData.trends.map((trend, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <div>
                        <p className="font-medium">{trend.period}</p>
                        <p className="text-sm text-muted-foreground">{trend.uploads} uploads</p>
                      </div>
                    </div>
                    <Badge variant={trend.trend === 'up' ? 'default' : 'secondary'} className="flex items-center gap-1">
                      {trend.trend === 'up' ? (
                        <TrendingUp className="w-3 h-3" />
                      ) : (
                        <TrendingDown className="w-3 h-3" />
                      )}
                      {Math.abs(trend.change)}%
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Chart Distribution */}
          <Card className="card-analytics">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChart className="w-5 h-5" />
                Chart Type Distribution
              </CardTitle>
              <CardDescription>Most popular visualization types</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analyticsData.chartTypes.map((chart, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{chart.type}</span>
                      <span className="text-sm text-muted-foreground">{chart.count} charts</span>
                    </div>
                    <Progress value={chart.percentage} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Performance Metrics */}
        <Card className="card-analytics">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="w-5 h-5" />
              Performance Metrics
            </CardTitle>
            <CardDescription>System performance and quality indicators</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="dashboard-grid">
              {analyticsData.performanceMetrics.map((metric, index) => (
                <div key={index} className="p-4 border border-border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-sm">{metric.metric}</h4>
                    <Badge variant={metric.value >= metric.target ? 'default' : 'secondary'}>
                      {metric.value >= metric.target ? 'On Target' : 'Below Target'}
                    </Badge>
                  </div>
                  <div className="text-2xl font-bold mb-1">{metric.value}%</div>
                  <Progress value={metric.value} className="h-2 mb-1" />
                  <p className="text-xs text-muted-foreground">Target: {metric.target}%</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="card-analytics">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Recent Activity
            </CardTitle>
            <CardDescription>Latest actions and file processing</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {analyticsData.recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <Activity className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">{activity.file}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant="outline" className="mb-1">
                      {activity.status}
                    </Badge>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
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