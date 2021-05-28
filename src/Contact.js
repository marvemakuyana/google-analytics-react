import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return <div>
            <h4>Contact</h4>
            <p>This is Contact</p>
            <input type='button' value='Back' onClick={() => this.props.history.goBack()}/>
        </div>
    }
}
export default Contact