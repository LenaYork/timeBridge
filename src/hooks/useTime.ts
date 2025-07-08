import { useEffect, useState } from 'react'

export const useTime = (timeZone: string) => {
  const [time, setTime] = useState('')

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-GB', { 
        timeZone, 
        hour: '2-digit',
        minute: '2-digit',
        hour12: false 
      }))
    }, 1000)

    return () => clearInterval(timer)
  }, [timeZone])

  return time // Формат: "HH:MM"
}