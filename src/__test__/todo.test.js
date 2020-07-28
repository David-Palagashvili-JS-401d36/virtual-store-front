import React from 'react';

import { shallow, mount } from 'enzyme';

import ToDo from '../components/todo/todo.js';

describe('testing ToDo component', () => {
    it('should render the ToDo elements upon the start of the app', () => {
        
        let app = shallow(<ToDo />);

        expect(app.find('.todo').exists()).toBe(true);
        expect(app.find('.count-message').exists()).toBe(true);
    });
});