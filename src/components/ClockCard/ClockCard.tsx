import { useTime } from '../../hooks/useTime'
import './ClockCard.css'

type Props = {
  city: string
  timeZone: string
  onRemove?: () => void
}

export default function ClockCard({ city, timeZone, onRemove }: Props) {
  const time = useTime(timeZone)

  return (
    <div className="clock-card">
      <div className="clock-card-header">
        <h3>{city}</h3>
      </div>
      <div className="clock-card-time">{time}</div>
      {onRemove && (
          <button 
            onClick={onRemove} 
            className="clock-card-remove-btn"
            aria-label="Удалить"
          >
            ×
          </button>
        )}
    </div>
  )
}