import React, { Component } from 'react';//destructure ecma6

class Navigation extends Component {
    render() {
        return (
            <nav className="navbar nabvar-dark bg-dark">
                <a href="/" className="text-white">{this.props.titulo}</a>
            </nav>
        );
    }
}

export default Navigation;//lo exportamos par que pueda ser utilizado en otros componentes