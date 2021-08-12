/** @format */

export interface Featured {
  name: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
}

export interface Category {
  name: string;
  featured: Featured[];
}

export interface CategoryProps {
  category: Category;
}

export interface Navigation {
  categories: Category[];
}
