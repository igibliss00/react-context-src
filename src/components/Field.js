import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
    //same as Field.contextType = LanguageContext placed outside of the class
    static contextType = LanguageContext;
    render() {
        const text = this.context.language === 'english' ? 'Name' : 'Naam';
        return (
            <div className="ui field">
                <label htmlFor="">{text}</label>
                <input type="text"/>
            </div>
        )
    }
}

export default Field;
