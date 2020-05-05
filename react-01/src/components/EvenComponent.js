import React from 'react';

class MyComp extends React.Component {
    render() {
        return (
            <div>
                <h1> EvenComponent </h1>
                <button onClick={this.props.onPushMe}>Push Me</button>
            </div>
        )
    }
}
export default MyComp;