import React from 'react';
import { mount } from 'enzyme';
import CartIcon from './index';

describe('<CartIcon />', () => {
  const wrapper = mount(<CartIcon />);

  it('Deve renderizar com 0 em quantidade', () => {
    expect(wrapper.props().quantity).toEqual(0);
  });

  it('Deve renderizar com 5 em quantidade', () => {
    const wrapperplus = mount(<CartIcon quantity={5} />);
    expect(wrapperplus.props().quantity).toEqual(5);
  });

  it('Verifica a presença do ícone', () => {
    expect(wrapper.find('i').exists()).toBe(true);
  });
});
