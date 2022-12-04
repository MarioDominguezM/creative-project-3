import { useState, useEffect } from 'react';
import axios from 'axios';
import Background from "./components/Background";
import Intro from "./components/Intro";
import Quote from "./components/Quote";
import textData from "./components/textData";
import Footer from "./components/Footer";


function About() {
    const aboutComponents = textData.map(text => <Quote key={text.key} 
    author={text.author} quote={text.support}/>);
    
    const [people, setPeople] = useState([]);
    const [error, setError] = useState("");
    let flagUrl = "https://countryflagsapi.com/png/";

    const fetchPeople = async () => {
        try {
            const response = await axios.get("/api/people");
            setPeople(response.data.people);
        }
        catch (error) {
            setError("error retrieving people: " + error);
        }
    };
    
    useEffect(() => {
        fetchPeople();
    }, []);

    return (
        <div>
            <Background title="About" image="thankful.png"/>
            <Intro />
            <div className="about">
                <p>There is plenty <strong style={{ color: "#000080"}}>supportive
                evidence</strong> about how gratitude can have a positive impact
                in our lives. For example...</p>
                {aboutComponents}
                <p>Let gratitude change your life!</p>
            </div>
            <div className="about">
                <h1><em>Our People</em></h1>
                <p>There is people sharing gratitude from all over the world!</p>
            </div>
            <div className="countries">
                {people.map( person => (
                    <div className="flag">
                        <p><i>{person.name}</i>from <i>{person.country}</i></p>
                        <img src={flagUrl + person.country}/>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default About;
