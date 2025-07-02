import { useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text, Box, Cylinder } from "@react-three/drei";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Palette, Download, RotateCcw, ZoomIn } from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";

// 3D Chart Component
function Chart3D({ data, type, colors }: { data: number[], type: string, colors: string[] }) {
  const maxValue = Math.max(...data);
  
  return (
    <>
      {/* Background */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      
      {/* Chart Elements */}
      {type === '3d-column' && data.map((value, index) => {
        const height = (value / maxValue) * 4;
        const x = (index - data.length / 2) * 1.5;
        return (
          <group key={index} position={[x, height / 2, 0]}>
            <Box args={[1, height, 1]} position={[0, 0, 0]}>
              <meshStandardMaterial color={colors[index % colors.length]} />
            </Box>
            <Text
              position={[0, -0.5, 0]}
              fontSize={0.3}
              color="black"
              anchorX="center"
              anchorY="middle"
            >
              {`Item ${index + 1}`}
            </Text>
            <Text
              position={[0, height + 0.3, 0]}
              fontSize={0.25}
              color="black"
              anchorX="center"
              anchorY="middle"
            >
              {value}
            </Text>
          </group>
        );
      })}
      
      {type === '3d-cylinder' && data.map((value, index) => {
        const height = (value / maxValue) * 4;
        const angle = (index / data.length) * Math.PI * 2;
        const radius = 3;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        
        return (
          <group key={index} position={[x, height / 2, z]}>
            <Cylinder args={[0.4, 0.4, height, 8]} position={[0, 0, 0]}>
              <meshStandardMaterial color={colors[index % colors.length]} />
            </Cylinder>
            <Text
              position={[0, height + 0.5, 0]}
              fontSize={0.3}
              color="black"
              anchorX="center"
              anchorY="middle"
            >
              {value}
            </Text>
          </group>
        );
      })}
      
      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
    </>
  );
}

export default function Charts3D() {
  const [chartType, setChartType] = useState<'3d-column' | '3d-cylinder'>('3d-column');
  const [chartTitle, setChartTitle] = useState("3D Sales Analysis");
  const [colorScheme, setColorScheme] = useState("gradient");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Sample 3D data
  const sampleData = [85, 92, 78, 96, 73, 88, 91, 67];
  
  const colorSchemes = {
    gradient: ['#3B82F6', '#8B5CF6', '#22C55E', '#F59E0B', '#EF4444', '#06B6D4', '#8B5CF6', '#10B981'],
    blue: ['#1E40AF', '#3B82F6', '#60A5FA', '#93C5FD', '#DBEAFE', '#1E3A8A', '#1D4ED8', '#2563EB'],
    purple: ['#7C3AED', '#8B5CF6', '#A78BFA', '#C4B5FD', '#E9D5FF', '#6D28D9', '#7C2D12', '#8B5CF6'],
    warm: ['#DC2626', '#EA580C', '#F59E0B', '#EAB308', '#84CC16', '#22C55E', '#059669', '#0D9488'],
  };

  const resetView = () => {
    // Reset 3D view to default position
    console.log("Resetting 3D view");
  };

  const downloadChart = (format: 'png' | 'pdf') => {
    // Implement 3D chart download
    console.log(`Downloading 3D chart as ${format}`);
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gradient">3D Charts</h1>
            <p className="text-muted-foreground mt-1">
              Create immersive 3D visualizations with interactive controls
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={resetView} className="hover:bg-muted/50">
              <RotateCcw className="mr-2 w-4 h-4" />
              Reset View
            </Button>
            <Button variant="outline" onClick={() => downloadChart('png')} className="hover:bg-muted/50">
              <Download className="mr-2 w-4 h-4" />
              Export
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* 3D Configuration Panel */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="card-analytics">
              <CardHeader>
                <CardTitle className="text-lg">3D Chart Type</CardTitle>
                <CardDescription>Choose your 3D visualization</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div
                  className={`chart-selector ${
                    chartType === '3d-column' ? 'border-primary bg-primary/5' : ''
                  }`}
                  onClick={() => setChartType('3d-column')}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-primary rounded"></div>
                    <div>
                      <p className="font-medium text-sm">3D Column</p>
                      <p className="text-xs text-muted-foreground">Classic 3D bar chart</p>
                    </div>
                  </div>
                </div>
                
                <div
                  className={`chart-selector ${
                    chartType === '3d-cylinder' ? 'border-primary bg-primary/5' : ''
                  }`}
                  onClick={() => setChartType('3d-cylinder')}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-accent rounded-full"></div>
                    <div>
                      <p className="font-medium text-sm">3D Cylinder</p>
                      <p className="text-xs text-muted-foreground">Circular arrangement</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-analytics">
              <CardHeader>
                <CardTitle className="text-lg">Appearance</CardTitle>
                <CardDescription>Customize your 3D chart</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Chart Title</Label>
                  <Input
                    id="title"
                    value={chartTitle}
                    onChange={(e) => setChartTitle(e.target.value)}
                    placeholder="Enter 3D chart title"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Color Scheme</Label>
                  <Select value={colorScheme} onValueChange={setColorScheme}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select colors" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="gradient">Gradient Mix</SelectItem>
                      <SelectItem value="blue">Blue Tones</SelectItem>
                      <SelectItem value="purple">Purple Theme</SelectItem>
                      <SelectItem value="warm">Warm Colors</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button className="w-full btn-gradient">
                  Update 3D Chart
                </Button>
              </CardContent>
            </Card>

            <Card className="card-analytics">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <ZoomIn className="w-4 h-4" />
                  Controls
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>🖱️ <strong>Rotate:</strong> Left click + drag</p>
                <p>🔍 <strong>Zoom:</strong> Mouse wheel</p>
                <p>📱 <strong>Pan:</strong> Right click + drag</p>
                <p>📱 <strong>Touch:</strong> Pinch to zoom</p>
              </CardContent>
            </Card>
          </div>

          {/* 3D Chart Display */}
          <div className="lg:col-span-3">
            <Card className="card-analytics">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="w-5 h-5" />
                  {chartTitle}
                </CardTitle>
                <CardDescription>
                  Interactive 3D visualization - use mouse/touch to explore
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full h-[600px] bg-gradient-to-br from-muted/30 to-background rounded-lg border border-border overflow-hidden">
                  <Canvas
                    ref={canvasRef}
                    camera={{ position: [8, 8, 8], fov: 60 }}
                    style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)' }}
                  >
                    <Chart3D 
                      data={sampleData} 
                      type={chartType} 
                      colors={colorSchemes[colorScheme as keyof typeof colorSchemes]} 
                    />
                  </Canvas>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* 3D Chart Gallery */}
        <Card className="card-analytics">
          <CardHeader>
            <CardTitle>3D Chart Gallery</CardTitle>
            <CardDescription>Explore different 3D visualization examples</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: "Sales by Region", type: "3D Column", complexity: "Medium" },
                { title: "Market Distribution", type: "3D Cylinder", complexity: "Simple" },
                { title: "Performance Metrics", type: "3D Surface", complexity: "Advanced" },
              ].map((chart, index) => (
                <div key={index} className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                  <div className="w-full h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg mb-3 flex items-center justify-center">
                    <div className="text-4xl">📊</div>
                  </div>
                  <h4 className="font-medium">{chart.title}</h4>
                  <p className="text-sm text-muted-foreground">{chart.type}</p>
                  <span className="text-xs bg-muted px-2 py-1 rounded-full mt-2 inline-block">
                    {chart.complexity}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}