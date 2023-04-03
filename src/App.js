import './App.css';
import './flashcard';
import Flashcard from './flashcard';
import FlashcardList from './flashcardList';

function App() {
  const QUESTIONS = [{front: "question1", back:"answer1"},
                    {front: "question2", back:"answer2"},
                    {front: "question3", back:"answer3"},]

  return (
    <div className="App">
      <h1>My Flashcards</h1>

      <FlashcardList></FlashcardList>



    </div>
  );
}

export default App;
