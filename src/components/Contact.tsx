
import { Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to discuss opportunities in data analysis, financial modeling, or business intelligence? 
            Let's connect and explore how we can work together.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-0 shadow-2xl">
            <CardContent className="p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                      Let's Collaborate
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      I'm always interested in discussing new opportunities, 
                      sharing insights about data analysis and Machine Learning applications in business and finance, 
                      or collaborating on innovative projects.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="text-blue-600" size={20} />
                      <span className="text-gray-700">bassam.ahmad.rashwan@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-gray-700">📱 +966505328442</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <Button 
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-4 rounded-xl transform hover:scale-105 transition-all duration-200"
                    asChild
                  >
                    <a href="mailto:bassam.ahmad.rashwan@gmail.com">
                      <Mail className="mr-2" size={20} />
                      Send Email
                    </a>
                  </Button>
                  
                  <Button 
                    size="lg"
                    variant="outline"
                    className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-4 rounded-xl transform hover:scale-105 transition-all duration-200"
                    asChild
                  >
                    <a href="https://www.linkedin.com/in/bassam-rashwan-5b26291b3" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2" size={20} />
                      Connect on LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-16 pt-8 border-t border-gray-200">
          <p className="text-gray-500">
            © 2024 Bassam Rashwan. Built with passion for data and innovation.
          </p>
        </div>
      </div>
    </section>
  );
};
