// your ImageSlider code here!
import React, { Component } from 'react';

export default class ImageSlider extends Component {
    constructor() {
        super()
        this.state = {
            currentSlideIndex: 0
        }
    }
    
    // our increment method makes use of the 'setState' method, which is what we use to alter state
    // increment = () => {
    //     const newCount = this.state.count + 1
    //     this.setState({
    //         count: newCount
    //     })
    // }
    
    
    
    render() {
        return (
            <div>I am on slide {this.state.currentSlideIndex}</div>
        )
    }
}