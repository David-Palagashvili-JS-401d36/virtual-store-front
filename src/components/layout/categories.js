import React from 'react';

import { connect } from 'react-redux';

import { List, ListItem, Button, Typography, Paper } from '@material-ui/core';

import { changeCategory } from '../store/categories.js';
// TODO: try making the list item active and pass hard code in to get proof of life. then drip feed props through it to see if I'm drilling to the state through props!
const Categories = (props) => {

    return (
        <Paper variant="outlined">
            <Typography variant="h4" component="h4"> Choose a Category </Typography>
            <List>
                {/* {props.categories.categories.map((category, idx) => (
                    <ListItem key={idx} onClick={() => props.changeCategory(category)}><Button variant="outlined">{category.displayName}</Button></ListItem>
                ))} */}
            </List>
            <Typography variant="h4" component="h4"> Category Selected: {props.categories.activeCategory.displayName} </Typography>
        </Paper>
    );
};

// This function expression makes sure the global state is included in the normal property values.
// const mapStateToProps = state => {
//     return {
//         categories: state.categories,
//         activeCategory: state.categories.activeCategory,
//     };
// };

// const mapDispatchToProps = { changeCategory };

export default Categories;