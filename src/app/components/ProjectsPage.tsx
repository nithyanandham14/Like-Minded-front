import { useState } from 'react';
import { MobileHeader } from './MobileHeader';
import { MobileNav } from './MobileNav';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Search, Filter, Briefcase, Clock, DollarSign, Users } from 'lucide-react';
import { motion } from 'motion/react';

export function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'active', label: 'Active' },
    { id: 'new', label: 'New' },
    { id: 'featured', label: 'Featured' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Mobile App Redesign',
      company: 'Tech Startup',
      description: 'Redesign our mobile banking app with modern UI/UX principles',
      budget: '$500-$1000',
      duration: '2-3 weeks',
      applicants: 12,
      skills: ['UI/UX', 'Figma', 'Mobile Design'],
      featured: true,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      title: 'E-Commerce Website',
      company: 'Fashion Brand',
      description: 'Build a modern e-commerce platform with payment integration',
      budget: '$800-$1500',
      duration: '3-4 weeks',
      applicants: 8,
      skills: ['React', 'Node.js', 'MongoDB'],
      featured: false,
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 3,
      title: 'Marketing Campaign',
      company: 'Local Business',
      description: 'Create and execute a social media marketing strategy',
      budget: '$300-$600',
      duration: '1-2 weeks',
      applicants: 15,
      skills: ['Marketing', 'Social Media', 'Content'],
      featured: true,
      color: 'from-orange-500 to-red-500',
    },
    {
      id: 4,
      title: 'Data Analysis Dashboard',
      company: 'Analytics Firm',
      description: 'Develop an interactive dashboard for business metrics',
      budget: '$700-$1200',
      duration: '2-3 weeks',
      applicants: 6,
      skills: ['Python', 'Data Viz', 'SQL'],
      featured: false,
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <MobileHeader title="Projects" />

      <div className="p-4 space-y-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 h-12 rounded-xl border-gray-200 bg-white"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center">
            <Filter className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Filters */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                activeFilter === filter.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects List */}
        <div className="space-y-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-all active:scale-[0.98] cursor-pointer overflow-hidden">
                <div className={`h-1 bg-gradient-to-r ${project.color}`}></div>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-gray-900">{project.title}</h3>
                        {project.featured && (
                          <Badge className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white border-0 text-xs">
                            Featured
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-600">{project.company}</p>
                    </div>
                  </div>

                  <p className="text-sm text-gray-700 mb-3 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-blue-50 text-blue-700 border-0 text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-3 mb-3 py-3 border-t border-gray-100">
                    <div className="flex items-center gap-1.5 text-xs text-gray-600">
                      <DollarSign className="w-3.5 h-3.5 text-green-600" />
                      <span>{project.budget}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-600">
                      <Clock className="w-3.5 h-3.5 text-blue-600" />
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-600">
                      <Users className="w-3.5 h-3.5 text-purple-600" />
                      <span>{project.applicants} applied</span>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl py-2.5 font-semibold hover:from-blue-700 hover:to-purple-700 transition-all active:scale-95">
                    Apply Now
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <MobileNav />
    </div>
  );
}
