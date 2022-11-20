import React from "react";
import Background from "./components/Background";
import Card from "./components/Card";
import Footer from "./components/Footer";

class Creator extends React.Component {
    render() {
        return (
            <div>
                <Background title="Creator" image="boda2.jpg"/>
                <Card />
                <Footer />
            </div>
        )
    }
}

export default Creator;