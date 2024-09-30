import { Calendar, MapPin } from 'lucide-react';
import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
}

interface UpcomingEventsProps {
  events: Event[];
}

const UpcomingEvents: React.FC<UpcomingEventsProps> = ({ events }) => {
  return (
    <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Eventos próximos</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {events.map((event) => (
              <Card key={event.id}>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-2">{event.title}</h3>
                  <p className="flex items-center mb-2"><Calendar className="mr-2 h-4 w-4" /> {event.date}</p>
                  <p className="flex items-center"><MapPin className="mr-2 h-4 w-4" /> {event.location}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button>Veja todos os eventos</Button>
          </div>
        </div>
      </section>
  );
};

export default UpcomingEvents;



// <Card>
// <CardContent className="p-6">
//   <h3 className="font-bold text-xl mb-2">{event.title}</h3>
//   <p className="flex items-center mb-2"><Calendar className="mr-2 h-4 w-4" /> {event.date}</p>
//   <p className="flex items-center"><MapPin className="mr-2 h-4 w-4" /> {event.location}</p>
// </CardContent>
// </Card>


