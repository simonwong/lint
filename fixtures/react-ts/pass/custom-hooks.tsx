/* eslint-disable import/no-extraneous-dependencies */
import { useState, useEffect, DependencyList } from 'react'

type UseFetchReturn = {
  result: Response | null
  loading: boolean
}
type UseFetch = (
  url: string,
  config: RequestInit,
  deps: DependencyList,
) => UseFetchReturn

export const useFetch: UseFetch = (
  url: string,
  config: RequestInit,
  deps: DependencyList,
) => {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<Response | null>(null)

  useEffect(() => {
    setLoading(true)
    const abortController = new AbortController()

    fetch(url, { ...config, signal: abortController.signal })
      .then(res => setResult(res))
      .catch(() => {})
      .finally(() => setLoading(false))

    return () => abortController.abort()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return { result, loading }
}
