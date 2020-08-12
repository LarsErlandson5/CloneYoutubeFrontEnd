import React from 'react';
import { Paper, TextField } from '@material-ui/core';

class SearchBar extends React.Component {
    
        state = {
            searchTerm: "",
        }
        handleChange = (event) => {
            console.log(event.target.value);
            this.setState({ searchTerm: event.taget.value });
        }
        handleSubmit = (event) => {
            const { searchTerm } = this.state;
            const { onFormSubmit } = this.props;
            onFormSubmit(searchTerm);
            console.log(searchTerm)

            // event.target.preventDefault();
        }

        render() {
            return (
                <Paper elevation={5} style={{ padding: '25px' }}>
                    <form onSubmit={this.handleSubmit}>
                        <TextField fullWidth label="Search-->" onChange={this.handleChange}></TextField>
                    </form>
                </Paper>
            );
        }

    
}
export default SearchBar;