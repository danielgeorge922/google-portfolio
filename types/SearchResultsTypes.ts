import type { IconType } from "react-icons";

export interface SearchResult {
  id: string;
  title: string;
  description?: string;
  url: string;
  icon: IconType;
  category: string;
}