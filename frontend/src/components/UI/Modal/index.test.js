import React from 'react';
import { mount } from 'enzyme';
import Modal from './index';

describe('<Modal />', () => {
  it('Deve renderizar o filho do modal', () => {
    const wrapper = mount(<Modal>texto</Modal>);
    expect(wrapper.children().text()).toEqual('texto');
  });
});
