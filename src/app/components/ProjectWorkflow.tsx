import { useNavigate, useParams } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Textarea } from './ui/textarea';
import { CheckCircle2, Circle } from 'lucide-react';

export function ProjectWorkflow() {
  const navigate = useNavigate();
  const { id } = useParams();

  const milestones = [
    { id: 1, name: 'Milestone 1', status: 'active', color: 'bg-blue-600' },
    { id: 2, name: 'Milestone 2', status: 'pending', color: 'bg-gray-300' },
    { id: 3, name: 'Review', status: 'pending', color: 'bg-gray-300' },
    { id: 4, name: 'Payment', status: 'pending', color: 'bg-gray-300' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl sm:text-2xl font-bold text-blue-600">LIKEMINDED</h1>
            <Button variant="ghost" onClick={() => navigate(-1)} size="sm">
              Back
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8 max-w-6xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Project Workflow</h2>

        {/* Workflow Timeline */}
        <Card className="mb-6 sm:mb-8">
          <CardHeader>
            <CardTitle>Project Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              {/* Progress Bar */}
              <div className="flex items-center justify-between mb-8 overflow-x-auto pb-4">
                {milestones.map((milestone, index) => (
                  <div key={milestone.id} className="flex items-center flex-1 min-w-[80px]">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center ${milestone.color} text-white font-semibold`}
                      >
                        {milestone.status === 'active' ? (
                          <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />
                        ) : (
                          <Circle className="w-5 h-5 sm:w-6 sm:h-6" />
                        )}
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-gray-700 mt-2 text-center">
                        {milestone.name}
                      </span>
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="flex-1 h-1 bg-gray-300 mx-2 sm:mx-4 min-w-[20px]"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Current Milestone Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Task Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Submit Work</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle2 className="w-5 h-5" />
                <span className="font-medium">Submit</span>
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Submit Work
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Feedback</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                placeholder="Provide feedback..."
                className="min-h-24"
              />
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Circle className="w-4 h-4" />
                  <span className="text-sm">Approval Status</span>
                </div>
                <Button variant="outline" className="w-full">
                  Approve
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Payment</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Circle className="w-4 h-4" />
                  <span className="text-sm">Payment Status</span>
                </div>
              </div>
              <Button
                className="w-full bg-green-600 hover:bg-green-700"
                onClick={() => navigate(`/ratings/${id}`)}
              >
                Process Payment
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}