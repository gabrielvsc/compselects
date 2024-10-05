import { useState } from 'react'
import { format } from 'date-fns'
import { Calendar } from '@/components/ui/calendar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Navbar from '@/components/Navbar'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Link } from 'react-router-dom'

interface Event {
  id: string
  title: string
  date: Date
  type: 'Lançamento' | 'Webinar' | 'Leitura' | 'Exposição'
}

export default function Events() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [events] = useState<Event[]>([
    { id: '1', title: 'Lançamento de Livro: O Futuro da IA', date: new Date(2024, 9, 15), type: 'Lançamento' },
    { id: '2', title: 'Webinar: Técnicas de Escrita', date: new Date(2024, 10, 20), type: 'Webinar' },
    { id: '3', title: 'Leitura: Literatura Moderna', date: new Date(2024, 10, 5), type: 'Leitura' },
    { id: '4', title: 'Exposição de Fim de Ano', date: new Date(2024, 10, 15), type: 'Exposição' },
    { id: '5', title: 'Meet and Greet', date: new Date(2024, 11, 25), type: 'Lançamento' },
    { id: '6', title: 'Noite da Poesia', date: new Date(2024, 10, 10), type: 'Leitura' },
  ])

  const eventDates = events.map(event => event.date.toDateString())

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Header title="Calendário de Eventos" subtitle="Esteja atualizado com nossos próximos eventos!" />
      <main className="container mx-auto py-6">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-1 flex justify-center">
            <Card className="h-min">
              <CardHeader>
                <CardTitle>Calendário</CardTitle>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                  components={{
                    Day: ({ date }) => {
                      const isEvent = eventDates.includes(date.toDateString())
                      return (
                        <div 
                          className={`relative flex h-8 w-8 items-center justify-center p-0 font-normal aria-selected:opacity-100`}
                        >
                          <time dateTime={format(date, 'yyyy-MM-dd')}>
                            {date.getDate()}
                          </time>
                          {isEvent && (
                            <div className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-blue-500" />
                          )}
                        </div>
                      )
                    }
                  }}
                />
              </CardContent>
            </Card>
          </div>
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Próximos Eventos</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid gap-4 sm:grid-cols-2">
                {events.map(event => (
                  <li key={event.id} className="flex flex-col space-y-2 p-4 border rounded-lg">
                    <h3 className="font-semibold">{event.title}</h3>
                    <p className="text-sm text-muted-foreground">{format(event.date, 'MMMM d, yyyy')}</p>
                    <Badge variant="outline" className="w-fit">{event.type}</Badge>
                    <Button asChild className="mt-2">
                      <Link to={`/events/${event.id}`}>Detalhes</Link>
                    </Button>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}