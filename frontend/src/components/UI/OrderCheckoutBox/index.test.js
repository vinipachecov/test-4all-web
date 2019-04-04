import React from 'react';
import { mount } from 'enzyme';
import OrderCheckoutBox from './index';

describe('<OrderCheckoutBox />', () => {
  let props = {
    items: [{
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
    onAddItem: jest.fn(() => {
      props = {
        ...props,
        item: {
          ...props.item,
          quantity: props.item.quantity + 1,
        },
      };
    }),
    onRemoveItem: jest.fn(() => {
      props = {
        ...props,
        item: {
          ...props.item,
          quantity: props.item.quantity - 1,
        },
      };
    }),
  };
  const wrapper = mount(<OrderCheckoutBox {...props} />);
  it('Deve renderizar 2 itens de checkout ', () => {
    expect(wrapper.find('CheckoutItem').length).toEqual(2);
  });

  it('Deve renderizar o total ', () => {
    const total = 'R$25.00';
    expect(wrapper.find('div .OrderCheckoutTotal').children().at(1).text()).toEqual(total);
  });
});
