import React, { useState } from 'react';

import { Paper, TextField } from '@material-ui/core';

const SearchBar = ({ onFormSubmit }) => {
    const [ searchTerm, setSearchTerm ] = useState('');
    
    const handleChange = (event) => setSearchTerm(event.target.value);

    const onKeyPress = (event) => { 
        if(event.key === "Enter") {
            onFormSubmit(searchTerm);
        }
    }

    return (
        <Paper elevation={6} style={{ padding: '2rem', marginBottom: '-2rem' }}>
            <TextField 
                fullWidth 
                label="Search..." 
                onChange={handleChange}
                onKeyPress={onKeyPress}
                    />
        </Paper>
    )
}

// when the text is inputted, the search term is now the value of what is typed in the search bar
// When the form is submittedm the search term updates the search term on the page through This.props and this.state.
// When the form is submitted, run that function with the search term

export default SearchBar;