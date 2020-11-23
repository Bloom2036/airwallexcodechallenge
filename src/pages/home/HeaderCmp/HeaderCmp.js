import React, { Component } from 'react'
import './HeaderCmp.scss';

export default class HeaderCmp extends Component {
    render() {
        return (
    		<div className="header-wrapper">
    			<div className="logo-wrapper"></div>
    			<div className="title">Broccoli<span className="symbol">&amp;</span>co.</div>
    		</div>
        )
    }
}
 