import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { Text, View } from 'react-native';
import Title from '../Title';

describe('Title Component', () => {
	it('should render without issues', () => {
		const component = shallow(<Title>Title Test 1</Title>);

		expect(component.length).toBe(1);
		expect(toJson(component)).toMatchSnapshot();
	});

	it('should render with children', () => {
		const component = shallow(
			<Title>
				<View>
					<Text>Title Test 2</Text>
				</View>
			</Title>
		);

		expect(component.length).toBe(1);
		expect(toJson(component)).toMatchSnapshot();
	});

	it('should render with style', () => {
		const component = shallow(
			<Title style={{ color: '#191919' }}>Title Test 1</Title>
		);

		var style = component
			.get(0)
			.props.style.reduce((acc, cur) => Object.assign(acc, cur));

		expect(style).toHaveProperty('color', '#191919');

		expect(style).toHaveProperty('fontSize', 18);

		expect(component.length).toBe(1);
		expect(toJson(component)).toMatchSnapshot();
	});

	it('should render with size huge', () => {
		const component = shallow(<Title size="huge">Title Test 1</Title>);

		expect(
			component.get(0).props.style.reduce((acc, cur) => Object.assign(acc, cur))
		).toHaveProperty('fontSize', 28);

		expect(component.length).toBe(1);
		expect(toJson(component)).toMatchSnapshot();
	});

	it('should render with size large', () => {
		const component = shallow(<Title size="large">Title Test 1</Title>);

		expect(
			component.get(0).props.style.reduce((acc, cur) => Object.assign(acc, cur))
		).toHaveProperty('fontSize', 24);

		expect(component.length).toBe(1);
		expect(toJson(component)).toMatchSnapshot();
	});

	it('should render with size medium', () => {
		const component = shallow(<Title size="medium">Title Test 1</Title>);

		expect(
			component.get(0).props.style.reduce((acc, cur) => Object.assign(acc, cur))
		).toHaveProperty('fontSize', 18);

		expect(component.length).toBe(1);
		expect(toJson(component)).toMatchSnapshot();
	});

	it('should render with size small', () => {
		const component = shallow(<Title size="small">Title Test 1</Title>);

		expect(
			component.get(0).props.style.reduce((acc, cur) => Object.assign(acc, cur))
		).toHaveProperty('fontSize', 15);

		expect(component.length).toBe(1);
		expect(toJson(component)).toMatchSnapshot();
	});

	it('should render with size tiny', () => {
		const component = shallow(<Title size="tiny">Title Test 1</Title>);

		expect(
			component.get(0).props.style.reduce((acc, cur) => Object.assign(acc, cur))
		).toHaveProperty('fontSize', 14);

		expect(component.length).toBe(1);
		expect(toJson(component)).toMatchSnapshot();
	});
});
