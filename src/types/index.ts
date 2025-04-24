export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: '3d' | 'data-science' | 'machine-learning';
  githubLink: string;
  liveLink: string | null;
  complexity: 'beginner' | 'intermediate' | 'advanced';
  impact: 'low' | 'medium' | 'high';
  methodology?: string[];
  datasets?: string[];
  tools?: string[];
}