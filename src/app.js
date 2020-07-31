import React from 'react';

import Header from './components/layout/header.js';
import Categories from './components/layout/categories.js';
import Products from './components/layout/product.js';
import Footer from './components/layout/footer.js';

import { Provider } from 'react-redux';

import store from './components/store/store.js';
// TODO: finally connect store.js (by now exported) and set as the provider to be able pass down state through props.
const App = () => {
    return (
        <>
            {/* <Provider store={store}> */}
                <Header />
                <Categories />
                <Products />
            {/* </Provider> */}
            <Footer />
        </>
    );
};

export default App;