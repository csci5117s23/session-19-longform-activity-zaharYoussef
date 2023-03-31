import { useState } from "react"
import './flashcard.css';

export default function Flashcard() {
    const [front, setFront] = useState(true);//state


    function toggleVisible(){
        setFront(!front);
    }

    if(front){
        return (
            <div className="CardFront Card" onClick={toggleVisible}>
                <span>
                    front
                </span>
            </div>
          );
    }
    else{
        return (
            <div className="CardBack Card" onClick={toggleVisible}>
                <span>
                    back
                </span>
            </div>
          );
    }

}


