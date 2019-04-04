import React from 'react';
import { mount } from 'enzyme';
import BoxItemButton from './index';

describe('<BoxItemButton />', () => {
  const props = {
    product: {
      id: 0,
      name: 'name',
      idCategory: 0,
      description: '',
      price: 250,
      image: 'https:',
    },
    onClick: jest.fn(),
  };
  const wrapper = mount(<BoxItemButton {...props} />);
  it('Deve acionar a função ao clicar', () => {
    const button = wrapper.find('button');
    button.simulate('click');
    expect(props.onClick).toHaveBeenCalled();
  });
});
