import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import Header from './index';

describe('<Header />', () => {
  it('Deve renderizar com o ícone do carrinho com a quantidade correta ', () => {
    const wrapper = mount(<BrowserRouter><Header cartIcon quantity={2} /></BrowserRouter>);
    expect(wrapper.find('Link').length).toEqual(2);
    const CartIcon = wrapper.find('CartIcon');
    expect(CartIcon.exists()).toBe(true);
  });

  it('Deve renderizar o logo', () => {
    const wrapper = mount(<BrowserRouter><Header cartIcon quantity={2} /></BrowserRouter>);
    expect(wrapper.find('div').at(2).text()).toEqual('Logo');
  });
});
