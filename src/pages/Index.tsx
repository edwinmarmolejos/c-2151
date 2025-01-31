import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import Sidebar from '@/components/Sidebar';
import ChatHeader from '@/components/ChatHeader';
import ChatInput from '@/components/ChatInput';
import ActionButtons from '@/components/ActionButtons';
import MessageList from '@/components/MessageList';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

const Index = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) {
      toast({
        title: "Error",
        description: "Please enter a message",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    try {
      const newMessages = [
        ...messages,
        { role: 'user', content } as const
      ];
      
      setMessages(newMessages);

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      const assistantMessage: Message = {
        role: 'assistant',
        content: "Based on your preferences, I recommend watching 'Inception' (2010). It's a mind-bending sci-fi thriller directed by Christopher Nolan, featuring stunning visuals and a complex plot about dreams within dreams. The film stars Leonardo DiCaprio and has won multiple Academy Awards. Would you like to know more about this movie or would you prefer a different recommendation?"
      };

      setMessages([...newMessages, assistantMessage]);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* Netflix-style background */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/af7ecb95-b92d-4ce3-950f-a1d5d4fdefd9.png')`,
          filter: 'brightness(0.3)',
          zIndex: -1
        }}
      />
      
      <div className="relative z-10 flex min-h-screen">
        <Sidebar 
          isOpen={isSidebarOpen} 
          onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
          onApiKeyChange={() => {}}
        />
        
        <main className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
          <ChatHeader isSidebarOpen={isSidebarOpen} />
          
          <div className={`flex h-full flex-col ${messages.length === 0 ? 'items-center justify-center' : 'justify-between'} pt-[60px] pb-4`}>
            {messages.length === 0 ? (
              <div className="w-full max-w-3xl px-4 space-y-8">
                <div className="text-center space-y-6">
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-movie-accent to-movie-secondary bg-clip-text text-transparent">
                    Movie Recommendations
                  </h1>
                  <p className="text-movie-muted text-lg">
                    Ask me about movies! I can help you find your next favorite film based on your preferences.
                  </p>
                  <div className="max-w-xl mx-auto">
                    <ChatInput onSend={handleSendMessage} isLoading={isLoading} />
                  </div>
                </div>
                <ActionButtons />
              </div>
            ) : (
              <>
                <MessageList messages={messages} />
                <div className="w-full max-w-3xl mx-auto px-4 py-2">
                  <ChatInput onSend={handleSendMessage} isLoading={isLoading} />
                </div>
                <div className="text-xs text-center text-movie-muted py-2">
                  Movie recommendations are powered by AI. Ratings and reviews may vary.
                </div>
              </>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;