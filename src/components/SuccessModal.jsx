function SuccessModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div
      className="modal-overlay success-overlay"
      onClick={onClose}
    >
      <div
        className="modal-window success-window"
        onClick={(e) => e.stopPropagation()}
      >

        <div className="success-icon">
          ✦ ☾ ✦
        </div>

        <h2>Thank You!</h2>

        <p>
          I'll come back to you as soon as possible
          with your reading.
        </p>

        <p className="success-small">
          So keep an eye on your inbox!
        </p>

        <button
          className="modal-close success-close"
          onClick={onClose}
        >
          ✦ Return ✦
        </button>

      </div>
    </div>
  );
}

export default SuccessModal;