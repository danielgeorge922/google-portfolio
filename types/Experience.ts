export interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string[];
  images?: string[];
  logo: string;
  status?: "incoming" | "previous" | "current";
}
