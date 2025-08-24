import { useState } from 'react';
import { Book, Scale, Users } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PhilosopherDirectory } from './components/PhilosopherDirectory';
import { TopicExplorer } from './components/TopicExplorer';
import { ComparisonTool } from './components/ComparisonTool';
import { philosophers, topics } from '@/lib/data';

type View = 'home' | 'philosophers' | 'topics' | 'compare';

function App() {
  const [currentView, setCurrentView] = useState<View>('home');

  const renderView = () => {
    switch (currentView) {
      case 'philosophers':
        return <PhilosopherDirectory onBack={() => setCurrentView('home')} />;
      case 'topics':
        return <TopicExplorer onBack={() => setCurrentView('home')} />;
      case 'compare':
        return <ComparisonTool onBack={() => setCurrentView('home')} />;
      default:
        return <HomeView onNavigate={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {renderView()}
    </div>
  );
}

interface HomeViewProps {
  onNavigate: (view: View) => void;
}

function HomeView({ onNavigate }: HomeViewProps) {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="font-display text-5xl font-bold text-foreground mb-4">
          The Philosopher's Atlas
        </h1>
        <p className="text-xl text-muted-foreground font-reading max-w-2xl mx-auto leading-relaxed">
          Explore the vast landscape of philosophical thought through an interactive journey 
          across ideas, thinkers, and timeless questions that have shaped human understanding.
        </p>
      </div>

      {/* Main Navigation Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <Card className="cursor-pointer hover:shadow-lg transition-shadow duration-300 group"
              onClick={() => onNavigate('philosophers')}>
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Users size={24} className="text-primary" />
              </div>
              <CardTitle className="font-display text-xl">Explore Philosophers</CardTitle>
            </div>
            <CardDescription className="font-reading">
              Discover the lives, ideas, and contributions of history's greatest thinkers
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">{philosophers.length} Philosophers</Badge>
              <Badge variant="outline">Ancient to Modern</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-lg transition-shadow duration-300 group"
              onClick={() => onNavigate('topics')}>
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                <Book size={24} className="text-accent" />
              </div>
              <CardTitle className="font-display text-xl">Browse by Topic</CardTitle>
            </div>
            <CardDescription className="font-reading">
              Explore fundamental questions organized by philosophical themes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">{topics.length} Topics</Badge>
              <Badge variant="outline">Essential Questions</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-lg transition-shadow duration-300 group md:col-span-2 lg:col-span-1"
              onClick={() => onNavigate('compare')}>
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-secondary/20 rounded-lg group-hover:bg-secondary/30 transition-colors">
                <Scale size={24} className="text-primary" />
              </div>
              <CardTitle className="font-display text-xl">Compare Views</CardTitle>
            </div>
            <CardDescription className="font-reading">
              See how different philosophers approach the same fundamental questions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Badge variant="secondary">Side-by-side Analysis</Badge>
          </CardContent>
        </Card>
      </div>


    </div>
  );
}

export default App;