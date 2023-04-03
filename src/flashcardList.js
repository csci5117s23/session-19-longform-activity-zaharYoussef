import React, { useState } from 'react';
import FlashcardForm from './flashcardForm';
import Flashcard from './flashcard';


export default function FlashcardList() {
  const [flashcards, setFlashcards] = useState([]);

  const handleAddFlashcard = (newFlashcard) => {
    setFlashcards([...flashcards, newFlashcard]);
  };

  return (
    <div>
      <FlashcardForm onAddFlashcard={handleAddFlashcard} />
        {flashcards.map((flashcard, index) => (
            <Flashcard frontText= {flashcard.front} backText={flashcard.back} ></Flashcard>
        ))}
    </div>
  );
}
