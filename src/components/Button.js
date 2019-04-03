import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
    // no need for static contextType = colorContext when using Consumer;
    renderSubmit(language) {
        return language === 'english' ? 'Submit' : 'voorleggen';
    }

    renderButton(color) {
        return (
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {/* an object is passed as a variable and destructured from the Provider */}
                    {({ language }) => this.renderSubmit(language)}
                </LanguageContext.Consumer>
            </button>
        )
    }

    render() {
        // the child of Consumer has to be a function 
        return (
            <div>
                <ColorContext.Consumer>
                    { color => this.renderButton(color)}
                </ColorContext.Consumer>
            </div>   
        )
    }
}

export default Button;
