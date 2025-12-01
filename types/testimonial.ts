export type Testimonial = {
  id: number;
  name: string;
  designation: string;
  image: any; // veya string
  content: string;
  star: number; // <-- EKLENMESİ GEREKEN SATIR
};