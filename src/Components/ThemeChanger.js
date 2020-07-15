import React, {Component} from 'react';
import themeToggle from '../HOCs/themeToggle';

class ThemeChanger extends Component {
    render(){
        console.log(this.props)
        return(
            <div className={this.props.themeObj.theme}>
                <button className='toggle-btn' onClick={this.props.themeObj.toggleFn}>
                    {this.props.themeObj.theme}
                </button>
            </div>
        )
    }
}

export default themeToggle(ThemeChanger);