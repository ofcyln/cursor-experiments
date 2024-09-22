export interface Subtitle {
  id: number;
  text: string;
  startTime: number;
  endTime: number;
}

export interface ToastProps {
  title: string;
  description: string;
  variant?: "default" | "destructive" | "success";
}
