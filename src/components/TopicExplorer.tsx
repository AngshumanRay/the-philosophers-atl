import { useState } from 'react';
import { ArrowLeft, Brain, Heart, Scales, Users, Palette, Lightbulb, Star } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { topics, philosophers, type Topic } from '@/lib/data';

interface TopicExplorerProps {
  onBack: () => void;
}

export function TopicExplorer({ onBack }: TopicExplorerProps) {
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  
  const categoryIcons = {
    ethics: Heart,
    metaphysics: Brain,
    epistemology: Lightbulb,
    political: Scales,
    aesthetics: Palette,
    logic: Users,
    spirituality: Star
  };

  const categoryColors = {
    ethics: 'bg-red-100 text-red-800',
    metaphysics: 'bg-blue-100 text-blue-800',
    epistemology: 'bg-yellow-100 text-yellow-800',
    political: 'bg-green-100 text-green-800',
    aesthetics: 'bg-purple-100 text-purple-800',
    logic: 'bg-gray-100 text-gray-800',
    spirituality: 'bg-amber-100 text-amber-800'
  };

  const groupedTopics = topics.reduce((acc, topic) => {
    if (!acc[topic.category]) acc[topic.category] = [];
    acc[topic.category].push(topic);
    return acc;
  }, {} as Record<string, Topic[]>);

  if (selectedTopic) {
    return (
      <TopicDetail 
        topic={selectedTopic} 
        onBack={() => setSelectedTopic(null)} 
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
          <h1 className="font-display text-3xl font-bold">Topic Explorer</h1>
          <p className="text-muted-foreground font-reading">
            Navigate philosophy's fundamental questions by theme
          </p>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-6">
        <TabsList className="grid grid-cols-8 w-full">
          <TabsTrigger value="all">All Topics</TabsTrigger>
          {Object.keys(groupedTopics).map((category) => (
            <TabsTrigger key={category} value={category} className="capitalize">
              {category}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          {Object.entries(groupedTopics).map(([category, categoryTopics]) => {
            const IconComponent = categoryIcons[category as keyof typeof categoryIcons];
            return (
              <div key={category}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg ${categoryColors[category as keyof typeof categoryColors]}`}>
                    <IconComponent size={20} />
                  </div>
                  <h2 className="font-display text-2xl font-semibold capitalize">{category}</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {categoryTopics.map((topic) => (
                    <TopicCard 
                      key={topic.id} 
                      topic={topic} 
                      onClick={() => setSelectedTopic(topic)} 
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </TabsContent>

        {Object.entries(groupedTopics).map(([category, categoryTopics]) => (
          <TabsContent key={category} value={category}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryTopics.map((topic) => (
                <TopicCard 
                  key={topic.id} 
                  topic={topic} 
                  onClick={() => setSelectedTopic(topic)} 
                />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

interface TopicCardProps {
  topic: Topic;
  onClick: () => void;
}

function TopicCard({ topic, onClick }: TopicCardProps) {
  const philosophersWithTopic = philosophers.filter(p => topic.id in p.topics);
  
  return (
    <Card className="cursor-pointer hover:shadow-lg transition-all duration-300 group" onClick={onClick}>
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between mb-2">
          <Badge variant="outline" className="text-xs capitalize">
            {topic.category}
          </Badge>
        </div>
        <CardTitle className="font-display text-lg group-hover:text-primary transition-colors">
          {topic.title}
        </CardTitle>
        <CardDescription className="font-reading line-clamp-2">
          {topic.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className="text-xs">
            {philosophersWithTopic.length} Perspectives
          </Badge>
          <Button variant="ghost" size="sm" className="h-auto p-0 text-primary">
            Explore →
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

interface TopicDetailProps {
  topic: Topic;
  onBack: () => void;
}

function TopicDetail({ topic, onBack }: TopicDetailProps) {
  const philosophersWithTopic = philosophers.filter(p => topic.id in p.topics);
  const [selectedPhilosopher, setSelectedPhilosopher] = useState<string | null>(null);

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft size={16} className="mr-2" />
          Back to Topics
        </Button>
        <Separator orientation="vertical" className="h-6" />
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <Badge variant="outline" className="capitalize">
              {topic.category}
            </Badge>
          </div>
          <h1 className="font-display text-3xl font-bold">{topic.title}</h1>
          <p className="text-muted-foreground font-reading mt-2">
            {topic.description}
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Philosophical Perspectives */}
        <div className="lg:col-span-2">
          {selectedPhilosopher ? (
            <Card className="border-primary/20">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                      <span className="font-display font-bold text-sm">
                        {philosophers.find(p => p.id === selectedPhilosopher)?.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <CardTitle className="font-display text-xl">
                        {philosophers.find(p => p.id === selectedPhilosopher)?.name}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {philosophers.find(p => p.id === selectedPhilosopher)?.lifespan}
                      </p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => setSelectedPhilosopher(null)}>
                    ✕
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {(() => {
                  const philosopher = philosophers.find(p => p.id === selectedPhilosopher);
                  const position = philosopher?.topics[topic.id];
                  if (!position) return null;

                  return (
                    <>
                      <div>
                        <h4 className="font-display font-semibold mb-2">Position: {position.stance}</h4>
                        <p className="font-reading text-base leading-relaxed">
                          {position.summary}
                        </p>
                      </div>
                      
                      {position.keyQuote && (
                        <div className="border-l-4 border-accent pl-4 my-4">
                          <p className="font-reading italic text-lg">
                            "{position.keyQuote}"
                          </p>
                        </div>
                      )}
                      
                      <div>
                        <h4 className="font-display font-semibold mb-2">Context</h4>
                        <p className="font-reading text-sm text-muted-foreground leading-relaxed">
                          {position.context}
                        </p>
                      </div>
                    </>
                  );
                })()}
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle className="font-display text-xl">Philosophical Perspectives</CardTitle>
                <CardDescription>
                  Select a philosopher to explore their approach to this question
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 text-muted-foreground">
                  <Brain size={48} className="mx-auto mb-4 opacity-50" />
                  <p className="font-reading">Choose a philosopher from the sidebar to see their perspective</p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Philosopher List */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="font-display text-xl">Thinkers on This Topic</CardTitle>
              <CardDescription>
                {philosophersWithTopic.length} philosophers have explored this question
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-3">
                  {philosophersWithTopic.map((philosopher) => (
                    <div
                      key={philosopher.id}
                      className={`p-3 rounded-lg border cursor-pointer transition-all ${
                        selectedPhilosopher === philosopher.id 
                          ? 'border-primary bg-primary/5' 
                          : 'border-border hover:border-primary/50 hover:bg-muted/50'
                      }`}
                      onClick={() => setSelectedPhilosopher(philosopher.id)}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                          <span className="font-display font-bold text-xs">
                            {philosopher.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-display font-medium text-sm truncate">{philosopher.name}</h4>
                          <p className="text-xs text-muted-foreground">{philosopher.lifespan}</p>
                        </div>
                      </div>
                      <div className="ml-11">
                        <p className="text-xs font-reading line-clamp-2">
                          <strong>{philosopher.topics[topic.id].stance}</strong>
                        </p>
                      </div>
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