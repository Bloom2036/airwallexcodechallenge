import React, { Component } from 'react'

export default class SuccessCmp extends Component {
    render() {
        return (
            <>
                <div className="modal-title">All done!</div>
                <div className="line"></div>
                <div className="main-content">You will be one of the first to experience <br /> Broccoli & Co. when we launch.</div>
                {this.props.children}
            </>
        )
    }
}
