import React from 'react';

import { shallow, mount } from 'enzyme';

import TodoList from '../components/todo/list.js';
const testFunction = jest.fn();

describe('now testing the List component', () => {
    it('should render the TodoList when the app starts', () => {

        let testList = [
            { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A' },
            { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A' },
        ];

        let app = shallow(<TodoList list={testList} handleComplete={testFunction} />);

        expect(app.find('.complete-false').exists()).toBe(true);
    });
});