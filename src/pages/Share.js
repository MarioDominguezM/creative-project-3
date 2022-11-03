import React from "react";
import Background from "./components/Background";
import Intro from "./components/Intro";
import Post from "./components/Post";
import postsData from "./components/postsData";
import Form from "./components/Form"
import Footer from "./components/Footer";

class Share extends React.Component {
    render() {
        const postComponents = postsData.map(post => <Post key={post.key} 
        quote={post.quote} picture={post.picture} name={post.name}/>)
        
        return (
            <div>
                <Background title="Share" image="first-vision.jpeg"/>
                <Intro />
                <h2>Share a post!</h2>
                <Form />
                {postComponents}
                <Footer/>
            </div>
        )
    }
}

export default Share;