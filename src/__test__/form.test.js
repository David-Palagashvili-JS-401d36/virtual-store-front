import React from 'react';

import { shallow, mount } from 'enzyme';

import ToDoForm from '../components/todo/form.js';

const testFunction = jest.fn();

describe('now testing the form component', () => {
    it('should render the form when the app starts', () => {
        
        let reactApp = shallow(<ToDoForm handleSubmit={testFunction} />);
    
        expect(reactApp.find('form').exists()).toBe(true);
        expect(reactApp.find('input').exists()).toBe(true);
    });
});