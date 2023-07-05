export interface TestimonialCardProps {
  name: string;
  start: string;
  end: string;
  content: string;
  pictures: Image[];
  index: number;
}

export interface Image {
  title: string;
  image: string;
}
