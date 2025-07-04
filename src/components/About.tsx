
import { Briefcase, User } from "lucide-react";

export const About = () => {
  const experiences = [
    {
      title: "Business Intelligence Analyst",
      company: "Saudi Authority for Industrial Cities and Technological Areas",
      location: "Riyadh, KSA",
      period: "Sep 2024 - Present",
      highlights: [
        "Spearhead data-driven strategic planning by developing and monitoring key performance indicators (KPIs)",
        "Conduct credit profiling and risk assessment for land and factory tenants",
        "Design and implement financial dashboards and reports in Power BI and Excel",
        "Collaborate with internal departments to translate complex data into actionable insights"
      ]
    },
    {
      title: "Retail Credit Analyst & MIS Analyst",
      company: "Suez Canal Bank",
      period: "Jul 2023 - Jul 2024",
      highlights: [
        "Responsible for creating reports using Power BI",
        "Use Power Query and Power Pivot to automate data cleaning and report creation",
        "Help in creating a statistical model to predict the probability of default using logistic regression",
        "Reviewing credit applications and documents"
      ]
    }
  ];

  return (
    <section id="about" className="py-20 bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A dedicated professional with a strong background in business analysis, 
            credit risk assessment, and data visualization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="flex items-center mb-4">
              <User className="text-blue-600 mr-3" size={28} />
              <h3 className="text-2xl font-semibold text-gray-800">Background</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Bachelor of Economics graduate from Cairo University with expertise in financial analysis, 
              strategic planning, and data visualization. Strong track record in data-driven portfolio analysis 
              and stakeholder reporting.
            </p>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Education</h4>
              <p className="text-gray-600">Bachelor of Economics</p>
              <p className="text-sm text-gray-500">Cairo University (Sep 2017 - Jul 2021)</p>
              <p className="text-sm text-gray-500">GPA: 3.56/4 Very Good</p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex items-center mb-6">
              <Briefcase className="text-blue-600 mr-3" size={28} />
              <h3 className="text-2xl font-semibold text-gray-800">Experience</h3>
            </div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <h4 className="font-bold text-lg text-gray-800 mb-1">{exp.title}</h4>
                <p className="font-semibold text-blue-600 mb-1">{exp.company}</p>
                {exp.location && <p className="text-sm text-gray-500 mb-2">{exp.location}</p>}
                <p className="text-sm text-gray-500 mb-4">{exp.period}</p>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-gray-600 text-sm flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
