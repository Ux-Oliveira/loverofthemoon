function AboutModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
    >
      <div
        className="modal-window"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-stars">
          ✦ ☾ ✦
        </div>

        <h2>Hi there</h2>

        <p>
          Welcome to my little corner of the internet.
        </p>

        <p>
          This space is dedicated to one of my passions. Tarot reading. I've been practicing it for a decade and my intuition has grown stronger over the years. I'm hoping to help you find clarity the guidance you need.
        </p>

        <p>
          Do you want a reading on your love life? Career? Or maybe just know a bit about what the future holds for you? Send me a message and I'll tell you what the cards have to say!
        </p>

        <button
          className="modal-close"
          onClick={onClose}
        >
          ✦ Close ✦
        </button>
      </div>
    </div>
  );
}

export default AboutModal;