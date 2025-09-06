export type SearchResult = {
  id: string;
  title: string;
  description: string;
  url: string;
  icon?: string; 
  category?: 'page' | 'project' | 'experience' | 'contact';
};