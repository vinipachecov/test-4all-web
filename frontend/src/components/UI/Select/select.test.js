import React from 'react';
import { mount } from 'enzyme';
import Select from './select';

describe('<Select />', () => {
  const onClick = jest.fn();
  const options = [
    {
      id: 0,
      name: 'test0',
    },
    {
      id: 1,
      name: 'test1',
    },
  ];

  it('Deve renderizar um select sem opções', () => {
    const wrapper = mount(<Select items={[]} onClick={onClick} />);
    expect(wrapper.find('option').exists()).toBe(false);
  });

  it('Deve renderizar tags options', () => {
    const wrapper = mount(<Select items={options} onClick={onClick} />);
    expect(wrapper.find('option').exists()).toBe(true);
    expect(wrapper.find('option').at(0).text()).toEqual(options[0].name);
  });

  it('Deve acionar o onClick ao ter um clique em uma opção', () => {
    const wrapper = mount(<Select items={options} onClick={onClick} />);
    wrapper.find('option').at(0).simulate('click');
    expect(onClick).toHaveBeenCalled();
  });
});
