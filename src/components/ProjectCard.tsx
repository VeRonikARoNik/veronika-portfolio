import React, { useState } from 'react';
import { ExternalLink, Github, Database, Cuboid as Cube, Brain, Gauge } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case '3d':
        return <Cube size={16} className="text-cream" />;
      case 'data-science':
        return <Database size={16} className="text-cream" />;
      case 'machine-learning':
        return <Brain size={16} className="text-cream" />;
      default:
        return <Database size={16} className="text-cream" />;
    }
  };

  return (
    <div
      className="bg-[#1a1a1a]/70 border border-gold/20 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group h-full flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-48 rounded-t-xl">
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full object-cover transition-transform duration-700 ease-in-out ${isHovered ? 'scale-105' : 'scale-100'}`}
        />
      </div>

      <div className="flex-1 p-5 flex flex-col space-y-3">
        <div className="flex items-center gap-2">
          {getCategoryIcon(project.category)}
          <span className="text-sm text-cream">
            {project.category === '3d' && '3D Design'}
            {project.category === 'data-science' && 'Data Science'}
            {project.category === 'machine-learning' && 'Machine Learning'}
          </span>
        </div>

        <h3 className="text-lg font-serif text-gold">
          {project.title}
        </h3>

        <p className="text-sm text-cream opacity-80">
          {project.description}
        </p>

        <div className="flex justify-between items-center mt-auto pt-4 border-t border-gold/10">
          <span className="text-xs text-cream/60">
            {project.complexity.charAt(0).toUpperCase() + project.complexity.slice(1)} • {project.impact.charAt(0).toUpperCase() + project.impact.slice(1)}
          </span>
          <div className="flex items-center space-x-2">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream hover:text-gold transition-colors"
              aria-label="View on GitHub"
            >
              <Github size={16} />
            </a>
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream hover:text-gold transition-colors"
                aria-label="Live site"
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
