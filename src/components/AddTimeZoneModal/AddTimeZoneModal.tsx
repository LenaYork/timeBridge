import { useState } from 'react'
import { timeZones } from '../../config/timezones' // Массив часовых поясов

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  onAdd: (timeZone: string) => void
}

export default function AddTimeZoneModal({ isOpen, onClose, onAdd }: ModalProps) {
  const [selectedZone, setSelectedZone] = useState('')

  const handleSubmit = () => {
    if (selectedZone) {
      onAdd(selectedZone)
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Добавить часовой пояс</h2>
        
        <select
          value={selectedZone}
          onChange={(e) => setSelectedZone(e.target.value)}
          className="timezone-select"
        >
          <option value="">Выберите город</option>
          {timeZones.map((zone) => (
            <option key={zone} value={zone}>
              {zone}
            </option>
          ))}
        </select>

        <div className="modal-actions">
          <button onClick={onClose} className="cancel-btn">
            Отмена
          </button>
          <button onClick={handleSubmit} className="add-btn">
            Добавить
          </button>
        </div>
      </div>
    </div>
  )
}