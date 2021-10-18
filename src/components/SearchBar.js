import React from 'react';

class SearchBar extends React.Component {
    state = {term: ''};
    
    onFormSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.term);
        this.props.onSubmit(this.state.term);
    }
    render(){
        return( 
            <div className='ui segment'>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <div className='field'>
                        <label>image search</label>
                        <input type='text' value={this.state.term} onChange={(event) => {this.setState({term: event.target.value.toUpperCase()})}}/>
                    </div>
                </form>
            </div>);
    }
}

export default SearchBar;