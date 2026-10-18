import React, { useState } from 'react';
import { ExternalLink, Search, Folder, LayoutGrid, List } from 'lucide-react';
import { GithubIcon } from '../UI/BrandIcons';
import { projectsData, ProjectItem } from '../../data/projects';

export const ProjectsWindow: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = ['All', 'Web Platforms', 'Cloud & AI', 'AI Applications'];

  const filteredProjects = projectsData.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.techStack.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory =
      activeCategory === 'All' || project.folderCategory === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex flex-col h-full min-h-[480px]">
      {/* Finder-style Toolbar */}
      <div className="px-4 py-2.5 bg-slate-50/80 dark:bg-slate-900/80 border-b border-slate-200/80 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
        {/* Breadcrumb Path */}
        <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 font-medium">
          <Folder className="w-3.5 h-3.5 text-sky-500 fill-sky-500/20" />
          <span>Macintosh HD</span>
          <span className="opacity-40">/</span>
          <span>Bhoomi</span>
          <span className="opacity-40">/</span>
          <span className="font-semibold text-slate-900 dark:text-white">Projects</span>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold">
            {filteredProjects.length} items
          </span>
        </div>

        {/* Search and View Controls */}
        <div className="flex items-center gap-2">
          {/* Search Input */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8 pr-3 py-1 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500 w-36 sm:w-48 transition-all"
            />
          </div>

          {/* Grid / List view toggle */}
          <div className="flex items-center p-0.5 rounded-lg bg-slate-200/60 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1 rounded ${viewMode === 'grid' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs' : 'text-slate-500'}`}
              title="Grid View"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-1 rounded ${viewMode === 'list' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs' : 'text-slate-500'}`}
              title="List View"
            >
              <List className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area with Category Tabs */}
      <div className="p-4 sm:p-6 space-y-4">
        {/* Category Pill Filters */}
        <div className="flex flex-wrap gap-1.5 pb-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'bg-white/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200/60 dark:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid or List of Project Cards */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            {filteredProjects.map((project) => (
              <ProjectListItem key={project.id} project={project} />
            ))}
          </div>
        )}

        {filteredProjects.length === 0 && (
          <div className="py-12 text-center text-sm text-slate-500 dark:text-slate-400">
            No projects found matching "{searchTerm}".
          </div>
        )}
      </div>
    </div>
  );
};

const ProjectCard: React.FC<{ project: ProjectItem }> = ({ project }) => {
  return (
    <div className="p-5 rounded-2xl bg-white/85 dark:bg-slate-900/85 border border-slate-200/90 dark:border-slate-800 shadow-xs hover:shadow-md hover:border-sky-300 dark:hover:border-sky-700 transition-all flex flex-col justify-between group">
      <div>
        {/* Header: Name + Badge */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <div>
            <h3 className="text-lg font-display font-bold text-slate-900 dark:text-slate-100 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
              {project.name}
            </h3>
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400 line-clamp-1">
              {project.tagline}
            </p>
          </div>
          {project.badge && (
            <span className="px-2.5 py-0.5 rounded-full bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800 text-[10px] font-bold uppercase tracking-wider flex-shrink-0">
              {project.badge}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.techStack.map((tech, idx) => (
            <span
              key={idx}
              className="px-2.5 py-0.5 rounded-md bg-slate-100/90 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px] font-medium border border-slate-200/60 dark:border-slate-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-2 pt-3 border-t border-slate-100 dark:border-slate-800">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-1.5 px-3 rounded-lg bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold transition-all flex items-center justify-center gap-1.5 border border-slate-200 dark:border-slate-700 shadow-xs"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-1.5 px-3 rounded-lg bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold transition-all flex items-center justify-center gap-1.5 shadow-xs"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Live Demo</span>
          </a>
        )}
      </div>
    </div>
  );
};

const ProjectListItem: React.FC<{ project: ProjectItem }> = ({ project }) => {
  return (
    <div className="p-4 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-sky-300 dark:hover:border-sky-700 transition-all">
      <div className="space-y-1 max-w-xl">
        <div className="flex items-center gap-2">
          <h4 className="font-display font-bold text-sm text-slate-900 dark:text-slate-100">
            {project.name}
          </h4>
          {project.badge && (
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800 font-semibold">
              {project.badge}
            </span>
          )}
        </div>
        <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1 pt-1">
          {project.techStack.slice(0, 5).map((tech, idx) => (
            <span key={idx} className="text-[10px] text-slate-500 dark:text-slate-400">
              #{tech}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2 flex-shrink-0 self-end sm:self-center">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors"
            title="GitHub Repository"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-lg bg-sky-600 text-white text-xs font-semibold hover:bg-sky-700 transition-colors flex items-center gap-1 shadow-xs"
          >
            <span>Live</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>
    </div>
  );
};
