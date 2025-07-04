
export const Skills = () => {
  const skillCategories = [
    {
      title: "Data Analysis & Visualization",
      skills: ["Power BI", "Power Query", "Power Pivot", "DAX","Tableau", "Excel"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Programming & Database",
      skills: ["Python", "SQL"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Financial Analysis",
      skills: ["Credit Risk Modeling", "KPI Development", "Portfolio Analysis", "Financial Reporting"],
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Machine Learning",
      skills: ["Regression Analysis", "Logistic Regression","XGBOOST" ,"Clustering", "Time Series Prediction"],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit for data analysis, financial modeling, and business intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg mb-4 flex items-center justify-center`}>
                <span className="text-white font-bold text-xl">{index + 1}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">{category.title}</h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="bg-gray-50 px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl">
          <h3 className="text-2xl font-semibold text-center mb-6 text-gray-800">Languages</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <h4 className="font-semibold text-gray-800">Arabic</h4>
              <p className="text-gray-600">Native Speaker</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-gray-800">English</h4>
              <p className="text-gray-600">Advanced</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
