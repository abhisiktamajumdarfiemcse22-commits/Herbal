import { useEffect, useRef } from 'react'
import DOMPurify from 'dompurify'

export default function SketchfabEmbed({ html }){
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return

    // sanitize incoming HTML first (allow iframe and a few attrs)
    const clean = DOMPurify.sanitize(html || '<div class="embed-placeholder">No model provided</div>', {
      ADD_TAGS: ['iframe'],
      ADD_ATTR: ['allow', 'allowfullscreen', 'frameborder', 'title', 'src', 'style']
    })

    // parse sanitized HTML into a temporary container so we can tweak DOM
    const tmp = document.createElement('div')
    tmp.innerHTML = clean

    // enlarge iframe and make it visually pleasing
    const iframe = tmp.querySelector('iframe')
    if (iframe) {
      iframe.style.width = '100%'
      iframe.style.height = '520px'
      iframe.style.border = '0'
      iframe.style.borderRadius = '12px'
      iframe.style.boxShadow = '0 8px 24px rgba(24, 24, 24, 0.12)'
      iframe.setAttribute('loading', 'lazy')
    }

    // find the caption paragraph (Sketchfab embed includes a <p> with links)
    const caption = tmp.querySelector('p')
    if (caption) {
      // increase font and soften color
      caption.style.fontSize = '15px'
      caption.style.color = '#40535a'
      caption.style.marginTop = '10px'
      caption.style.fontFamily = 'Georgia, serif'
      caption.style.lineHeight = '1.4'

      // remove contributor link (usually the second anchor) while keeping model title link
      const anchors = caption.querySelectorAll('a')
      if (anchors && anchors.length > 1) {
        // remove the second anchor which is typically the contributor
        if (anchors[1] && anchors[1].parentNode) {
          anchors[1].parentNode.removeChild(anchors[1])
        }
      }
    }

    // Set the processed HTML into the ref
    ref.current.innerHTML = ''
    // append children from tmp to avoid direct innerHTML assignment which may reintroduce unsafe content
    Array.from(tmp.childNodes).forEach(node => ref.current.appendChild(node))

  }, [html])

  return (
    <div className="sketchfab-embed" ref={ref} />
  )
}
