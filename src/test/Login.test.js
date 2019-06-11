import React from 'react';
import { shallow, configure } from 'enzyme';
import Login from '../Components/Login';
import Adapter from 'enzyme-adapter-react-16';
//import configureMockStore from 'redux-mock-store';

configure({adapter:new Adapter()});

describe('When Controlled  component is given', () => {
    let wrapper;
    beforeEach(() => {
       wrapper = shallow(<Login/>);
    });
    
    it('should render', () => {
        expect(wrapper).toHaveLength(1);
    });  

    it('should render user field', () => {
        expect(wrapper.find('#nameName')).toHaveLength(1);
    });

    it('should render password field', () => {
        expect(wrapper.find('#password')).toHaveLength(1);
    });

    it('should render button field', () => {
        expect(wrapper.find('#button')).toHaveLength(1);
    });

})

