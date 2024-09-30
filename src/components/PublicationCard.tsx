import { Card, CardContent } from "./ui/card";

interface Publication {
  cover: string;
  title: string;
  author: string;
}

interface PublicationCardProps {
  publication: Publication;
}

const PublicationCard: React.FC<PublicationCardProps> = ({ publication }) => (
  <Card>
    <CardContent className="p-4">
      <img 
        src={publication.cover} 
        alt={publication.title} 
        className="w-full h-auto mb-4 rounded" 
      />
      <h3 className="font-bold text-lg mb-2">{publication.title}</h3>
      <p className="text-gray-600">{publication.author}</p>
    </CardContent>
  </Card>
);

export default PublicationCard;
