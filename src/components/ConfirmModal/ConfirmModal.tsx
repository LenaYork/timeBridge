import './ConfirmModal.css'

type Props = {
  isOpen: boolean
  message: string
  onConfirm: () => void
  onCancel: () => void
}

export default function ConfirmModal({ 
  isOpen, 
  message, 
  onConfirm, 
  onCancel 
}: Props) {
  if (!isOpen) return null

  return (
    <div className="confirm-modal-overlay">
      <div className="confirm-modal">
        <p className="confirm-modal-message">{message}</p>
        <div className="confirm-modal-actions">
          <button 
            onClick={onCancel}
            className="confirm-modal-cancel-btn"
          >
            Отмена
          </button>
          <button 
            onClick={onConfirm}
            className="confirm-modal-confirm-btn"
          >
            Удалить
          </button>
        </div>
      </div>
    </div>
  )
}