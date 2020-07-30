import React from 'react';

import { Paper, Box, Typography } from '@material-ui/core';
// NOTE to Self: <Typography> is an overideable component!
const Footer = () => {
    return (

        <Paper>
            <Box component="div" id="footer" m={5}> </Box>

            <Typography id="title" variant="p" component="p" gutterBottom> &copy; 2020 David Palagashvili </Typography>
        </Paper>

    );
};

export default Footer;