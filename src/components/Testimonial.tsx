import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

interface Testimonial {
  text: string;
  author: string;
  avatarUrl?: string;
}

interface TestimonialProps {
  testimonial: Testimonial;
}

const Testimonial: React.FC<TestimonialProps> = ({ testimonial }) => (
  <Card>
    <CardContent className="p-6 flex flex-col items-center">
      <Avatar className="w-20 h-20 mb-4">
        <AvatarImage src={testimonial.avatarUrl} alt={testimonial.author} />
        <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
      </Avatar>
      <p className="text-lg text-center mb-4">"{testimonial.text}"</p>
      <p className="font-semibold">- {testimonial.author}</p>
    </CardContent>
  </Card>
);

export default Testimonial;
