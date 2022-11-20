import React from "react";

class Background extends React.Component {
    render() {
        return (
            <div className="image" style={{ backgroundImage: "url(/gratitude/front-end/src/pages/components/images/" + this.props.image + ")" }}>
                <div className="image-overlay">
                    <h1>{this.props.title}</h1>
                </div>
            </div>
        )
    }
}

export default Background;