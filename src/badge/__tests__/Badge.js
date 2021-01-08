import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import Badge from '../Badge';

describe('Badge Component', () => {
	it('should render without issues', () => {
		const component = shallow(<Badge />);
		expect(toJson(component)).toMatchSnapshot();
	});
});
