import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import Checkbox from '../Checkbox';

describe('Checkbox Component', () => {
	it('should render without issues', () => {
		const component = shallow(<Checkbox />);
		expect(component).toHaveLength(1);

		expect(toJson(component)).toMatchSnapshot();
	});

	it('should render slider', () => {
		const component = shallow(<Checkbox type="slider" />);
		expect(component).toHaveLength(1);

		expect(toJson(component)).toMatchSnapshot();
	});

	it('should render circle', () => {
		const component = shallow(<Checkbox type="circle" />);
		expect(component).toHaveLength(1);

		expect(toJson(component)).toMatchSnapshot();
	});

	it('should render circle-overflow', () => {
		const component = shallow(<Checkbox type="circle-overflow" />);
		expect(component).toHaveLength(1);

		expect(toJson(component)).toMatchSnapshot();
	});

	it('should render flag', () => {
		const component = shallow(<Checkbox type="flag" />);
		expect(component).toHaveLength(1);

		expect(toJson(component)).toMatchSnapshot();
	});

	it('should render heart', () => {
		const component = shallow(<Checkbox type="heart" />);
		expect(component).toHaveLength(1);

		expect(toJson(component)).toMatchSnapshot();
	});

	it('should render lock', () => {
		const component = shallow(<Checkbox type="lock" />);
		expect(component).toHaveLength(1);

		expect(toJson(component)).toMatchSnapshot();
	});

	it('should render notification', () => {
		const component = shallow(<Checkbox type="notification" />);
		expect(component).toHaveLength(1);

		expect(toJson(component)).toMatchSnapshot();
	});

	it('should render radio', () => {
		const component = shallow(<Checkbox type="radio" />);
		expect(component).toHaveLength(1);

		expect(toJson(component)).toMatchSnapshot();
	});

	it('should render square', () => {
		const component = shallow(<Checkbox type="square" />);
		expect(component).toHaveLength(1);

		expect(toJson(component)).toMatchSnapshot();
	});

	it('should render square-overflow', () => {
		const component = shallow(<Checkbox type="square-overflow" />);
		expect(component).toHaveLength(1);

		expect(toJson(component)).toMatchSnapshot();
	});

	it('should render toggle', () => {
		const component = shallow(<Checkbox type="toggle" />);
		expect(component).toHaveLength(1);

		expect(toJson(component)).toMatchSnapshot();
	});

	it('should render volume', () => {
		const component = shallow(<Checkbox type="volume" />);
		expect(component).toHaveLength(1);

		expect(toJson(component)).toMatchSnapshot();
	});

	it('should render volume', () => {
		const component = shallow(<Checkbox type="volume" />);
		expect(component).toHaveLength(1);

		expect(toJson(component)).toMatchSnapshot();
	});

	it('should render title', () => {
		const component = shallow(<Checkbox type="volume" title="Volume toggle" />);
		expect(component).toHaveLength(1);

		expect(toJson(component)).toMatchSnapshot();
	});
});
