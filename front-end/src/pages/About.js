import React from "react";
import Background from "./components/Background";
import Intro from "./components/Intro";
import Quote from "./components/Quote"
import textData from "./components/textData";
import Footer from "./components/Footer";


class About extends React.Component {
    render() {
        const aboutComponents = textData.map(text => <Quote key={text.key} 
        author={text.author} quote={text.support}/>)
        
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
                <Footer />
            </div>
        )
    }
}

export default About;