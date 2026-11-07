import { Button, Container } from '../components/ui'
import { useContent, useLinks } from '../i18n/useLocale'

export default function NotFound() {
  const t = useContent().notFound
  return (
    <Container className="flex flex-col items-center py-32 text-center">
      <p className="font-display text-7xl font-extrabold text-sun-400">404</p>
      <h1 className="mt-4 text-3xl font-extrabold">{t.title}</h1>
      <p className="mt-3 max-w-md">{t.text}</p>
      <div className="mt-8">
        <Button to={useLinks().page('home')} variant="secondary">
          {t.back}
        </Button>
      </div>
    </Container>
  )
}
