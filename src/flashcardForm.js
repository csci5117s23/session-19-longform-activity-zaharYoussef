import React, { useState } from 'react';

export default function FlashcardForm({ onAddFlashcard }) {
  const [front, setFront] = useState('');
  const [back, setBack] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newFlashcard = {
      front: front,
      back: back,
    };
    onAddFlashcard(newFlashcard);
    setFront('');
    setBack('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Front:
        <input
          type="text"
          value={front}
          onChange={(event) => setFront(event.target.value)}
        />
      </label>
      <label>
        Back:
        <input
          type="text"
          value={back}
          onChange={(event) => setBack(event.target.value)}
        />
      </label>
      <button type="submit">Add flashcard</button>
    </form>
  );
}
