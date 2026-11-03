import { useEffect } from 'react'
import { company } from '../data/site'

export function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} | Unicable Srl` : company.siteTitle
  }, [title])
}
