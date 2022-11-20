import React from "react";

class Quote extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.author}:</p>
                <p style={{ textAlign: "center" }}><em>{this.props.quote}</em></p>
            </div>
        )
    }
}

export default Quote;