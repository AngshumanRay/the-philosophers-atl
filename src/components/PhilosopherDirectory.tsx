import { useState } from 'react';
import { ArrowLeft, Book, Calendar, MapPin } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { philosophers, topics, type Philosopher } from '@/lib/data';

interface PhilosopherDirectoryProps {
  onBack: () => void;
}

export function PhilosopherDirectory({ onBack }: PhilosopherDirectoryProps) {
  const [selectedPhilosopher, setSelectedPhilosopher] = useState<Philosopher | null>(null);
  
  if (selectedPhilosopher) {
    return (
      <PhilosopherDetail 
        philosopher={selectedPhilosopher} 
        onBack={() => setSelectedPhilosopher(null)} 
      />
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft size={16} className="mr-2" />
          Back to Atlas
        </Button>
        <Separator orientation="vertical" className="h-6" />
        <div>
          <h1 className="font-display text-3xl font-bold">Philosopher Directory</h1>
          <p className="text-muted-foreground font-reading">
            Discover the thinkers who shaped human understanding
          </p>
        </div>
      </div>

      {/* Philosophers Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {philosophers.map((philosopher) => (
          <Card 
            key={philosopher.id} 
            className="cursor-pointer hover:shadow-lg transition-all duration-300 group"
            onClick={() => setSelectedPhilosopher(philosopher)}
          >
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mb-3">
                  <span className="font-display font-bold text-lg">
                    {philosopher.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <Badge variant="outline" className="text-xs">
                  {philosopher.school.split(' ')[0]}
                </Badge>
              </div>
              <CardTitle className="font-display text-xl group-hover:text-primary transition-colors">
                {philosopher.name}
              </CardTitle>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  {philosopher.lifespan}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={14} />
                  {philosopher.nationality}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="font-reading mb-4 line-clamp-3">
                {philosopher.biography}
              </CardDescription>
              <div className="flex items-center justify-between">
                <Badge variant="secondary" className="text-xs">
                  {Object.keys(philosopher.topics).length} Topics
                </Badge>
                <Button variant="ghost" size="sm" className="h-auto p-0 text-primary">
                  Learn More →
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

interface PhilosopherDetailProps {
  philosopher: Philosopher;
  onBack: () => void;
}

function PhilosopherDetail({ philosopher, onBack }: PhilosopherDetailProps) {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  
  const philosopherTopics = Object.entries(philosopher.topics).map(([topicId, position]) => ({
    ...topics.find(t => t.id === topicId)!,
    position
  }));

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft size={16} className="mr-2" />
          Back to Directory
        </Button>
        <Separator orientation="vertical" className="h-6" />
        <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
          <span className="font-display font-bold">
            {philosopher.name.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <div>
          <h1 className="font-display text-3xl font-bold">{philosopher.name}</h1>
          <p className="text-muted-foreground">
            {philosopher.lifespan} • {philosopher.nationality} • {philosopher.school}
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Biography & Key Works */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="font-display text-xl">Biography</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-reading text-base leading-relaxed">{philosopher.biography}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-display text-xl">Key Works</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2">
                {philosopher.keyWorks.map((work, index) => (
                  <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50">
                    <Book size={16} className="text-primary" />
                    <span className="font-reading">{work}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Topic Detail */}
          {selectedTopic && (
            <Card className="border-primary/20">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="font-display text-xl">
                    {philosopherTopics.find(t => t.id === selectedTopic)?.title}
                  </CardTitle>
                  <Badge variant={
                    philosopher.topics[selectedTopic].difficulty === 'beginner' ? 'secondary' :
                    philosopher.topics[selectedTopic].difficulty === 'intermediate' ? 'default' : 'destructive'
                  }>
                    {philosopher.topics[selectedTopic].difficulty}
                  </Badge>
                </div>
                <CardDescription className="font-reading">
                  {philosopherTopics.find(t => t.id === selectedTopic)?.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-display font-semibold mb-2">Position: {philosopher.topics[selectedTopic].stance}</h4>
                  <p className="font-reading text-base leading-relaxed">
                    {philosopher.topics[selectedTopic].summary}
                  </p>
                </div>
                
                {philosopher.topics[selectedTopic].keyQuote && (
                  <div className="border-l-4 border-accent pl-4 my-4">
                    <p className="font-reading italic text-lg">
                      "{philosopher.topics[selectedTopic].keyQuote}"
                    </p>
                  </div>
                )}
                
                <div>
                  <h4 className="font-display font-semibold mb-2">Context</h4>
                  <p className="font-reading text-sm text-muted-foreground leading-relaxed">
                    {philosopher.topics[selectedTopic].context}
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Philosophical Topics */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="font-display text-xl">Philosophical Topics</CardTitle>
              <CardDescription>
                Explore {philosopher.name}'s positions on key questions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-3">
                  {philosopherTopics.map((topic) => (
                    <div
                      key={topic.id}
                      className={`p-3 rounded-lg border cursor-pointer transition-all ${
                        selectedTopic === topic.id 
                          ? 'border-primary bg-primary/5' 
                          : 'border-border hover:border-primary/50 hover:bg-muted/50'
                      }`}
                      onClick={() => setSelectedTopic(selectedTopic === topic.id ? null : topic.id)}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-display font-medium text-sm">{topic.title}</h4>
                        <Badge variant="outline" className="text-xs">
                          {topic.category}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">
                        <strong>{topic.position.stance}</strong>
                      </p>
                      <p className="text-xs font-reading line-clamp-2">
                        {topic.position.summary}
                      </p>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}