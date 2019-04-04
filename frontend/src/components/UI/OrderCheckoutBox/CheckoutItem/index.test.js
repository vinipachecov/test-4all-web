import React from 'react';
import { mount } from 'enzyme';
import CheckoutItem from './index';

describe('<CheckoutItem />', () => {
  let props = {
    item: {
      id: 0,
      idCategory: 0,
      name: 'test',
      description: '',
      price: 2.50,
      image: 'https://',
      quantity: 5,
    },
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
  const wrapper = mount(<CheckoutItem {...props} />);
  it('Deve renderizar a quantidade no item de checkout', () => {
    expect(wrapper.find('div').at(1).text()).toEqual(props.item.quantity.toString());
  });

  it('Deve renderizar o nome do item', () => {
    expect(wrapper.find('div').at(2).text()).toEqual(props.item.name);
  });

  it('Deve renderizar o preço do item', () => {
    expect(wrapper.find('div').at(3).text()).toEqual(props.item.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }));
  });

  it('Deve acionar o onRemoveItem de quantidade do item ao clicar', () => {
    const button = wrapper.find('button').at(0);
    button.simulate('click');
    expect(props.onRemoveItem).toHaveBeenCalled();
    expect(props.item.quantity).toEqual(4);
  });

  it('Deve acionar o onAddItem de quantidade do item ao clicar', () => {
    const button = wrapper.find('button').at(1);
    button.simulate('click');
    expect(props.onAddItem).toHaveBeenCalled();
    expect(props.item.quantity).toEqual(5);
  });
});
