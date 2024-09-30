import { useState, useEffect } from 'react'
import { Menu } from 'lucide-react'
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"

export default function StickyHeader() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: "Início", path: "/" },
    { label: "Sobre Nós", path: "/about" },
    { label: "Publicações", path: "/posts" },
    { label: "Autores", path: "/authors" },
    { label: "Submissões", path: "/submissions" },
    { label: "Eventos", path: "/events" },
    { label: "Blog", path: "/blog" },
    { label: "Contato", path: "/contact" }
  ]

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-primary">
              Compselects
            </a>
          </div>
          <nav className="hidden md:flex space-x-4">
            {navItems.map(({ label, path }) => (
              <a
                key={label}
                href={path}
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4 mt-6">
                {navItems.map(({ label, path }) => (
                  <a
                    key={label}
                    href={path}
                    className="text-lg font-medium text-gray-700 hover:text-primary transition-colors"
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
