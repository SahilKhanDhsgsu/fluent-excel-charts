
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Upload, PieChart, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between bg-white border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <BarChart3 className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Excel Analytics</h1>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/login">
            <Button variant="ghost" className="hover:bg-gray-100 text-gray-700">Login</Button>
          </Link>
          <Link to="/register">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700">Get Started</Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 bg-white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                Transform Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Excel Data</span>{" "}
                Into Stunning{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Analytics</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Upload your Excel files and instantly generate beautiful 2D and 3D charts. 
                Build powerful dashboards with our intuitive analytics platform.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/register">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg px-8 py-6 hover:from-blue-700 hover:to-purple-700 shadow-lg">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-gray-300 hover:bg-gray-50 text-gray-700">
                  View Demo
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50 rounded-2xl shadow-lg border border-gray-200 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto">
                  <BarChart3 className="w-12 h-12 text-white" />
                </div>
                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Analytics Dashboard</div>
                <p className="text-gray-600">Transform Excel data into insights</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-20 bg-gray-50">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-6 text-gray-900">Powerful Analytics Features</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to transform raw data into actionable insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-md text-center space-y-4 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto">
              <Upload className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="text-2xl font-semibold text-gray-900">Easy Upload</h4>
            <p className="text-gray-600">
              Drag and drop your Excel files. Supports .xlsx, .xls, and .csv formats.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md text-center space-y-4 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto">
              <BarChart3 className="w-8 h-8 text-purple-600" />
            </div>
            <h4 className="text-2xl font-semibold text-gray-900">2D Charts</h4>
            <p className="text-gray-600">
              Create beautiful bar, line, pie, and scatter charts with customizable options.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md text-center space-y-4 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto">
              <PieChart className="w-8 h-8 text-green-600" />
            </div>
            <h4 className="text-2xl font-semibold text-gray-900">3D Visualization</h4>
            <p className="text-gray-600">
              Interactive 3D charts that bring your data to life with immersive experiences.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md text-center space-y-4 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto">
              <TrendingUp className="w-8 h-8 text-orange-600" />
            </div>
            <h4 className="text-2xl font-semibold text-gray-900">Analytics Dashboard</h4>
            <p className="text-gray-600">
              Track your analysis history and monitor data trends over time.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20 bg-white">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-12 rounded-2xl text-center max-w-4xl mx-auto border border-gray-200">
          <h3 className="text-4xl font-bold mb-6 text-gray-900">Ready to Transform Your Data?</h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who use Excel Analytics to create stunning visualizations.
          </p>
          <Link to="/register">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg px-12 py-6 hover:from-blue-700 hover:to-purple-700 shadow-lg">
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 bg-white">
        <div className="container mx-auto px-6 text-center text-gray-600">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <span className="font-semibold text-gray-900">Excel Analytics Platform</span>
          </div>
          <p>&copy; 2024 Excel Analytics. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
