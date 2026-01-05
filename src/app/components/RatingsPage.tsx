import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Textarea } from './ui/textarea';
import { Star } from 'lucide-react';

export function RatingsPage() {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [suggestions, setSuggestions] = useState('');

  const handleSubmit = () => {
    // Mock submit - in real app would save to backend
    alert('Feedback submitted successfully!');
    navigate('/student-dashboard');
  };

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

      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8 max-w-4xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Ratings & Feedback</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Rate Your Experience</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-1 sm:gap-2 justify-center py-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      onClick={() => setRating(star)}
                      className="transition-transform hover:scale-110 touch-manipulation"
                    >
                      <Star
                        className={`w-8 h-8 sm:w-10 sm:h-10 ${
                          star <= (hoverRating || rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    </button>
                  ))}
                </div>
                <p className="text-center text-sm text-gray-600">
                  {rating ? `You rated ${rating} out of 5 stars` : 'Click to rate'}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Leave Feedback</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Comments</label>
                  <Textarea
                    placeholder="Share your experience..."
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    className="min-h-24"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Suggestions</label>
                  <Textarea
                    placeholder="How can we improve?"
                    value={suggestions}
                    onChange={(e) => setSuggestions(e.target.value)}
                    className="min-h-24"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Rate Your Experience</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-1 sm:gap-2 justify-center py-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-8 h-8 sm:w-10 sm:h-10 text-gray-300"
                    />
                  ))}
                </div>
                <p className="text-center text-sm text-gray-600">
                  Click to rate
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Leave Feedback</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Comments</label>
                  <Textarea
                    placeholder="Share your experience..."
                    className="min-h-24"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Suggestions</label>
                  <Textarea
                    placeholder="How can we improve?"
                    className="min-h-24"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 flex justify-center">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 px-8 sm:px-12 w-full sm:w-auto"
            onClick={handleSubmit}
          >
            Submit Feedback
          </Button>
        </div>
      </div>
    </div>
  );
}