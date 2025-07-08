import { useState } from 'react'
import ClockCard from './components/ClockCard/ClockCard'
import AddTimeZoneModal from './components/AddTimeZoneModal/AddTimeZoneModal'
import ConfirmModal from './components/ConfirmModal/ConfirmModal'
import './styles/globals.css'

function App() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false)
  const [clocks, setClocks] = useState([
    { city: 'Берлин', timeZone: 'Europe/Berlin' },
    { city: 'Минск', timeZone: 'Europe/Minsk' }
  ])
  const [clockToRemove, setClockToRemove] = useState<string | null>(null)

  const handleAddTimeZone = (timeZone: string) => {
    const city = timeZone.split('/')[1] || timeZone
    setClocks([...clocks, { city, timeZone }])
  }

  const requestRemoveClock = (timeZone: string) => {
    setClockToRemove(timeZone)
    setIsConfirmModalOpen(true)
  }

  const confirmRemoveClock = () => {
    if (clockToRemove) {
      setClocks(clocks.filter(clock => clock.timeZone !== clockToRemove))
      setClockToRemove(null)
      setIsConfirmModalOpen(false)
    }
  }

  return (
    <div className="app">
      <header className="header">
        <h1>TimeBridge</h1>
        <button 
          className="add-button"
          onClick={() => setIsAddModalOpen(true)}
        >
          + Добавить
        </button>
      </header>

      <main className="clocks-container">
        {clocks.map((clock) => (
          <ClockCard 
            key={clock.timeZone}
            city={clock.city}
            timeZone={clock.timeZone}
            onRemove={() => requestRemoveClock(clock.timeZone)}
          />
        ))}
      </main>

      <AddTimeZoneModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAddTimeZone}
      />

      <ConfirmModal
        isOpen={isConfirmModalOpen}
        message={`Вы уверены, что хотите удалить ${clockToRemove ? clocks.find(c => c.timeZone === clockToRemove)?.city : ''}?`}
        onConfirm={confirmRemoveClock}
        onCancel={() => setIsConfirmModalOpen(false)}
      />
    </div>
  )
}

export default App