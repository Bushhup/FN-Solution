import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    // Ensure `matches` is read once and used to set the initial state.
    setIsMobile(mql.matches)

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches)
    }

    // `addListener` is deprecated but included for broader browser support.
    try {
      mql.addEventListener('change', handleMediaQueryChange);
    } catch (e) {
      // Fallback for older browsers
      mql.addListener(handleMediaQueryChange);
    }

    return () => {
      try {
        mql.removeEventListener('change', handleMediaQueryChange)
      } catch (e) {
        // Fallback for older browsers
        mql.removeListener(handleMediaQueryChange)
      }
    }
  }, [])

  return isMobile
}
