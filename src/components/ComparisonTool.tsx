import { useState } from 'react';
import { ArrowLeft, ArrowsLeftRight } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ScrollArea } from '@/components/ui/scroll-area';
import { philosophers, topics, type Philosopher, type Topic } from '@/lib/data';

interface ComparisonToolProps {
  onBack: () => void;
}

export function ComparisonTool({ onBack }: ComparisonToolProps) {
  const [philosopherA, setPhilosopherA] = useState<string>('');
  const [philosopherB, setPhilosopherB] = useState<string>('');
  const [selectedTopic, setSelectedTopic] = useState<string>('');

  const philosopherAData = philosophers.find(p => p.id === philosopherA);
  const philosopherBData = philosophers.find(p => p.id === philosopherB);
  const topicData = topics.find(t => t.id === selectedTopic);

  // Get topics that both philosophers have positions on
  const commonTopics = philosopherA && philosopherB ? 
    topics.filter(topic => 
      philosopherAData?.topics[topic.id] && philosopherBData?.topics[topic.id]
    ) : [];

  const resetComparison = () => {
    setPhilosopherA('');
    setPhilosopherB('');
    setSelectedTopic('');
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft size={16} className="mr-2" />
          Back to Atlas
        </Button>
        <Separator orientation="vertical" className="h-6" />
        <div className="flex-1">
          <h1 className="font-display text-3xl font-bold">Philosophy Comparison Tool</h1>
          <p className="text-muted-foreground font-reading">
            Compare how different philosophers approach the same fundamental questions
          </p>
        </div>
        {(philosopherA || philosopherB || selectedTopic) && (
          <Button variant="outline" size="sm" onClick={resetComparison}>
            Reset
          </Button>
        )}
      </div>

      {/* Selection Controls */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="font-display text-lg">First Philosopher</CardTitle>
          </CardHeader>
          <CardContent>
            <Select value={philosopherA} onValueChange={setPhilosopherA}>
              <SelectTrigger>
                <SelectValue placeholder="Select a philosopher..." />
              </SelectTrigger>
              <SelectContent>
                {philosophers.map((philosopher) => (
                  <SelectItem key={philosopher.id} value={philosopher.id} disabled={philosopher.id === philosopherB}>
                    <div>
                      <div className="font-medium">{philosopher.name}</div>
                      <div className="text-sm text-muted-foreground">{philosopher.lifespan}</div>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="font-display text-lg flex items-center justify-center">
              <ArrowsLeftRight size={20} className="text-primary" />
            </CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <div className="text-center">
              <p className="text-sm text-muted-foreground font-reading">
                {commonTopics.length > 0 ? `${commonTopics.length} topics to compare` : 'Select philosophers first'}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="font-display text-lg">Second Philosopher</CardTitle>
          </CardHeader>
          <CardContent>
            <Select value={philosopherB} onValueChange={setPhilosopherB}>
              <SelectTrigger>
                <SelectValue placeholder="Select a philosopher..." />
              </SelectTrigger>
              <SelectContent>
                {philosophers.map((philosopher) => (
                  <SelectItem key={philosopher.id} value={philosopher.id} disabled={philosopher.id === philosopherA}>
                    <div>
                      <div className="font-medium">{philosopher.name}</div>
                      <div className="text-sm text-muted-foreground">{philosopher.lifespan}</div>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>
      </div>

      {/* Topic Selection */}
      {commonTopics.length > 0 && (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="font-display text-xl">Choose a Topic to Compare</CardTitle>
            <CardDescription>
              These topics have perspectives from both selected philosophers
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {commonTopics.map((topic) => (
                <Button
                  key={topic.id}
                  variant={selectedTopic === topic.id ? "default" : "outline"}
                  className="h-auto p-4 justify-start"
                  onClick={() => setSelectedTopic(topic.id)}
                >
                  <div className="text-left">
                    <div className="font-display font-medium">{topic.title}</div>
                    <div className="text-xs text-muted-foreground mt-1 capitalize">{topic.category}</div>
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Comparison Display */}
      {philosopherAData && philosopherBData && topicData && selectedTopic && (
        <div className="space-y-6">
          {/* Topic Header */}
          <Card className="border-primary/20">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Badge variant="outline" className="capitalize">{topicData.category}</Badge>
                <Badge variant={
                  topicData.difficulty === 'beginner' ? 'secondary' : 
                  topicData.difficulty === 'intermediate' ? 'default' : 'destructive'
                }>
                  {topicData.difficulty}
                </Badge>
              </div>
              <CardTitle className="font-display text-2xl">{topicData.title}</CardTitle>
              <CardDescription className="font-reading text-base">
                {topicData.description}
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Side-by-side Comparison */}
          <div className="grid lg:grid-cols-2 gap-6">
            <PhilosopherPerspective 
              philosopher={philosopherAData} 
              topic={topicData} 
              position={philosopherAData.topics[selectedTopic]} 
            />
            <PhilosopherPerspective 
              philosopher={philosopherBData} 
              topic={topicData} 
              position={philosopherBData.topics[selectedTopic]} 
            />
          </div>

          {/* Comparison Summary */}
          <Card className="bg-muted/20">
            <CardHeader>
              <CardTitle className="font-display text-xl">Key Differences</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-display font-semibold mb-2">{philosopherAData.name}'s Approach</h4>
                  <Badge variant="secondary" className="mb-2">
                    {philosopherAData.topics[selectedTopic].stance}
                  </Badge>
                  <p className="font-reading text-sm text-muted-foreground">
                    {philosopherAData.topics[selectedTopic].context}
                  </p>
                </div>
                <div>
                  <h4 className="font-display font-semibold mb-2">{philosopherBData.name}'s Approach</h4>
                  <Badge variant="secondary" className="mb-2">
                    {philosopherBData.topics[selectedTopic].stance}
                  </Badge>
                  <p className="font-reading text-sm text-muted-foreground">
                    {philosopherBData.topics[selectedTopic].context}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Empty State */}
      {!philosopherA && !philosopherB && (
        <Card className="border-dashed">
          <CardContent className="pt-6">
            <div className="text-center py-12">
              <ArrowsLeftRight size={48} className="mx-auto mb-4 text-muted-foreground/50" />
              <h3 className="font-display text-xl font-semibold mb-2">Start Your Comparison</h3>
              <p className="text-muted-foreground font-reading max-w-md mx-auto">
                Select two philosophers above to see how they approach the same fundamental questions. 
                You'll be able to compare their positions side-by-side.
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Partial Selection State */}
      {(philosopherA || philosopherB) && commonTopics.length === 0 && (
        <Card className="border-dashed">
          <CardContent className="pt-6">
            <div className="text-center py-8">
              <ArrowsLeftRight size={48} className="mx-auto mb-4 text-muted-foreground/50" />
              <h3 className="font-display text-xl font-semibold mb-2">
                {!philosopherB ? 'Select Second Philosopher' : 'Select First Philosopher'}
              </h3>
              <p className="text-muted-foreground font-reading">
                Choose another philosopher to see their shared topics for comparison.
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

interface PhilosopherPerspectiveProps {
  philosopher: Philosopher;
  topic: Topic;
  position: any;
}

function PhilosopherPerspective({ philosopher, topic, position }: PhilosopherPerspectiveProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
            <span className="font-display font-bold">
              {philosopher.name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          <div>
            <CardTitle className="font-display text-xl">{philosopher.name}</CardTitle>
            <p className="text-sm text-muted-foreground">{philosopher.lifespan}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline">{philosopher.school}</Badge>
          <Badge variant={
            position.difficulty === 'beginner' ? 'secondary' : 
            position.difficulty === 'intermediate' ? 'default' : 'destructive'
          } className="text-xs">
            {position.difficulty}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-display font-semibold mb-2">Position: {position.stance}</h4>
          <ScrollArea className="h-32">
            <p className="font-reading text-sm leading-relaxed pr-4">
              {position.summary}
            </p>
          </ScrollArea>
        </div>
        
        {position.keyQuote && (
          <div className="border-l-4 border-accent pl-4">
            <p className="font-reading italic text-sm">
              "{position.keyQuote}"
            </p>
          </div>
        )}
        
        <div>
          <h4 className="font-display font-semibold mb-2 text-sm">Historical Context</h4>
          <ScrollArea className="h-20">
            <p className="font-reading text-xs text-muted-foreground leading-relaxed pr-4">
              {position.context}
            </p>
          </ScrollArea>
        </div>
      </CardContent>
    </Card>
  );
}