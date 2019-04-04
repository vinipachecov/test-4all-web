import React from 'react';
import { mount } from 'enzyme';
import ProductListBox from './index';

describe('<ProductListBox />', () => {
  const props = {
    data: [{
      id: 0,
      idCategory: 0,
      name: 'test',
      description: '',
      price: 2.50,
      image: 'https://',
      quantity: 5,
    },
    {
      id: 1,
      idCategory: 0,
      name: 'test',
      description: '',
      price: 2.50,
      image: 'https://',
      quantity: 5,
    },
    ],
    onClickItem: jest.fn(),
  };
  const wrapper = mount(<ProductListBox {...props} />);


  it('Deve renderizar 2 product itens', () => {
    expect(wrapper.find('BoxItemButton').length).toEqual(2);
  });

  it('Deve renderizar vazio', () => {
    const emptyWrapper = mount(<ProductListBox onClickItem={props.onClickItem} data={[]} />);
    expect(emptyWrapper.find('div').text()).toEqual('Oops, categoria sem produtos!');
  });
});
