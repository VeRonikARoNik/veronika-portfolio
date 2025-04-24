import React, { useState } from 'react';
import { ExternalLink, Github, Database, Cuboid as Cube, Brain, Youtube, Sparkles } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import { Project } from '../types';

const projectsData: Project[] = [
  {
    id: 1,
    title: 'CAD Training Projects',
    description: 'A collection of mechanical CAD design exercises modeled in Onshape. Inspired by engineering challenges and NASA-style components.',
    image: '/images/cad-projects.png',
    technologies: ['Onshape', 'CAD', '3D Design'],
    category: '3d',
    githubLink: 'https://github.com/VeRonikARoNik/cad-training-projects',
    liveLink: null,
    complexity: 'advanced',
    impact: 'high',
    tools: ['OnShape', 'Blender']
  },
  {
    id: 2,
    title: 'AI & ML Projects',
    description: 'Hands-on artificial intelligence projects including computer vision, predictive models and model optimization.',
    image: '/images/ai-projects.png',
    technologies: ['Python', 'TensorFlow', 'Scikit-learn'],
    category: 'machine-learning',
    githubLink: 'https://github.com/VeRonikARoNik/ai_projects',
    liveLink: null,
    complexity: 'advanced',
    impact: 'high',
    methodology: ['Computer Vision', 'ML Models', 'Optimization']
  },
  {
    id: 3,
    title: 'Oversampling Techniques Research',
    description: 'Scientific comparison of selected oversampling techniques for detecting network attacks. Presented at PPRAI 2025.',
    image: '/images/research-paper.png',
    technologies: ['SMOTE', 'GAN', 'Gradient Boosting'],
    category: 'data-science',
    githubLink: 'https://github.com/VeRonikARoNik/A-comparison-of-selected-oversampling-techniques-for-problem-of-detecting-network-attacks',
    liveLink: null,
    complexity: 'advanced',
    impact: 'high',
    methodology: ['Data Balancing', 'Classification']
  },
  {
    id: 4,
    title: 'Mindful Design & Meditation',
    description: 'Conceptual exploration of integrating mindfulness into the creative process — from design to development.',
    image: '/images/meditation.png',
    technologies: ['Design Thinking', 'Meditation'],
    category: 'personal-growth',
    githubLink: 'https://www.youtube.com/@VeronikaHordieieva-z7h',
    liveLink: null,
    complexity: 'intermediate',
    impact: 'medium',
    icon: Youtube,
    label: 'MindHealth'
  },
  {
    id: 5,
    title: 'Raspberry Universum',
    description: 'AI-powered robotics platform built on Raspberr  y Pi 5 with Sony IMX500 sensor. Edge vision meets embedded autonomy.',
    image: '/images/raspberry-universum.png',
    technologies: ['Raspberry Pi 5', 'IMX500', 'AI Hat', 'Edge AI'],
    category: 'machine-learning',
    githubLink: 'https://github.com/VeRonikARoNik/rapberry_universum',
    liveLink: null,
    complexity: 'advanced',
    impact: 'high'
  },
  {
    id: 6,
    title: 'Toastmasters Journey',
    description: 'My public speaking evolution — from club meetings to international contests. Empowering communication with confidence.',
    image: '/images/toastmasters.png',
    technologies: ['Leadership', 'Communication', 'Storytelling'],
    category: 'personal-growth',
    githubLink: 'https://www.youtube.com/@VeronikaHordieieva-z7h',
    liveLink: null,
    complexity: 'intermediate',
    impact: 'medium',
    icon: Youtube,
    label: 'Public Speaking'
  }
];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All', icon: <Database size={18} /> },
    { id: '3d', label: '3D Design', icon: <Cube size={18} /> },
    { id: 'data-science', label: 'Data Science', icon: <Database size={18} /> },
    { id: 'machine-learning', label: 'Machine Learning', icon: <Brain size={18} /> },
    { id: 'personal-growth', label: 'Personal Growth', icon: <Sparkles size={18} /> },
  ];

  const filteredProjects = activeCategory === 'all'
    ? projectsData
    : projectsData.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-[#f9f5f0] dark:bg-[#1e0f0b] text-[#2b1a17] dark:text-cream transition-colors duration-500">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gold dark:text-gold">Featured Projects</h2>
          <p className="text-lg max-w-2xl mx-auto">
            A showcase of my work in 3D design, data science, and machine learning. Each project represents a unique challenge and innovative solution.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex flex-wrap justify-center gap-2 p-1 bg-[#f0e8d8] dark:bg-[#2a1914] rounded-lg">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-md transition-all flex items-center gap-2 font-semibold text-sm ${
                  activeCategory === category.id
                    ? 'bg-gold text-white shadow-md'
                    : 'bg-transparent text-[#2b1a17] dark:text-cream hover:bg-[#f0e8d8] dark:hover:bg-[#3a241b]'
                }`}
              >
                {category.icon}
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://github.com/VeRonikARoNik"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gold hover:bg-[#b78b26] text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
          >
            <Github size={18} />
            See more on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
