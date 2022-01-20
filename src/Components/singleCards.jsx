import React from 'react'
import './singleCards.css'

function singleCards({card, handleChoice, flipped}) {

    const handleChoices = () => {
        handleChoice(card)
    }

    return (
        <div className="card-image">
            <div className={flipped ? "flipped" : ""}>
                <img src={card.src} alt="card front"  className="front" />
                <img src="/imgs/cover.png" alt="card back" onClick={handleChoices} className="back" />
            </div>
        </div>
    )
}

export default singleCards
