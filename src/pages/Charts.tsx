import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { BarChart3, LineChart, PieChart, ScatterChart, Download } from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  BarElement, 
  LineElement,
  PointElement,
  ArcElement,
  Title, 
  Tooltip, 
  Legend 
} from 'chart.js';
import { Bar, Line, Pie, Scatter } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export default function Charts() {
  const [selectedChart, setSelectedChart] = useState<'bar' | 'line' | 'pie' | 'scatter'>('bar');
  const [chartTitle, setChartTitle] = useState("Sales Performance Q4 2024");
  const [xAxis, setXAxis] = useState("Month");
  const [yAxis, setYAxis] = useState("Revenue");

  // Sample data - in real app this would come from uploaded Excel files
  const sampleData = {
    bar: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'Revenue ($000)',
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: 'rgba(59, 130, 246, 0.6)',
        borderColor: 'rgb(59, 130, 246)',
        borderWidth: 2,
      }]
    },
    line: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'Growth Rate (%)',
        data: [12, 19, 3, 17, 28, 24],
        backgroundColor: 'rgba(139, 92, 246, 0.1)',
        borderColor: 'rgb(139, 92, 246)',
        tension: 0.4,
        pointBackgroundColor: 'rgb(139, 92, 246)',
      }]
    },
    pie: {
      labels: ['Desktop', 'Mobile', 'Tablet', 'Other'],
      datasets: [{
        data: [45, 30, 20, 5],
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(139, 92, 246, 0.8)',
          'rgba(34, 197, 94, 0.8)',
          'rgba(251, 191, 36, 0.8)',
        ],
        borderWidth: 0,
      }]
    },
    scatter: {
      datasets: [{
        label: 'Customer Satisfaction vs Revenue',
        data: [
          { x: 85, y: 65000 },
          { x: 92, y: 75000 },
          { x: 78, y: 55000 },
          { x: 88, y: 70000 },
          { x: 95, y: 82000 },
          { x: 82, y: 60000 },
        ],
        backgroundColor: 'rgba(59, 130, 246, 0.6)',
        borderColor: 'rgb(59, 130, 246)',
      }]
    }
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          usePointStyle: true,
          padding: 20,
        }
      },
      title: {
        display: true,
        text: chartTitle,
        font: {
          size: 16,
          weight: 'bold' as const,
        }
      },
    },
    scales: selectedChart !== 'pie' ? {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        }
      },
      x: {
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        }
      }
    } : undefined,
  };

  const chartTypes = [
    { id: 'bar', name: 'Bar Chart', icon: BarChart3, description: 'Great for comparing categories' },
    { id: 'line', name: 'Line Chart', icon: LineChart, description: 'Perfect for trends over time' },
    { id: 'pie', name: 'Pie Chart', icon: PieChart, description: 'Shows parts of a whole' },
    { id: 'scatter', name: 'Scatter Plot', icon: ScatterChart, description: 'Displays relationships between variables' },
  ];

  const renderChart = () => {
    switch (selectedChart) {
      case 'bar':
        return <Bar data={sampleData.bar} options={chartOptions} />;
      case 'line':
        return <Line data={sampleData.line} options={chartOptions} />;
      case 'pie':
        return <Pie data={sampleData.pie} options={chartOptions} />;
      case 'scatter':
        return <Scatter data={sampleData.scatter} options={chartOptions} />;
      default:
        return <Bar data={sampleData.bar} options={chartOptions} />;
    }
  };

  const downloadChart = (format: 'png' | 'pdf') => {
    // Implement chart download functionality
    console.log(`Downloading chart as ${format}`);
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gradient">2D Charts</h1>
            <p className="text-muted-foreground mt-1">
              Create beautiful visualizations from your data
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => downloadChart('png')} className="hover:bg-muted/50">
              <Download className="mr-2 w-4 h-4" />
              PNG
            </Button>
            <Button variant="outline" onClick={() => downloadChart('pdf')} className="hover:bg-muted/50">
              <Download className="mr-2 w-4 h-4" />
              PDF
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Chart Configuration Panel */}
          <div className="lg:col-span-1 space-y-6">
            {/* Chart Type Selection */}
            <Card className="card-analytics">
              <CardHeader>
                <CardTitle className="text-lg">Chart Type</CardTitle>
                <CardDescription>Choose your visualization style</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {chartTypes.map((type) => (
                  <div
                    key={type.id}
                    className={`chart-selector ${
                      selectedChart === type.id ? 'border-primary bg-primary/5' : ''
                    }`}
                    onClick={() => setSelectedChart(type.id as any)}
                  >
                    <div className="flex items-center gap-3">
                      <type.icon className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium text-sm">{type.name}</p>
                        <p className="text-xs text-muted-foreground">{type.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Chart Configuration */}
            <Card className="card-analytics">
              <CardHeader>
                <CardTitle className="text-lg">Configuration</CardTitle>
                <CardDescription>Customize your chart</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Chart Title</Label>
                  <Input
                    id="title"
                    value={chartTitle}
                    onChange={(e) => setChartTitle(e.target.value)}
                    placeholder="Enter chart title"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="xaxis">X-Axis</Label>
                  <Select value={xAxis} onValueChange={setXAxis}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select X-axis" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Month">Month</SelectItem>
                      <SelectItem value="Quarter">Quarter</SelectItem>
                      <SelectItem value="Year">Year</SelectItem>
                      <SelectItem value="Product">Product</SelectItem>
                      <SelectItem value="Region">Region</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="yaxis">Y-Axis</Label>
                  <Select value={yAxis} onValueChange={setYAxis}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Y-axis" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Revenue">Revenue</SelectItem>
                      <SelectItem value="Sales">Sales</SelectItem>
                      <SelectItem value="Profit">Profit</SelectItem>
                      <SelectItem value="Growth">Growth Rate</SelectItem>
                      <SelectItem value="Customers">Customers</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button className="w-full btn-gradient">
                  Generate Chart
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Chart Display */}
          <div className="lg:col-span-3">
            <Card className="card-analytics">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Chart Visualization
                </CardTitle>
                <CardDescription>
                  Interactive chart based on your selected data and configuration
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="chart-container" style={{ height: '500px' }}>
                  {renderChart()}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Chart History */}
        <Card className="card-analytics">
          <CardHeader>
            <CardTitle>Recent Charts</CardTitle>
            <CardDescription>Your recently created visualizations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: "Monthly Sales", type: "Bar Chart", date: "2 hours ago" },
                { title: "Growth Trends", type: "Line Chart", date: "1 day ago" },
                { title: "Market Share", type: "Pie Chart", date: "3 days ago" },
              ].map((chart, index) => (
                <div key={index} className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                  <h4 className="font-medium">{chart.title}</h4>
                  <p className="text-sm text-muted-foreground">{chart.type}</p>
                  <p className="text-xs text-muted-foreground mt-1">{chart.date}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}