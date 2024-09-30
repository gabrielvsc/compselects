import { Card, CardContent } from "./ui/card";
import { Calendar, MapPin } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
}

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => (
  <Card>
    <CardContent className="p-6">
      <h3 className="font-bold text-xl mb-2">{event.title}</h3>
      <p className="flex items-center mb-2"><Calendar className="mr-2 h-4 w-4" /> {event.date}</p>
      <p className="flex items-center"><MapPin className="mr-2 h-4 w-4" /> {event.location}</p>
    </CardContent>
  </Card>
);

export default EventCard;
