import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import Divider from '../Divider';

describe('Divider Component', () => {
	it('should render without issues', () => {
		const component = shallow(<Divider />);

		expect(component.length).toBe(1);
		expect(toJson(component)).toMatchSnapshot();
	});

	it('should render with color', () => {
		const component = shallow(<Divider color="#f9f9" />);

		expect(component.length).toBe(1);
		expect(toJson(component)).toMatchSnapshot();
	});

	it('should render with text', () => {
		const component = shallow(<Divider text="Description" />);

		expect(component.length).toBe(1);
		expect(toJson(component)).toMatchSnapshot();
	});

	it('should render with icon and text', () => {
		const component = shallow(<Divider text="Users" icon={{ name: 'user' }} />);

		expect(component.length).toBe(1);
		expect(toJson(component)).toMatchSnapshot();
	});

	it('should render with style', () => {
		const component = shallow(
			<Divider text="Users" style={{ backgroundColor: 'red' }} />
		);

		expect(component.length).toBe(1);
		expect(toJson(component)).toMatchSnapshot();
	});
});
