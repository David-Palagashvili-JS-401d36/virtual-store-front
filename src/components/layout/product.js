import React from 'react';

import { connect } from 'react-redux';

import { List, ListItem, Card, Typography, Paper } from '@material-ui/core';

const If = props => {
    return props.condition ? props.children : null;
};
// Line 18, source of solution: 
const Products = (props) => {

    return (
        <Paper variant="rounded">
            <Typography id="product-name" variant="h4" component="h4">Products</Typography>
            <List>
                {props.products.products.map((product, idx) => (
                    // eslint-disable-next-line react/jsx-key
                    <If condition={product.category === props.categories.activeCategory.normalizedName}>
                        <Card variant="rounded">
                            <ListItem key={idx + '1'} > Product: {product.name} </ListItem>
                            <ListItem key={idx + '2'} > Description: {product.description} </ListItem>
                            <ListItem key={idx + '3'} > Price: {product.price} </ListItem>
                        </Card>
                    </If>
                ))}
            </List>
        </Paper>
    );
};

// This function expression makes sure the global state is included in the normal property values.
const mapStateToProps = state => {

    return {
        categories: state.categories,
        products: state.products,
    };
};

export default connect(mapStateToProps)(Products);