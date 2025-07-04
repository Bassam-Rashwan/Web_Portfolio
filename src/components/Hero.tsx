
import { Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Bassam Rashwan
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-4 font-light">
            Business Intelligence Analyst & Data Visualization Specialist
          </p>
          
          <p className="text-lg text-gray-500 mb-8 max-w-3xl mx-auto leading-relaxed">
            Experienced analyst with expertise in industrial strategy (MODON KSA) and banking (Suez Canal Bank). 
            Skilled in KPI dashboards, credit risk modeling, and automating reports using Power BI, Excel, and Python.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-200"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-200"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a 
              href="mailto:bassam.ahmad.rashwan@gmail.com"
              className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200 text-blue-600 hover:text-blue-700"
            >
              <Mail size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/bassam-rashwan-5b26291b3"
              className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200 text-blue-600 hover:text-blue-700"
              target="_blank" rel="noopener noreferrer"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
