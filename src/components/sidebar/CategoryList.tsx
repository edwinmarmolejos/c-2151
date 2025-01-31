import { ReactNode } from 'react';

interface CategoryListProps {
  title: string;
  items: string[];
}

const CategoryList = ({ title, items }: CategoryListProps) => (
  <div className="mb-6">
    <div className="px-3 py-2 text-xs text-movie-muted font-medium">{title}</div>
    {items.map((item) => (
      <div 
        key={item} 
        className="group flex items-center gap-2.5 rounded-lg px-4 py-2 text-sm hover:bg-movie-main/50 cursor-pointer transition-colors duration-200 text-movie-text/80 hover:text-movie-text"
      >
        <span>{item}</span>
      </div>
    ))}
  </div>
);

export default CategoryList;