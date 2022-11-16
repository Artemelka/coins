import React from 'react';
import { shallow } from 'enzyme';
import { LazyImage } from '@/components';
import { noop } from '@/utils';
import { ImageBox } from './image-box';

function getComponent(props = {}) {
  return (
    <ImageBox
      id={12}
      imageUri={'testUrl'}
      onClick={noop}
      title={'testTitle'}
      {...props}
    />
  );
}

describe('ImageBox', () => {
  describe('render', () => {
    test('default', () => {
      const component = shallow(getComponent());

      expect(component).toMatchSnapshot();
    });

    test('with all props', () => {
      const component = shallow(getComponent({ onImageLoad: noop, hideSkeleton: true }));

      expect(component).toMatchSnapshot();
    });
  });

  test('onClick should be call with id props', () => {
    const testOnClick = jest.fn();
    const id = 15;
    const testEvent = { preventDefault: noop };
    const component = shallow(getComponent({ id, onClick: testOnClick }));

    component.simulate('click', testEvent);

    expect(testOnClick).toBeCalledWith({ id, event: testEvent })
  });

  test('title should contains title prop', () => {
    const title = 'test';
    const component = shallow(getComponent({ title }));

    expect(component.find('.title').text()).toBe(title);
  });

  test('ImageBox should be button', () => {
    const component = shallow(getComponent());

    expect(component.find('.root').type()).toBe('button')
  });

  test('LazyImage props remoteControl=false if component don`t have onImageLoad', () => {
    const component = shallow(getComponent());

    expect(component.find(LazyImage).props().remoteControl).toBe(false);
  });

  test('LazyImage props remoteControl=true if component have onImageLoad', () => {
    const component = shallow(getComponent({ onImageLoad: noop }));

    expect(component.find(LazyImage).props().remoteControl).toBe(true);
  });

  test('LazyImage props hideSkeleton should be equal hideSkeleton prop', () => {
    const component = shallow(getComponent({ hideSkeleton: true }));

    expect(component.find(LazyImage).props().hideSkeleton).toBe(true);
  });

});