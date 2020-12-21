import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import Icon from '../Icon';

describe('Icon Component', () => {
	it('should render without issues', () => {
		const component = shallow(<Icon />);

		expect(component.length).toBe(1);
		expect(toJson(component)).toMatchSnapshot();
	});

	it('should render with name', () => {
		const component = shallow(<Icon name="add-circle" />);

		expect(component.length).toBe(1);
		expect(toJson(component)).toMatchSnapshot();
	});

	it('should render with name, type', () => {
		const component = shallow(<Icon name="info" type="AntDesign" />);

		expect(component.length).toBe(1);
		expect(toJson(component)).toMatchSnapshot();
	});

	it('should render with name, type, color', () => {
		const component = shallow(
			<Icon name="500px" type="Entypo" color="#181896" />
		);

		expect(component.length).toBe(1);
		expect(toJson(component)).toMatchSnapshot();
	});

	it('should render with name, type, color, size', () => {
		const component = shallow(
			<Icon name="archive" type="EvilIcons" color="#181896" size={50} />
		);

		expect(component.length).toBe(1);
		expect(toJson(component)).toMatchSnapshot();
	});

	it('should render with name, type, color, size, style', () => {
		const component = shallow(
			<Icon
				name="activity"
				type="Feather"
				color="#181896"
				size={50}
				style={{ position: 'absolute', top: 5, left: 5 }}
			/>
		);

		expect(component.length).toBe(1);
		expect(toJson(component)).toMatchSnapshot();
	});

	it('should render with name, type, color, size, style', () => {
		const component = shallow(
			<Icon
				name="glass"
				type="FontAwesome"
				color="#181896"
				size={50}
				style={{ position: 'absolute', top: 5, left: 5 }}
			/>
		);

		expect(component.length).toBe(1);
		expect(toJson(component)).toMatchSnapshot();
	});

	it('should render with name, type, color, size, style', () => {
		const component = shallow(
			<Icon
				name="ad"
				type="FontAwesome5"
				color="#181896"
				size={50}
				style={{ position: 'absolute', top: 5, left: 5 }}
			/>
		);

		expect(component.length).toBe(1);
		expect(toJson(component)).toMatchSnapshot();
	});

	it('should render with name, type, color, size, style', () => {
		const component = shallow(
			<Icon
				name="aws"
				type="Fontisto"
				color="#181896"
				size={50}
				style={{ position: 'absolute', top: 5, left: 5 }}
			/>
		);

		expect(component.length).toBe(1);
		expect(toJson(component)).toMatchSnapshot();
	});

	it('should render with name, type, color, size, style', () => {
		const component = shallow(
			<Icon
				name="alert"
				type="Foundation"
				color="#181896"
				size={50}
				style={{ position: 'absolute', top: 5, left: 5 }}
			/>
		);

		expect(component.length).toBe(1);
		expect(toJson(component)).toMatchSnapshot();
	});

	it('should render with name, type, color, size, style', () => {
		const component = shallow(
			<Icon
				name="add"
				type="Ionicons"
				color="#181896"
				size={50}
				style={{ position: 'absolute', top: 5, left: 5 }}
			/>
		);

		expect(component.length).toBe(1);
		expect(toJson(component)).toMatchSnapshot();
	});

	it('should render with name, type, color, size, style', () => {
		const component = shallow(
			<Icon
				name="add"
				type="Ionicons"
				color="#181896"
				size={50}
				style={{ position: 'absolute', top: 5, left: 5 }}
			/>
		);

		expect(component.length).toBe(1);
		expect(toJson(component)).toMatchSnapshot();
	});

	it('should render with name, type, color, size, style', () => {
		const component = shallow(
			<Icon
				name="alert"
				type="MaterialCommunityIcons"
				color="#181896"
				size={50}
				style={{ position: 'absolute', top: 5, left: 5 }}
			/>
		);

		expect(component.length).toBe(1);
		expect(toJson(component)).toMatchSnapshot();
	});

	it('should render with name, type, color, size, style', () => {
		const component = shallow(
			<Icon
				name="360"
				type="MaterialIcons"
				color="#181896"
				size={50}
				style={{ position: 'absolute', top: 5, left: 5 }}
			/>
		);

		expect(component.length).toBe(1);
		expect(toJson(component)).toMatchSnapshot();
	});

	it('should render with name, type, color, size, style', () => {
		const component = shallow(
			<Icon
				name="alert"
				type="Octicons"
				color="#181896"
				size={50}
				style={{ position: 'absolute', top: 5, left: 5 }}
			/>
		);

		expect(component.length).toBe(1);
		expect(toJson(component)).toMatchSnapshot();
	});

	it('should render with name, type, color, size, style', () => {
		const component = shallow(
			<Icon
				name="user"
				type="SimpleLineIcons"
				color="#181896"
				size={50}
				style={{ position: 'absolute', top: 5, left: 5 }}
			/>
		);

		expect(component.length).toBe(1);
		expect(toJson(component)).toMatchSnapshot();
	});

	it('should render with name, type, color, size, style', () => {
		const component = shallow(
			<Icon
				name="acrobat"
				type="Zocial"
				color="#181896"
				size={50}
				style={{ position: 'absolute', top: 5, left: 5 }}
			/>
		);

		expect(component.length).toBe(1);
		expect(toJson(component)).toMatchSnapshot();
	});
});
