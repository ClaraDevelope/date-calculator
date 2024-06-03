import { useEffect, useState } from 'react'
const useTime = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)
  }, [])
  return time
}

export default useTime
