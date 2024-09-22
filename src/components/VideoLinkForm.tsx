import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface VideoLinkFormProps {
  onSubmit: (link: string) => void;
}

export const VideoLinkForm = ({ onSubmit }: VideoLinkFormProps) => {
  const [link, setLink] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (link) {
      onSubmit(link);
      setLink("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 space-y-2">
      <Input
        type="text"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        placeholder="Enter YouTube video link"
      />
      <Button type="submit" className="w-full">
        Add Video Link
      </Button>
    </form>
  );
};
