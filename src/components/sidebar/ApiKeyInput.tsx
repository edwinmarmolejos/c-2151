import { Key } from 'lucide-react';
import { Input } from "@/components/ui/input";

interface ApiKeyInputProps {
  apiKey: string;
  onApiKeyChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ApiKeyInput = ({ apiKey, onApiKeyChange }: ApiKeyInputProps) => (
  <div className="p-2 mb-4">
    <div className="flex items-center gap-2 mb-2">
      <Key className="h-4 w-4" />
      <span className="text-sm">API Key</span>
    </div>
    <Input
      type="password"
      placeholder="Enter your API key"
      value={apiKey}
      onChange={onApiKeyChange}
      className="bg-movie-main border-movie-accent/20"
    />
  </div>
);

export default ApiKeyInput;