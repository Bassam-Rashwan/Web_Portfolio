
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link, Briefcase, Plus } from "lucide-react";
import { ProjectForm } from "./ProjectForm";

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  image?: string;
  type: 'academic' | 'professional' | 'personal';
}

export const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: '1',
      title: 'Asset Regime & Macro Insights Dashboard',
      description: 'provides a dynamic view into market behavior by combining real-time data from financial markets with regime detection models and macroeconomic indicators',
      technologies: ['Python', 'SQL Server', 'Tableau', 'Machine Learning'],
      image: import.meta.env.BASE_URL + 'Tableau_Market_Regime_Detection.jpeg',
      type: 'professional',
      link: 'https://lnkd.in/db4azra4' // Example link, replace with actual
    },
    {
      id: '2',
      title: 'Commitment of Traders Analysis',
      description: 'Created comprehensive Power BI dashboards for monitoring key performance indicators across FX markets.',
      technologies: ['Power BI', 'DAX', 'Power Query'],
      image: import.meta.env.BASE_URL + 'COT_Dashboard.png',
      type: 'professional',
      link: 'https://drive.google.com/file/d/1XKGOFJ-rrGz5001c-3FcNRvLvne-jawZ/view' // Example link, replace with actual
    },
    {
      id: '3',
      title: 'S&P500 Analysis and Prediction with LSTM model Using Python and Dash',
      description: 'Developed a comprehensive analysis and prediction model for the S&P500 index using LSTM neural networks, visualized with Dash.',
      technologies: ['Machine Learning', 'Python', 'Dash'],
      image: import.meta.env.BASE_URL + 'LSTM_Project.png',
      type: 'professional',
      link: 'https://drive.google.com/file/d/1Bo86g6A_0Q4KXOK-yAQEmGcwMTU32U77/view' // Example link, replace with actual
    }
  ]);

  const [showForm, setShowForm] = useState(false);

  const addProject = (newProject: Omit<Project, 'id'>) => {
    const project: Project = {
      ...newProject,
      id: Date.now().toString()
    };
    setProjects([...projects, project]);
    setShowForm(false);
  };

  const deleteProject = (id: string) => {
    setProjects(projects.filter(p => p.id !== id));
  };

  const getTypeColor = (type: Project['type']) => {
    switch (type) {
      case 'professional': return 'bg-blue-100 text-blue-800';
      case 'academic': return 'bg-green-100 text-green-800';
      case 'personal': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleImageClick = (link?: string) => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="projects" className="py-20 bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Projects Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            A showcase of my work in data analysis, financial modeling, and business intelligence.
          </p>
          
          {/* <Button 
            onClick={() => setShowForm(true)}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
          >
            <Plus className="mr-2" size={20} />
            Add New Project
          </Button> */}
        </div>

        {showForm && (
          <div className="mb-12">
            <ProjectForm onSubmit={addProject} onCancel={() => setShowForm(false)} />
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm border border-gray-100 overflow-hidden">
              {project.image && (
                <div 
                  className="relative h-48 overflow-hidden cursor-pointer group"
                  onClick={() => handleImageClick(project.link)}
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {project.link && (
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Link className="text-white" size={32} />
                    </div>
                  )}
                </div>
              )}
              
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge className={getTypeColor(project.type)}>
                    {project.type}
                  </Badge>
                  {/* Delete button removed */}
                </div>
                <CardTitle className="text-xl text-gray-800 flex items-center">
                  <Briefcase className="mr-2 text-blue-600" size={20} />
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </CardDescription>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="bg-blue-50 text-blue-700">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                {project.link && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Link className="mr-2" size={16} />
                      View Project
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {projects.length === 0 && (
          <div className="text-center py-16">
            <Briefcase className="mx-auto text-gray-400 mb-4" size={64} />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No projects yet</h3>
            <p className="text-gray-500">Add your first project to get started!</p>
          </div>
        )}
      </div>
    </section>
  );
};
