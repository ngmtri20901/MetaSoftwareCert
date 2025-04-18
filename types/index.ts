export interface MenuItem {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
    subcategory: string;
  }
  
  export interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    content: string;
    image: string;
    author: string;
    date: string;
  }