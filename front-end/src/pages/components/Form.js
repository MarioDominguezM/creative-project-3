import React from "react";

class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "",
            quote: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <form>
                <input
                    type="text"
                    value={this.state.name}
                    id="name"
                    name="name"
                    placeholder="Name"
                    onChange={this.handleChange}
                /><br/>
                <input
                    type="text"
                    value={this.state.quote}
                    id="quote"
                    name="quote"
                    placeholder="Gratitude Sentence"
                    onChange={this.handleChange}
                /><br/>
                <label for="picture">Select a file:</label>
                <input 
                    type="file"
                    id="picture" 
                    name="picture"
                /><br/>
                <input
                    type="Submit"
                />
            </form>
        )
    }
}

export default Form;
