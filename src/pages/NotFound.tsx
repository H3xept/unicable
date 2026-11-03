import { Button, Container } from '../components/ui'

export default function NotFound() {
  return (
    <Container className="flex flex-col items-center py-32 text-center">
      <p className="font-display text-7xl font-extrabold text-sun-400">404</p>
      <h1 className="mt-4 text-3xl font-extrabold">Pagina non trovata</h1>
      <p className="mt-3 max-w-md">La pagina richiesta non esiste o è stata spostata.</p>
      <div className="mt-8">
        <Button to="/" variant="secondary">
          Torna alla home
        </Button>
      </div>
    </Container>
  )
}
