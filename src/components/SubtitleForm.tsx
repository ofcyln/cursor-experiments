import { useState } from "react";
import { Subtitle } from "@/types";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SubtitleFormProps {
  onSubmit: (subtitle: Omit<Subtitle, "id">) => void;
  currentTime: number;
}

export const SubtitleForm = ({ onSubmit, currentTime }: SubtitleFormProps) => {
  const [text, setText] = useState("");
  const [duration, setDuration] = useState(5);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text) {
      onSubmit({
        text,
        startTime: currentTime,
        endTime: currentTime + duration,
      });
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 space-y-2">
      <Input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter subtitle text"
      />
      <div className="flex items-center space-x-2">
        <Input
          type="number"
          value={duration}
          onChange={(e) => setDuration(Number(e.target.value))}
          placeholder="Duration (seconds)"
          min={1}
          max={60}
        />
        <Button type="submit">Add Subtitle</Button>
      </div>
    </form>
  );
};
