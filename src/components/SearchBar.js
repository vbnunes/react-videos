import React from 'react'
import '../css/SearchBar.css'

class SearchBar extends React.Component{
    state = {term: ''}
    
    onInputChange = e => {
        this.setState({term: e.target.value})
    };

    onFormSubmit = e => {
        e.preventDefault();

        this.props.onFormSubmit(this.state.term)
        //TODO: Make sure we call
        //callback from parent component
    };
    render(){
        return( 
            <div className="ui segment search-bar">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label className="custom-label">Video Search</label>
                        <input 
                            type="text" 
                            placeholder="Search text" 
                            value={this.state.term} 
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;