import { Subtitle } from "@/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface SubtitleListProps {
  subtitles: Subtitle[];
}

export const SubtitleList = ({ subtitles }: SubtitleListProps) => {
  if (subtitles.length === 0) {
    return null;
  }

  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold mb-2">Generated Subtitles</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Text</TableHead>
            <TableHead>Start Time</TableHead>
            <TableHead>End Time</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {subtitles.map((subtitle) => (
            <TableRow key={subtitle.id}>
              <TableCell>{subtitle.text}</TableCell>
              <TableCell>{subtitle.startTime.toFixed(2)}s</TableCell>
              <TableCell>{subtitle.endTime.toFixed(2)}s</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
