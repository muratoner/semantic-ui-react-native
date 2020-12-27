import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import ProgressBar from '../ProgressBar';

describe('ProgressBar Component', () => {
	it('should render without issues', () => {
		const component = shallow(<ProgressBar />);

		expect(component.length).toBe(1);
		expect(toJson(component)).toMatchSnapshot();
	});

	it('should render with 0 progress', () => {
		const component = shallow(<ProgressBar progress={0} />);

		expect(component.length).toBe(1);
		expect(toJson(component)).toMatchSnapshot();
	});

	it('should render with 90 progress', () => {
		const component = shallow(<ProgressBar progress={60} />);

		expect(component.length).toBe(1);
		expect(toJson(component)).toMatchSnapshot();
	});

	it('should render with 100 progress', () => {
		const component = shallow(<ProgressBar progress={100} />);

		expect(component.length).toBe(1);
		expect(toJson(component)).toMatchSnapshot();
	});

	it('should render with 100 progress and custom style', () => {
		const component = shallow(
			<ProgressBar style={{ backgroundColor: '#f90809' }} progress={100} />
		);

		expect(component.length).toBe(1);
		expect(toJson(component)).toMatchSnapshot();
	});
});
