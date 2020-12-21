import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import LabeledButton from '../LabeledButton';

describe('Labeled Button Component', () => {
	it('should render without issues', () => {
		const component = shallow(<LabeledButton />);

		expect(component.length).toBe(1);
		expect(toJson(component)).toMatchSnapshot();
	});

	it('should render with title prop', () => {
		const component = shallow(<LabeledButton title="Save" />);

		expect(component.length).toBe(1);
		expect(toJson(component)).toMatchSnapshot();
	});

	it('should render with title and circular props', () => {
		const component = shallow(<LabeledButton title="Save" circular />);

		expect(component.length).toBe(1);
		expect(toJson(component)).toMatchSnapshot();
	});

	it('should render with title, circular and disabled props', () => {
		const component = shallow(<LabeledButton title="Save" circular disabled />);

		expect(component.length).toBe(1);
		expect(toJson(component)).toMatchSnapshot();
	});

	it('should render with title, circular, disabled and fluid props', () => {
		const component = shallow(
			<LabeledButton title="Save" circular disabled fluid />
		);

		expect(component.length).toBe(1);
		expect(toJson(component)).toMatchSnapshot();
	});

	it('should render with title, circular, disabled, fluid and outline props', () => {
		const component = shallow(
			<LabeledButton title="Save" circular disabled fluid outline />
		);

		expect(component.length).toBe(1);
		expect(toJson(component)).toMatchSnapshot();
	});

	it('should render with title, circular, disabled, fluid, outline style props', () => {
		const component = shallow(
			<LabeledButton
				title="Save"
				circular
				disabled
				fluid
				outline
				style={{
					height: 50
				}}
			/>
		);

		expect(component.length).toBe(1);
		expect(toJson(component)).toMatchSnapshot();
	});

	it('should render with title, circular, disabled, fluid, outline and style props', () => {
		const component = shallow(
			<LabeledButton
				title="Save"
				circular
				disabled
				fluid
				outline
				style={{
					height: 50
				}}
			/>
		);

		expect(component.length).toBe(1);
		expect(toJson(component)).toMatchSnapshot();
	});

	it('should render with title, circular, disabled, fluid, outline, style and color props', () => {
		const component = shallow(
			<LabeledButton
				title="Save"
				circular
				disabled
				fluid
				outline
				style={{
					height: 50
				}}
				color="red"
			/>
		);

		expect(component.length).toBe(1);
		expect(toJson(component)).toMatchSnapshot();
	});

	it('should render with title, circular, disabled, fluid, outline, style and color props', () => {
		const component = shallow(
			<LabeledButton
				title="Save"
				circular
				disabled
				fluid
				outline
				style={{
					height: 50
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
			<LabeledButton
				title="Save"
				circular
				disabled
				fluid
				outline
				style={{
					height: 50
				}}
				color="red"
				iconName="user"
			/>
		);

		expect(component.length).toBe(1);
		expect(toJson(component)).toMatchSnapshot();
	});

	it('should render with circular, disabled, fluid, outline, style, color, iconName and iconType props', () => {
		const component = shallow(
			<LabeledButton
				circular
				disabled
				fluid
				outline
				style={{
					height: 50
				}}
				color="red"
				iconName="user"
				iconType="Ionicons"
			/>
		);

		expect(component.length).toBe(1);
		expect(toJson(component)).toMatchSnapshot();
	});

	it('should render with circular, disabled, fluid, outline, style, color, iconName, iconType and pointing props', () => {
		const component = shallow(
			<LabeledButton
				circular
				disabled
				fluid
				outline
				style={{
					height: 50
				}}
				color="red"
				iconName="user"
				iconType="Ionicons"
				pointing
			/>
		);

		expect(component.length).toBe(1);
		expect(toJson(component)).toMatchSnapshot();
	});

	it('should render with circular, disabled, fluid, outline, style, color, iconName, iconType and pointing props', () => {
		const component = shallow(
			<LabeledButton
				loading
				circular
				disabled
				fluid
				outline
				style={{
					height: 50
				}}
				color="red"
				iconName="user"
				iconType="Ionicons"
				pointing
				label="Forks"
				labelIcon="fork"
				labelIconType="Ionicons"
				labelRight
			/>
		);

		expect(component.length).toBe(1);
		expect(toJson(component)).toMatchSnapshot();
	});

	it('should render with color, title, label, labelIcon and labelIconType props', () => {
		const component = shallow(
			<LabeledButton
				color="primary"
				title="1,048"
				label="Forks"
				labelIcon="fork"
				labelIconType="Ionicons"
			/>
		);

		expect(component.length).toBe(1);
		expect(toJson(component)).toMatchSnapshot();
	});
});
