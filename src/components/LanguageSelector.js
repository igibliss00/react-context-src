import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class LanguageSelector extends React.Component {
    static contextType = LanguageContext;
    render() {
        return (
            <div className="ui container">
                <div>
                    Select a language:
                    {/* uses context, not props, since passed down from Context Provider */}
                    <i className="flag us" onClick={() => this.context.onLanguageChange('english')} />
                    <i className="flag nl" onClick={() => this.context.onLanguageChange('dutch')} />
                </div>

            </div>
        )
    }
}

export default LanguageSelector;