(() => {
  let opening = false

  const open = async () => {
    if (opening) return
    opening = true

    const status = document.querySelector('.status')
    if (status) status.textContent = 'Opening site'

    try {
      try {
        sessionStorage.setItem('abulxt:splash-seen', '1')
      } catch {}

      const response = await fetch('/1.html', { cache: 'no-store' })
      if (!response.ok) throw new Error(`Unable to load page (${response.status})`)

      const appHtml = await response.text()
      const base = `<base href="${location.origin}/">`
      const blob = new Blob([appHtml.replace(/<head(\s[^>]*)?>/i, `$&${base}`)], {
        type: 'text/html',
      })
      const blobUrl = URL.createObjectURL(blob)

      const host = document.createElement('div')
      Object.assign(host.style, {
        position: 'fixed',
        inset: '0',
        zIndex: '2147483647',
      })

      const shadow = host.attachShadow({ mode: 'closed' })
      const frame = document.createElement('iframe')
      frame.src = blobUrl
      frame.title = 'Site'
      frame.allow = 'clipboard-read; clipboard-write; fullscreen'
      Object.assign(frame.style, {
        display: 'block',
        width: '100%',
        height: '100%',
        border: '0',
        background: '#fff',
      })
      frame.addEventListener('load', () => URL.revokeObjectURL(blobUrl), { once: true })

      shadow.append(frame)
      document.body.replaceChildren(host)
    } catch (error) {
      opening = false
      if (status) status.textContent = 'Could not open site. Try again.'
      console.error(error)
    }
  }

  addEventListener('keydown', (event) => {
    if ((!event.ctrlKey && !event.metaKey) || event.key.toLowerCase() !== 'e') return
    if (event.altKey || event.shiftKey) return
    event.preventDefault()
    void open()
  })
})()
