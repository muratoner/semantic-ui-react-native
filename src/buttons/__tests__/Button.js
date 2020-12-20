import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import Button from '../Button';

describe('Button Component', () => {
  it('should render without issues', () => {
    const component = shallow(<Button />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with title prop', () => {
    const component = shallow(<Button title="Save" />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with title and circular props', () => {
    const component = shallow(<Button title="Save" circular />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with title, circular and disabled props', () => {
    const component = shallow(<Button title="Save" circular disabled />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with title, circular, disabled and fluid props', () => {
    const component = shallow(<Button title="Save" circular disabled fluid />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with title, circular, disabled, fluid and outline props', () => {
    const component = shallow(
      <Button title="Save" circular disabled fluid outline />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with title, circular, disabled, fluid, outline style props', () => {
    const component = shallow(
      <Button
        title="Save"
        circular
        disabled
        fluid
        outline
        style={{
          height: 50,
        }}
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with title, circular, disabled, fluid, outline and style props', () => {
    const component = shallow(
      <Button
        title="Save"
        circular
        disabled
        fluid
        outline
        style={{
          height: 50,
        }}
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with title, circular, disabled, fluid, outline, style and color props', () => {
    const component = shallow(
      <Button
        title="Save"
        circular
        disabled
        fluid
        outline
        style={{
          height: 50,
        }}
        color="red"
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with title, circular, disabled, fluid, outline, style and color props', () => {
    const component = shallow(
      <Button
        title="Save"
        circular
        disabled
        fluid
        outline
        style={{
          height: 50,
        }}
        color="red"
        iconName="user"
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with title, circular, disabled, fluid, outline, style, color and iconName props', () => {
    const component = shallow(
      <Button
        title="Save"
        circular
        disabled
        fluid
        outline
        style={{
          height: 50,
        }}
        color="red"
        iconName="user"
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with title, circular, disabled, fluid, outline, style, color, iconName and iconType props', () => {
    const component = shallow(
      <Button
        title="Save"
        circular
        disabled
        fluid
        outline
        style={{
          height: 50,
        }}
        color="red"
        iconName="user"
        iconType="Ionicons"
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  //   it('should be call onPress events', () => {
  //     const onPress = jest.fn();
  //     console.log = jest.fn();
  //     const wrapper = shallow(<Button theme={theme} />);

  //     // Call default onPress
  //     wrapper.find('ForwardRef').props().onPress();

  //     expect(console.log.mock.calls[0][0]).toBe(
  //       'Please attach a method to this component'
  //     );

  //     wrapper.setProps({ onPress });

  //     // Call our custom onPress
  //     wrapper.find('ForwardRef').props().onPress();

  //     expect(onPress).toHaveBeenCalled();
  //   });

  //   it('should not be call onPress events when loading is true', () => {
  //     const onPress = jest.fn();
  //     const wrapper = shallow(<Button theme={theme} loading onPress={onPress} />);

  //     // Simulate press action
  //     wrapper.simulate('press');

  //     expect(onPress).not.toHaveBeenCalled();
  //   });

  //   it('should have ripple on android version 21 and higher', () => {
  //     Platform.OS = 'android';
  //     Platform.Version = 25;

  //     const wrapper = shallow(<Button theme={theme} />);
  //     expect(wrapper.length).toBe(1);
  //     jest.resetModules();
  //   });

  //   it('should have normal ripple on android version 20 and lower', () => {
  //     Platform.OS = 'android';
  //     Platform.Version = 20;

  //     const wrapper = shallow(<Button theme={theme} />);
  //     expect(wrapper.length).toBe(1);
  //     jest.resetModules();
  //   });

  //   it('should warn the user when using linearGradient without it installed', () => {
  //     console.error = jest.fn();
  //     shallow(
  //       <Button
  //         theme={theme}
  //         linearGradientProps={{ colors: ['#4c669f', '#3b5998', '#192f6a'] }}
  //       />
  //     );

  //     expect(console.error.mock.calls[0][0]).toBe(
  //       "You need to pass a ViewComponent to use linearGradientProps !\nExample: ViewComponent={require('react-native-linear-gradient')}"
  //     );
  //   });

  //   describe('Button Types', () => {
  //     describe('Solid', () => {
  //       it('should display solid button', () => {
  //         const component = shallow(<Button theme={theme} title="Solid" />);
  //         expect(component.length).toBe(1);
  //         expect(toJson(component)).toMatchSnapshot();
  //       });

  //       it('should display raised solid button', () => {
  //         const component = shallow(
  //           <Button theme={theme} title="Solid" raised />
  //         );
  //         expect(component.length).toBe(1);
  //         expect(toJson(component)).toMatchSnapshot();
  //       });

  //       it('should display solid button disabled', () => {
  //         const component = shallow(
  //           <Button theme={theme} title="Solid" disabled />
  //         );
  //         expect(component.length).toBe(1);
  //         expect(toJson(component)).toMatchSnapshot();
  //       });
  //     });

  //     describe('Outline', () => {
  //       it('should display outline button', () => {
  //         const component = shallow(
  //           <Button theme={theme} title="Outline" type="outline" />
  //         );
  //         expect(component.length).toBe(1);
  //         expect(toJson(component)).toMatchSnapshot();
  //       });

  //       it('should display raised outline button', () => {
  //         const component = shallow(
  //           <Button theme={theme} title="Outline" type="outline" raised />
  //         );
  //         expect(component.length).toBe(1);
  //         expect(toJson(component)).toMatchSnapshot();
  //       });

  //       it('should display outline button disabled', () => {
  //         const component = shallow(
  //           <Button theme={theme} title="Outline" type="outline" disabled />
  //         );
  //         expect(component.length).toBe(1);
  //         expect(toJson(component)).toMatchSnapshot();
  //       });
  //     });

  //     describe('Clear', () => {
  //       it('should display clear button', () => {
  //         const component = shallow(
  //           <Button theme={theme} title="Clear" type="clear" />
  //         );
  //         expect(component.length).toBe(1);
  //         expect(toJson(component)).toMatchSnapshot();
  //       });

  //       it('should display raised clear button', () => {
  //         const component = shallow(
  //           <Button theme={theme} title="Clear" type="clear" raised />
  //         );
  //         expect(component.length).toBe(1);
  //         expect(toJson(component)).toMatchSnapshot();
  //       });

  //       it('should display clear button disabled', () => {
  //         const component = shallow(
  //           <Button theme={theme} title="Clear" type="clear" disabled />
  //         );
  //         expect(component.length).toBe(1);
  //         expect(toJson(component)).toMatchSnapshot();
  //       });
  //     });
  //   });
});
