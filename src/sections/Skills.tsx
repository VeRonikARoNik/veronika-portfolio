import React from 'react';
import { Code, Cpu, LayoutDashboard, Languages, Rocket, BarChart, ClipboardList, Heart } from 'lucide-react';

const skills = [
  {
    title: 'Frontend Development',
    icon: <LayoutDashboard size={24} />,
    items: ['React', 'TypeScript', 'TailwindCSS', 'HTML/CSS', 'Vite']
  },
  {
    title: 'Backend & Data Science',
    icon: <Cpu size={24} />,
    items: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'SQL (MySQL) for project DB design']
  },
  {
    title: '3D & Embedded',
    icon: <Rocket size={24} />,
    items: ['Onshape CAD', 'Raspberry Pi 5', 'IMX500 AI Vision', '3DEXPERIENCE / ENOVIA (Basic)', 'Material science & coatings (Basic)']
  },
  {
    title: 'AI & ML Capabilities',
    icon: <BarChart size={24} />,
    items: ['Computer Vision', 'Classification', 'Data Balancing']
  },
  {
    title: 'Tools & Deployment',
    icon: <ClipboardList size={24} />,
    items: ['Git', 'GitHub', 'Vercel', 'Notion', 'Microsoft Office (Excel, Word, PowerPoint, Project)']
  },
  {
    title: 'Languages & Communication',
    icon: <Languages size={24} />,
    items: ['English (Fluent)', 'Polish (Native)', 'Ukrainian (Native)', 'Russian (Native)']
  },
  {
    title: 'Soft Skills',
    icon: <Heart size={24} />,
    items: ['Analytical thinking', 'Commitment & proactive problem solving', 'Team collaboration & communication']
  },
  {
    title: 'Hobbies',
    icon: <Heart size={24} />,
    items: ['Roller skating & quad skating', 'Mindful meditation practice', 'Reading and reflecting on books']
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-[#1e0f0b] text-cream">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gold mb-4">My Skills</h2>
          <p className="text-lg max-w-3xl mx-auto text-gold/80">
            A well-rounded collection of technical and creative skills — blending engineering, design, and storytelling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, index) => (
            <div
              key={index}
              className="bg-[#3a1f1f] border border-gold/20 rounded-xl shadow-lg p-6 hover:shadow-gold/30 transition-all transform hover:scale-105"
            >
              <div className="flex items-center mb-4 gap-3 text-gold">
                {category.icon}
                <h3 className="text-lg font-semibold text-gold">{category.title}</h3>
              </div>
              <ul className="list-disc list-inside text-cream space-y-1 text-sm">
                {category.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;