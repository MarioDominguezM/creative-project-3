import { useState, useEffect } from 'react';
import axios from 'axios';
import Background from "./components/Background";
import Intro from "./components/Intro";
import Post from "./components/Post";
import postsData from "./components/postsData";
import Form from "./components/Form";
import Footer from "./components/Footer";

function Share() {
    const postComponents = postsData.map(post => <Post key={post.key} 
    quote={post.quote} picture={post.picture} name={post.name}/>);

    const [people, setPeople] = useState([]);
    const [error, setError] = useState("");
    const [update, setUpdate] = useState(false);

    const fetchPeople = async () => {
        try {
            const response = await axios.get("/api/people");
            setPeople(response.data.people);
        }
        catch (error) {
            setError("error retrieving people: " + error);
        }
    };

    const deleteOnePerson = async (person) => {
        try {
            await axios.delete("/api/people/" + person.id);
        }
        catch (error) {
            setError("error deleting a person" + error);
        }
    };

    useEffect(() => {
        fetchPeople();
        setUpdate(false);
    }, [update]);

    const deletePerson = async (person) => {
        await deleteOnePerson(person);
        fetchPeople();
    };
    
    const updatePeople = () => {
        setUpdate(true);
    };

    return (
        <div>
            <Background title="Share" image="first-vision.jpeg"/>
            <Intro />
            <h2>Share a post!</h2>
            <Form updatePeople={updatePeople}/>
            {error}
            {postComponents}
            {people.map( person => (
                <div className="container" style={{ backgroundImage: "url(/gratitude/front-end/src/pages/components/images/first-vision.jpeg)" }}>
                   <di className="container-profile">
                        <div className="container-profile-text">
                             <p>"{person.sentence}"</p>
                             <p>by <b>{person.name}</b></p>
                        </div>
                    </di>
                    <button className="close" onClick={e => deletePerson(person)}>
                    X</button>
                </div>
            ))}
            <Footer/>
        </div>
    );
}

export default Share;
