import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { Plus, FileText } from 'lucide-react';

export function SmeDashboard() {
  const navigate = useNavigate();

  const challenges = [
    { id: 1, title: 'Problem Title [ ]', status: 'open', progress: 0 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl sm:text-2xl font-bold text-blue-600">LIKEMINDED</h1>
            <Button variant="ghost" onClick={() => navigate('/')} size="sm">
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8 max-w-6xl">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">SME Dashboard</h2>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
            <Button className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
              <Plus className="w-4 h-4 mr-2" />
              Create Problem Statement
            </Button>
            <Button variant="outline" className="w-full sm:w-auto">
              <FileText className="w-4 h-4 mr-2" />
              Manage Challenges
            </Button>
          </div>

          {/* My Challenges */}
          <Card>
            <CardHeader>
              <CardTitle>My Challenges</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {challenges.map((challenge) => (
                <div
                  key={challenge.id}
                  className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 cursor-pointer transition-colors"
                  onClick={() => navigate(`/project/${challenge.id}`)}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-gray-900">{challenge.title}</h3>
                    <Badge variant="outline">{challenge.status}</Badge>
                  </div>
                  <Progress value={challenge.progress} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Progress Overview */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Progress Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">5</div>
                  <div className="text-sm text-gray-600">Open Challenges</div>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-600">3</div>
                  <div className="text-sm text-gray-600">In Progress</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">12</div>
                  <div className="text-sm text-gray-600">Completed</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}