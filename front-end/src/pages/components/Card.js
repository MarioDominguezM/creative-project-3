import React from "react";

class Card extends React.Component {
    render() {
        return (
            <div>
                <div className="card">
                    <img className="mario-pic"
                    src="/gratitude/src/pages/components/images/mario.png"/>
                    <div className="card-container">
                        <h2>Mario Dominguez</h2>
                        <p className="card-title">Creator</p>
                        <p>I was born and raised in Mexico. I am still studying.
                        I attend BYU. My major is Economics with minors in 
                        Business Strategy and Computer Science. I want to go
                        back to Mexico and try to do something for my country. 
                        I am a firm believer that gratitude leads to a more joyful
                        life. That is why I created this webstie!
                        </p>
                        <p className="card-title">Hobbies</p>
                        <ul>
                            <li>Reading the news</li>
                            <li>Eating</li>
                            <li>Playing the guitar</li>
                        </ul>
                        <p className="card-title">Favorite Food</p>
                        <p>Tacos!!!!</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;