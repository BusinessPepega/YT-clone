import React from 'react';
import { Paper, TextField } from '@mui/material';

class SearchBar extends React.Component {

    state = {
        searchTerm: '',
    }

    handleChange = (e) => this.setState({searchTerm: e.target.value})
    
    handleSubmit = (e) => {
        const { searchTerm } = this.state
        const {onFormSubmit} = this.props

        onFormSubmit(searchTerm)

        e.preventDefault()
    }

    render(){
        return(
            <Paper elevation={6}>
                <form onSubmit={this.handleSubmit}>
                    <TextField fullWidth label="Search..." onChange={this.handleChange}></TextField>
                </form>
            </Paper>
        )
    }
}

export default SearchBar;