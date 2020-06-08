// Code DigitalClicker Component Here
import React, { Component } from 'react'

export default class DigitalClicker extends Component {
    state = {
        timesClicked: 0
    }

    // handleClick = () => {
    //     this.setState({
    //         timesClicked: this.state.timesClicked + 1
    //     })
    // }
    //While it works, the above is bad practice apparently, due to async issues. Below is the correct way of handling updates.

    handleClick = () => {
        this.setState( prevState => {
            return {
                timesClicked: prevState.timesClicked + 1
            }
        });
    }

    render() {
        return (
            <button onClick={()=>this.handleClick()}>{this.state.timesClicked}</button>
        )
    }
}
