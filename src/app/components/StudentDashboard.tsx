import { MobileHeader } from './MobileHeader';
import { MobileNav } from './MobileNav';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Briefcase, TrendingUp, Users, Clock, ChevronRight, Star, Zap } from 'lucide-react';
import { motion } from 'motion/react';

export function StudentDashboard() {
  const stats = [
    { icon: Briefcase, label: 'Active Projects', value: '3', color: 'bg-blue-500' },
    { icon: TrendingUp, label: 'Completed', value: '12', color: 'bg-green-500' },
    { icon: Star, label: 'Avg Rating', value: '4.8', color: 'bg-yellow-500' },
  ];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      company: 'TechCorp Inc.',
      status: 'In Progress',
      progress: 65,
      deadline: '5 days left',
      team: 4,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      title: 'Mobile App Design',
      company: 'Design Studio',
      status: 'Review',
      progress: 90,
      deadline: '2 days left',
      team: 3,
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 3,
      title: 'Marketing Campaign',
      company: 'Brand Agency',
      status: 'Starting Soon',
      progress: 15,
      deadline: '10 days left',
      team: 5,
      color: 'from-orange-500 to-red-500',
    },
  ];

  const quickActions = [
    { icon: Zap, label: 'Browse Projects', color: 'bg-purple-500' },
    { icon: Users, label: 'My Teams', color: 'bg-blue-500' },
    { icon: Star, label: 'Achievements', color: 'bg-yellow-500' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <MobileHeader />

      <div className="p-4 space-y-6">
        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-white border-0 shadow-sm">
                  <CardContent className="p-4 text-center">
                    <div className={`w-10 h-10 ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-2`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-xs text-gray-600 mt-1">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-3">Quick Actions</h2>
          <div className="grid grid-cols-3 gap-3">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <motion.button
                  key={action.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-all active:scale-95"
                >
                  <div className={`w-12 h-12 ${action.color} rounded-xl flex items-center justify-center mx-auto mb-2`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-xs font-medium text-gray-700 text-center">
                    {action.label}
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Active Projects */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-gray-900">Active Projects</h2>
            <button className="text-sm text-blue-600 font-medium flex items-center gap-1">
              View All
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-all active:scale-[0.98] cursor-pointer overflow-hidden">
                  <div className={`h-1 bg-gradient-to-r ${project.color}`}></div>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">{project.title}</h3>
                        <p className="text-xs text-gray-600">{project.company}</p>
                      </div>
                      <Badge
                        variant="secondary"
                        className="bg-blue-50 text-blue-700 border-0"
                      >
                        {project.status}
                      </Badge>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
                          <span>Progress</span>
                          <span className="font-semibold">{project.progress}%</span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${project.color} transition-all duration-500`}
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-1 text-gray-600">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{project.deadline}</span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-600">
                          <Users className="w-3.5 h-3.5" />
                          <span>{project.team} members</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Recommended for You */}
        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-3">Recommended for You</h2>
          <Card className="bg-gradient-to-br from-indigo-500 to-purple-600 border-0 shadow-lg text-white overflow-hidden">
            <CardContent className="p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <Badge className="bg-white/20 text-white border-0 mb-2">New</Badge>
                  <h3 className="font-bold text-lg mb-1">AI Chatbot Development</h3>
                  <p className="text-sm text-white/80">Innovation Labs</p>
                </div>
                <Zap className="w-8 h-8 text-yellow-300" />
              </div>
              <p className="text-sm text-white/90 mb-4">
                Build an intelligent chatbot using cutting-edge AI technology
              </p>
              <button className="w-full bg-white text-purple-600 rounded-xl py-2.5 font-semibold hover:bg-white/90 transition-colors active:scale-95">
                View Details
              </button>
            </CardContent>
          </Card>
        </div>
      </div>

      <MobileNav />
    </div>
  );
}
