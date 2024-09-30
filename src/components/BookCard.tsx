import { PersonIcon } from "@radix-ui/react-icons";
import { Card, CardContent } from "./ui/card";

interface Book {
  id: number;
  title: string;
  author: string;
  cover: string;
}

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => (
  <Card>
    <CardContent className="p-6">
      <img
        src={book.cover}
        alt={`Cover of the book ${book.title}`}
        className="mb-4 w-full h-80 object-cover"
      />
      <h3 className="font-bold text-xl mb-2">{book.title}</h3>
      <p className="flex items-center mb-2">
        <PersonIcon className="mr-2 h-4 w-4" /> {book.author}
      </p>
    </CardContent>
  </Card>
);

export default BookCard;
