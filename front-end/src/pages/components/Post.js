import React from "react";

class Post extends React.Component {
    render() {
        return (
            <div>
                <div className="container" style={{ backgroundImage: "url(/gratitude/front-end/src/pages/components/images/" + this.props.picture + ")" }}>
                   <di className="container-profile">
                        <div className="container-profile-text">
                             <p>{this.props.quote}</p>
                             <p>by <b>{this.props.name}</b></p>
                        </div>
                    </di>
                </div>
            </div>
        )
    }
}

export default Post;