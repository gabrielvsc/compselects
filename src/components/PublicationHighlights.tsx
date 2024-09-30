import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import BookCard from "./BookCard";

interface Publication {
  id: number;
  title: string;
  author: string;
  cover: string;
}

interface PublicationHighlightsProps {
  publications: Publication[];
}

const PublicationHighlights: React.FC<PublicationHighlightsProps> = ({ publications }) => {
  const books = [
    { id: 1, title: "Clean Code", author: "Robert C. Martin", cover: "https://m.media-amazon.com/images/I/51E2055ZGUL._AC_UF1000,1000_QL80_.jpg" },
    { id: 2, title: "Grokking Algorithms", author: "Aditya Y. Bhargava", cover: "https://m.media-amazon.com/images/I/81HwgKQ39lS._AC_UF1000,1000_QL80_.jpg" },
    { id: 3, title: "Refactoring", author: "Martin Fowler", cover: "https://m.media-amazon.com/images/I/71e6ndHEwqL._AC_UF1000,1000_QL80_.jpg" },
    { id: 4, title: "Design Patterns", author: "Erich Gamma et al.", cover: "https://m.media-amazon.com/images/I/51nL96Abi1L._UF894,1000_QL80_.jpg" },
    { id: 5, title: "Introduction to Algorithms", author: "Thomas H. Cormen", cover: "https://m.media-amazon.com/images/I/61Pgdn8Ys-L._AC_UF1000,1000_QL80_.jpg" },
    { id: 6, title: "The Pragmatic Programmer", author: "Andrew Hunt, David Thomas", cover: "https://m.media-amazon.com/images/I/71f1jieYHNL._AC_UF1000,1000_QL80_.jpg" },
    { id: 7, title: "Code Complete", author: "Steve McConnell", cover: "https://m.media-amazon.com/images/I/61GzazUmKyL._AC_UF1000,1000_QL80_.jpg" },
    { id: 8, title: "Structure and Interpretation", author: "Harold Abelson", cover: "https://m.media-amazon.com/images/I/71BBXQnykuL._AC_UF1000,1000_QL80_.jpg" },
    { id: 9, title: "Algorithms Unlocked", author: "Thomas Cormen", cover: "https://m.media-amazon.com/images/I/71ZtvVQbjqL._AC_UF1000,1000_QL80_.jpg" },
    { id: 10, title: "Head First Design Patterns", author: "Eric Freeman", cover: "https://m.media-amazon.com/images/I/91bobQSPQrL._AC_UF1000,1000_QL80_.jpg"},
  ];
  
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Publicações em Destaque</h2>
        <Carousel>
          <CarouselContent>
            {books.map((book) => (
              <CarouselItem className="md:basis-1/3" key={book.id}>
                <BookCard book={book} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default PublicationHighlights;
