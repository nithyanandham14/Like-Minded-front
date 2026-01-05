import { MobileHeader } from './MobileHeader';
import { MobileNav } from './MobileNav';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { 
  User, Mail, Phone, MapPin, Calendar, Award, 
  Star, TrendingUp, Edit2, Share2 
} from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';

export function ProfilePage() {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'UI/UX Design', level: 80 },
    { name: 'Project Management', level: 75 },
  ];

  const achievements = [
    { icon: Award, title: 'Top Contributor', color: 'bg-yellow-500' },
    { icon: Star, title: '5-Star Rating', color: 'bg-purple-500' },
    { icon: TrendingUp, title: 'Fast Learner', color: 'bg-blue-500' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <MobileHeader title="Profile" />

      <div className="p-4 space-y-4">
        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card className="bg-white border-0 shadow-sm overflow-hidden">
            <div className="h-24 bg-gradient-to-r from-blue-500 to-purple-600"></div>
            <CardContent className="p-4 -mt-12">
              <div className="flex items-end gap-4 mb-4">
                <Avatar className="w-24 h-24 border-4 border-white shadow-lg">
                  <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200" />
                  <AvatarFallback className="bg-gradient-to-br from-blue-400 to-purple-500 text-white text-2xl">
                    JD
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-gray-900">John Doe</h2>
                  <p className="text-sm text-gray-600">Computer Science Student</p>
                </div>
                <Button size="sm" variant="outline" className="rounded-full">
                  <Edit2 className="w-4 h-4" />
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 py-4 border-t">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">15</div>
                  <div className="text-xs text-gray-600">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">4.8</div>
                  <div className="text-xs text-gray-600">Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">8</div>
                  <div className="text-xs text-gray-600">Awards</div>
                </div>
              </div>

              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
                <Share2 className="w-4 h-4 mr-2" />
                Share Profile
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* About */}
        <Card className="bg-white border-0 shadow-sm">
          <CardContent className="p-4 space-y-3">
            <h3 className="font-semibold text-gray-900 mb-3">About</h3>
            <div className="flex items-center gap-3 text-sm">
              <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                <Mail className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <p className="text-gray-600 text-xs">Email</p>
                <p className="text-gray-900 font-medium">john.doe@university.edu</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center">
                <Phone className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <p className="text-gray-600 text-xs">Phone</p>
                <p className="text-gray-900 font-medium">+1 234 567 8900</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="w-8 h-8 bg-purple-50 rounded-lg flex items-center justify-center">
                <MapPin className="w-4 h-4 text-purple-600" />
              </div>
              <div>
                <p className="text-gray-600 text-xs">Location</p>
                <p className="text-gray-900 font-medium">San Francisco, CA</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="w-8 h-8 bg-orange-50 rounded-lg flex items-center justify-center">
                <Calendar className="w-4 h-4 text-orange-600" />
              </div>
              <div>
                <p className="text-gray-600 text-xs">Member Since</p>
                <p className="text-gray-900 font-medium">January 2024</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Skills */}
        <Card className="bg-white border-0 shadow-sm">
          <CardContent className="p-4">
            <h3 className="font-semibold text-gray-900 mb-4">Skills</h3>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-gray-700 font-medium">{skill.name}</span>
                    <span className="text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Achievements */}
        <Card className="bg-white border-0 shadow-sm">
          <CardContent className="p-4">
            <h3 className="font-semibold text-gray-900 mb-4">Achievements</h3>
            <div className="grid grid-cols-3 gap-3">
              {achievements.map((achievement) => {
                const Icon = achievement.icon;
                return (
                  <div
                    key={achievement.title}
                    className="flex flex-col items-center text-center"
                  >
                    <div className={`w-14 h-14 ${achievement.color} rounded-2xl flex items-center justify-center mb-2 shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <p className="text-xs font-medium text-gray-700">{achievement.title}</p>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      <MobileNav />
    </div>
  );
}
