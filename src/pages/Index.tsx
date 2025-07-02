import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Upload, PieChart, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-analytics.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
            <BarChart3 className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gradient">Excel Analytics</h1>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/login">
            <Button variant="ghost" className="hover:bg-muted/50">Login</Button>
          </Link>
          <Link to="/register">
            <Button className="btn-gradient">Get Started</Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-6">
              <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
                Transform Your{" "}
                <span className="text-gradient">Excel Data</span>{" "}
                Into Stunning{" "}
                <span className="text-gradient">Analytics</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Upload your Excel files and instantly generate beautiful 2D and 3D charts. 
                Build powerful dashboards with our intuitive analytics platform.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/register">
                <Button size="lg" className="btn-gradient text-lg px-8 py-6">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/demo">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 hover:bg-muted/50">
                  View Demo
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative animate-float">
            <img
              src={heroImage}
              alt="Excel Analytics Dashboard"
              className="rounded-2xl shadow-analytics w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-6">Powerful Analytics Features</h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to transform raw data into actionable insights
          </p>
        </div>

        <div className="dashboard-grid max-w-4xl mx-auto">
          <div className="card-analytics p-8 text-center space-y-4 hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
              <Upload className="w-8 h-8 text-primary" />
            </div>
            <h4 className="text-2xl font-semibold">Easy Upload</h4>
            <p className="text-muted-foreground">
              Drag and drop your Excel files. Supports .xlsx, .xls, and .csv formats.
            </p>
          </div>

          <div className="card-analytics p-8 text-center space-y-4 hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto">
              <BarChart3 className="w-8 h-8 text-accent" />
            </div>
            <h4 className="text-2xl font-semibold">2D Charts</h4>
            <p className="text-muted-foreground">
              Create beautiful bar, line, pie, and scatter charts with customizable options.
            </p>
          </div>

          <div className="card-analytics p-8 text-center space-y-4 hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-success/10 rounded-2xl flex items-center justify-center mx-auto">
              <PieChart className="w-8 h-8 text-success" />
            </div>
            <h4 className="text-2xl font-semibold">3D Visualization</h4>
            <p className="text-muted-foreground">
              Interactive 3D charts that bring your data to life with immersive experiences.
            </p>
          </div>

          <div className="card-analytics p-8 text-center space-y-4 hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-warning/10 rounded-2xl flex items-center justify-center mx-auto">
              <TrendingUp className="w-8 h-8 text-warning" />
            </div>
            <h4 className="text-2xl font-semibold">Analytics Dashboard</h4>
            <p className="text-muted-foreground">
              Track your analysis history and monitor data trends over time.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="card-analytics p-12 text-center max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold mb-6">Ready to Transform Your Data?</h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who use Excel Analytics to create stunning visualizations.
          </p>
          <Link to="/register">
            <Button size="lg" className="btn-gradient text-lg px-12 py-6">
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <span className="font-semibold text-foreground">Excel Analytics Platform</span>
          </div>
          <p>&copy; 2024 Excel Analytics. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
