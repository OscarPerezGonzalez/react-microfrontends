import { useState, useEffect } from 'react'

const useScript = url => {
  const [ready, setReady] = useState(false)
  const [failed, setFailed] = useState(false)
  useEffect(() => {
    const script = document.createElement('script')

    script.src = url
    script.type = 'text/javascript'
    script.async = true

    setReady(false)
    setFailed(false)

    script.onload = () => {
      console.info(`Script Loaded: ${url}`)
      setReady(true)
    }

    script.onerror = () => {
      console.error(`Script Error: ${url}`)
      setReady(false)
      setFailed(true)
    }

    document.head.appendChild(script)
    return () => {
      console.info(`Script Removed: ${url}`)
      document.head.removeChild(script)
    }
  }, [url])

  return {
    failed,
    ready,
  }
}

export default useScript
