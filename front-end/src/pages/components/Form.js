import { useState, useEffect } from 'react';
import axios from 'axios';
import setError from "./../Share";

function Form(props) {
    const [name, setName] = useState("");
    const [sentence, setSentence] = useState("");
    const [country, setCountry] = useState("");

    const createPerson = async () => {
        try {
            await axios.post("/api/people", { name: name, sentence: sentence, 
            country: country });
        }
        catch (error) {
            setError("error adding a person: " + error);
        }
    };

    const addPerson = async (e) => {
        e.preventDefault();
        await createPerson();
        setName("");
        setSentence("");
        setCountry("");
        props.updatePeople();
    }

    return (
        <form onSubmit={addPerson}>
            <input
                type="text"
                value={name}
                placeholder="Name"
                onChange={e => setName(e.target.value)}
            /><br/>
            <input
                type="text"
                value={sentence}
                placeholder="Gratitude Sentence"
                onChange={e => setSentence(e.target.value)}
            /><br/>
            {/*<label for="picture">Select a file:</label>
            <input 
                type="file"
                id="picture" 
                name="picture"
            /><br/>*/}
            <input
                type="text"
                value={country}
                placeholder="Valid country name"
                onChange={e => setCountry(e.target.value)}
            /><br/>
            <input
               type="submit"
               value="Submit"
            />
        </form>
    )
}

export default Form;
