import { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import { services } from './data/site'
import { locales } from './i18n/locales'
import { pagePaths } from './i18n/routes'
import Contact from './pages/Contact'
import Download from './pages/Download'
import GalleryIndex from './pages/GalleryIndex'
import Home from './pages/Home'
import Kits from './pages/Kits'
import NotFound from './pages/NotFound'
import ProjectPage from './pages/ProjectPage'
import ServicePage from './pages/ServicePage'

/**
 * One route set per language (src/i18n/routes.ts). Italian paths keep the original
 * WordPress slugs so existing links keep working. Pages read their language from the URL.
 */
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {locales.map((locale) => {
          const paths = pagePaths[locale]
          return (
            <Fragment key={locale}>
              <Route path={paths.home} element={<Home />} />
              {services.map((service) => (
                <Route key={service.key} path={paths[service.key]} element={<ServicePage service={service} />} />
              ))}
              <Route path={paths.kits} element={<Kits />} />
              <Route path={paths.download} element={<Download />} />
              <Route path={paths.contact} element={<Contact />} />
              <Route path={paths.gallery} element={<GalleryIndex />} />
              <Route path={`${paths.gallery}/:slug`} element={<ProjectPage />} />
            </Fragment>
          )
        })}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
