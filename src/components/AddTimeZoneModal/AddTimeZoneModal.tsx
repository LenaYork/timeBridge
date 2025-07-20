import { useState } from 'react'
import { timeZones } from '../../config/timezones'

// Обновлённые типы
type TimeZoneData = {
  city: string
  timeZone: string
}

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  onAdd: (data: TimeZoneData) => void 
  existingTimeZones: string[] // Пропс с уже выбранными таймзонами
}

export default function AddTimeZoneModal({ isOpen, onClose, onAdd, existingTimeZones }: ModalProps) {
  const availableTimeZones = timeZones.filter(
    zone => !existingTimeZones.includes(zone.id)
  )
  const [selectedZoneId, setSelectedZoneId] = useState('')

  const handleSubmit = () => {
    if (!selectedZoneId) return

     const selectedZone = availableTimeZones.find(z => z.id === selectedZoneId)
    if (selectedZone) {
      onAdd({
        city: selectedZone.displayName,
        timeZone: selectedZone.id
      })
      setSelectedZoneId('')
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Добавить часовой пояс</h2>
        
        <select
          value={selectedZoneId}
          onChange={(e) => setSelectedZoneId(e.target.value)}
          className="timezone-select"
        >
          <option value="">Выберите город</option>
          {availableTimeZones.map(zone => (
            <option key={zone.id} value={zone.id}>
              {zone.label}
            </option>
          ))}
        </select>

        <div className="modal-actions">
          <button onClick={onClose} className="cancel-btn">
            Отмена
          </button>
          <button 
            onClick={handleSubmit} 
            className="add-button-modal"
            disabled={!selectedZoneId}
          >
            Добавить
          </button>
        </div>
      </div>
    </div>
  )
}