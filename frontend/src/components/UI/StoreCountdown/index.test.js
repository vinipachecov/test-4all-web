import React from 'react';
import { mount } from 'enzyme';
import StoreCountdown from './index';

describe('<StoreCountdown />', () => {
  const props = {
    finishOrder: jest.fn(),
  };
  it('Testa estado após inicializar', () => {
    const wrapper = mount(<StoreCountdown {...props} />);
    expect(wrapper.state()).toEqual({
      countdown: 600,
      timer: 2,
    });
  });
});
