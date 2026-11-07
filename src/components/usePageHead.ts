import { useEffect } from 'react'
import { headTags, pageMeta } from '../seo'

/** Replaces <html lang>, <title> and the `data-seo` tags in <head> whenever the route changes. */
export function usePageHead(pathname: string) {
  useEffect(() => {
    const meta = pageMeta(pathname)
    document.documentElement.lang = meta.locale
    document.title = meta.title
    for (const element of document.head.querySelectorAll('[data-seo]')) element.remove()
    for (const { tag, attrs, content } of headTags(meta)) {
      const element = document.createElement(tag)
      element.setAttribute('data-seo', '')
      for (const [name, value] of Object.entries(attrs)) element.setAttribute(name, value)
      if (content) element.textContent = content
      document.head.append(element)
    }
  }, [pathname])
}
