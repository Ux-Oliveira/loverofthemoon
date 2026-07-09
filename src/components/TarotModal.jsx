import { useState } from "react";

function TarotModal({ open, onClose, onSuccess }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [purpose, setPurpose] = useState("");
  const [budget, setBudget] = useState(5);

  const [loading, setLoading] = useState(false);

  if (!open) return null;

  async function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim()) {
      alert("Tell me your name");
      return;
    }

    if (!email.trim()) {
      alert("Your email");
      return;
    }

    if (!purpose.trim()) {
      alert("Please, tell me what kind of reading you're looking for.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          purpose,
          budget,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setName("");
      setEmail("");
      setPurpose("");
      setBudget(5);

      onSuccess();
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
    >
      <div
        className="modal-window tarot-window"
        onClick={(e) => e.stopPropagation()}
      >

        <div className="modal-stars">
          ✦ ☾ ✦
        </div>

        <h2>Book your tarot reading session:</h2>

        <form
          className="tarot-form"
          onSubmit={handleSubmit}
        >

          <div className="form-group">
            <label>Name</label>

            <input
              type="text"
              placeholder="Your name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Email</label>

            <input
              type="email"
              placeholder="Your email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>
              Purpose of the Reading
            </label>

            <textarea
              rows="6"
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
              placeholder="Tell me what kind of reading you want. What kind of insight are you looking for?"
            />
          </div>

          <div className="form-group">

            <label>
              Budget
            </label>

            <div className="budget-box">

              <span className="budget-min">
                €2
              </span>

              <input
                className="budget-slider"
                type="range"
                min="2"
                max="10"
                step="1"
                value={budget}
                onChange={(e) =>
                  setBudget(e.target.value)
                }
              />

              <span className="budget-max">
                €10
              </span>

            </div>

            <div className="budget-display">
              Selected Budget

              <span>
                €{budget}
              </span>
            </div>

          </div>

          <div className="paypal-note">
            ✦ All payments are done through PayPal ✦
          </div>
                    <button
            type="submit"
            className="book-button"
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="loading-spinner"></span>
                Sending...
              </>
            ) : (
              "✦ Book It ✦"
            )}
          </button>

        </form>

      </div>
    </div>
  );
}

export default TarotModal;