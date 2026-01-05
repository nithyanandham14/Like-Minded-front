import { MobileHeader } from './MobileHeader';
import { MobileNav } from './MobileNav';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { 
  CheckCircle2, AlertCircle, MessageSquare, 
  TrendingUp, Award, Bell 
} from 'lucide-react';
import { motion } from 'motion/react';

export function NotificationsPage() {
  const notifications = [
    {
      id: 1,
      type: 'success',
      icon: CheckCircle2,
      title: 'Project Approved!',
      message: 'Your submission for E-Commerce Platform has been approved',
      time: '5 min ago',
      unread: true,
      color: 'bg-green-500',
    },
    {
      id: 2,
      type: 'message',
      icon: MessageSquare,
      title: 'New Message',
      message: 'Sarah from TechCorp sent you a message',
      time: '1 hour ago',
      unread: true,
      color: 'bg-blue-500',
    },
    {
      id: 3,
      type: 'achievement',
      icon: Award,
      title: 'New Achievement Unlocked!',
      message: 'You earned the "Fast Learner" badge',
      time: '3 hours ago',
      unread: true,
      color: 'bg-yellow-500',
    },
    {
      id: 4,
      type: 'update',
      icon: TrendingUp,
      title: 'Project Update',
      message: 'Mobile App Design project is now in review phase',
      time: '5 hours ago',
      unread: false,
      color: 'bg-purple-500',
    },
    {
      id: 5,
      type: 'alert',
      icon: AlertCircle,
      title: 'Deadline Reminder',
      message: 'Marketing Campaign project due in 2 days',
      time: '1 day ago',
      unread: false,
      color: 'bg-orange-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <MobileHeader title="Notifications" />

      <div className="p-4 space-y-4">
        {/* Header Actions */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-gray-900">Recent Activity</h2>
            <p className="text-sm text-gray-600">You have 3 unread notifications</p>
          </div>
          <button className="text-sm text-blue-600 font-medium">
            Mark all read
          </button>
        </div>

        {/* Notifications List */}
        <div className="space-y-3">
          {notifications.map((notification, index) => {
            const Icon = notification.icon;
            return (
              <motion.div
                key={notification.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  className={`bg-white border-0 shadow-sm hover:shadow-md transition-all cursor-pointer ${
                    notification.unread ? 'ring-2 ring-blue-100' : ''
                  }`}
                >
                  <CardContent className="p-4">
                    <div className="flex gap-3">
                      <div className={`w-12 h-12 ${notification.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-1">
                          <h3 className="font-semibold text-gray-900 text-sm">
                            {notification.title}
                          </h3>
                          {notification.unread && (
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-1 flex-shrink-0"></div>
                          )}
                        </div>

                        <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                          {notification.message}
                        </p>

                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">
                            {notification.time}
                          </span>
                          {notification.unread && (
                            <Badge className="bg-blue-50 text-blue-700 border-0 text-xs">
                              New
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Empty State (hidden when there are notifications) */}
        {notifications.length === 0 && (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Bell className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No notifications yet
            </h3>
            <p className="text-sm text-gray-600">
              We'll notify you when something happens
            </p>
          </div>
        )}
      </div>

      <MobileNav />
    </div>
  );
}
