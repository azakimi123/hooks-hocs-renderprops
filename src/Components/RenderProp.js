import React, {Component} from 'react';

export default class RenderProp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: 'light'
        }
    }

    themeToggle = () => {
        if(this.state.theme === 'light') {
            this.setState({theme: 'dark'})
        } else {
            this.setState({theme: 'light'})
        }
    }

    render(){
        return (
            this.props.render(this.state.theme, this.themeToggle)
        )
    }
}