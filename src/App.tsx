import { useState } from "react";
import { SubtitleList } from "@/components/SubtitleList";
import { Subtitle, ToastProps } from "@/types";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { VideoLinkForm } from "@/components/VideoLinkForm";
import { Toaster } from "@/components/ui/toaster";

const App = () => {
  const [videoLink, setVideoLink] = useState("");
  const [subtitles, setSubtitles] = useState<Subtitle[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const handleVideoLinkSubmit = (link: string) => {
    setVideoLink(link);
    // Here you would typically validate the link
    toast({
      title: "Video link added",
      description: "Ready to generate subtitles.",
    });
  };

  const handleGenerateSubtitles = async () => {
    setIsGenerating(true);
    try {
      // This is where you'd call your AI service to generate subtitles
      // For now, we'll just simulate it with a timeout
      await new Promise((resolve) => setTimeout(resolve, 3000));

      const mockSubtitles: Subtitle[] = [
        {
          id: 1,
          text: "Hello, this is a sample subtitle.",
          startTime: 0,
          endTime: 2,
        },
        { id: 2, text: "Generated by AI.", startTime: 2, endTime: 4 },
      ];

      setSubtitles(mockSubtitles);
      toast({
        title: "Subtitles generated",
        description: "Your subtitles are ready.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate subtitles.",
        variant: "destructive",
      } as ToastProps);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="p-4 w-96">
      <h1 className="text-2xl font-bold mb-4">YouTube Subtitle Creator</h1>
      <VideoLinkForm onSubmit={handleVideoLinkSubmit} />
      {videoLink && (
        <Button
          onClick={handleGenerateSubtitles}
          disabled={isGenerating}
          className="mt-4 w-full"
        >
          {isGenerating ? "Generating..." : "Generate Subtitles"}
        </Button>
      )}
      <SubtitleList subtitles={subtitles} />
      <Toaster />
    </div>
  );
};

export default App;
