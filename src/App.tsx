import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import { services } from './data/site'
import Contact from './pages/Contact'
import Download from './pages/Download'
import GalleryIndex from './pages/GalleryIndex'
import Home from './pages/Home'
import Kits from './pages/Kits'
import NotFound from './pages/NotFound'
import ProjectPage from './pages/ProjectPage'
import ServicePage from './pages/ServicePage'

/** Paths keep the original WordPress slugs so existing links keep working. */
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        {services.map((service) => (
          <Route key={service.slug} path={service.slug} element={<ServicePage service={service} />} />
        ))}
        <Route path="impianti-chiavi-in-mano" element={<Kits />} />
        <Route path="download" element={<Download />} />
        <Route path="contatto-per-informazioni" element={<Contact />} />
        <Route path="galleria" element={<GalleryIndex />} />
        <Route path="galleria/:slug" element={<ProjectPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
