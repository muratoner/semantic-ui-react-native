import { shallow } from 'enzyme';
import React from 'react';
import Avatar from '../Avatar';

describe('Avatar Component', () => {
	it('should render without issues', () => {
		const component = shallow(<Avatar />);

		let props = component.children().props();

		expect(component.find('Text')).toHaveLength(1);
		expect(props).toHaveProperty('numberOfLines', 1);
		expect(props).toHaveProperty('adjustsFontSizeToFit', true);
		expect(props).toHaveProperty('minimumFontScale', 0.01);
		expect(props).toHaveProperty('children', undefined);
	});

	it('should render with title', () => {
		const component = shallow(<Avatar title="Murat ÖNER" />);

		let props = component.children().props();

		expect(component.find('Text')).toHaveLength(1);
		expect(props).toHaveProperty('numberOfLines', 1);
		expect(props).toHaveProperty('adjustsFontSizeToFit', true);
		expect(props).toHaveProperty('minimumFontScale', 0.01);
		expect(props).toHaveProperty('children', ['M', 'Ö']);
	});

	it('should render with shortestTitle is false', () => {
		const component = shallow(
			<Avatar title="Murat ÖNER" shortestTitle={false} />
		);

		let props = component.children().props();

		expect(component.find('Text')).toHaveLength(1);
		expect(props).toHaveProperty('numberOfLines', 1);
		expect(props).toHaveProperty('adjustsFontSizeToFit', true);
		expect(props).toHaveProperty('minimumFontScale', 0.01);
		expect(props).toHaveProperty('children', 'Murat ÖNER');
	});

	it('should render with shortestTitle is false', () => {
		const component = shallow(
			<Avatar title="Murat ÖNER" shortestTitle={false} />
		);

		let props = component.children().props();

		expect(component.find('Text')).toHaveLength(1);
		expect(props).toHaveProperty('numberOfLines', 1);
		expect(props).toHaveProperty('adjustsFontSizeToFit', true);
		expect(props).toHaveProperty('minimumFontScale', 0.01);
		expect(props).toHaveProperty('children', 'Murat ÖNER');
	});

	it('should render with titleShowLimit is 2', () => {
		const component = shallow(
			<Avatar title="Murat Sancar Öner" titleShowLimit={2} />
		);

		let props = component.children().props();

		expect(component.find('Text')).toHaveLength(1);
		expect(props).toHaveProperty('numberOfLines', 1);
		expect(props).toHaveProperty('adjustsFontSizeToFit', true);
		expect(props).toHaveProperty('minimumFontScale', 0.01);
		expect(props).toHaveProperty('children', ['M', 'S']);
	});

	it('should render with avatar image', () => {
		const component = shallow(
			<Avatar
				title="Murat Sancar Öner"
				source={{
					uri: 'https://i.pravatar.cc/50'
				}}
				titleShowLimit={2}
			/>
		);

		let imageBackground = component.find('ImageBackground').shallow();
		let image = imageBackground.find('Image').shallow();
		let text = imageBackground.find('Text').shallow();

		image.simulate('loadEnd');

		var imageStyles = image.get(0).props;

		expect(imageBackground).toHaveLength(1);
		expect(image).toHaveLength(1);
		expect(text).toHaveLength(1);
		expect(imageStyles).toHaveProperty('width', 32);
		expect(imageStyles).toHaveProperty('height', 32);
		expect(image.get(0).props).toHaveProperty('resizeMode', 'cover');
		expect(text.get(0).props).toHaveProperty('children', ['M', 'S']);
	});

	it('should render with avatar image', () => {
		const component = shallow(
			<Avatar
				title="Murat Sancar Öner"
				source={{
					uri: 'https://i.pravatar.cc/50'
				}}
				titleShowLimit={2}
			/>
		);

		let imageBackground = component.find('ImageBackground').shallow();
		let image = imageBackground.find('Image').shallow();
		let text = imageBackground.find('Text').shallow();

		image.simulate('loadEnd');

		var imageStyles = image.get(0).props;

		expect(imageBackground).toHaveLength(1);
		expect(image).toHaveLength(1);
		expect(text).toHaveLength(1);
		expect(imageStyles).toHaveProperty('width', 32);
		expect(imageStyles).toHaveProperty('height', 32);
		expect(image.get(0).props).toHaveProperty('resizeMode', 'cover');
		expect(text.get(0).props).toHaveProperty('children', ['M', 'S']);
	});

	it('should render with icon', () => {
		const component = shallow(<Avatar icon="user" />);

		let props = component.children().props();

		expect(component.find('Icon')).toHaveLength(1);
		expect(props).toHaveProperty('numberOfLines', 1);
		expect(props).toHaveProperty('adjustsFontSizeToFit', true);
		expect(props).toHaveProperty('minimumFontScale', 0.01);
	});

	it('should render with randomColor is false', () => {
		const component = shallow(
			<Avatar title={'Murat ÖNER'} withRandomColor={false} />
		);

		const text = component.find('Text');

		expect(text).toHaveLength(1);
		expect(text.props()).toHaveProperty('children', ['M', 'Ö']);
		expect(component.get(0).props.style).toHaveProperty(
			'backgroundColor',
			'#b1b1b1'
		);
	});

	it('should render with rounded is false', () => {
		const component = shallow(
			<Avatar
				source={{
					uri: 'https://i.pravatar.cc/50'
				}}
				rounded={false}
			/>
		);

		const imageBackground = component.find('ImageBackground');

		expect(imageBackground).toHaveLength(1);
		expect(
			component.get(0).props.style.reduce((acc, cur) => Object.assign(acc, cur))
		).toHaveProperty('borderRadius', undefined);
	});

	it('should render with onPress in Icon avatar', () => {
		const onPress = jest.fn();
		const component = shallow(<Avatar icon="user" onPress={onPress} />);

		component.simulate('press');

		expect(component).toHaveLength(1);
		expect(onPress).toBeCalled();
		expect(onPress).toBeCalledTimes(1);
	});

	it('should render with onPress in title avatar', () => {
		const onPress = jest.fn();
		const component = shallow(<Avatar title="Murat ÖNER" onPress={onPress} />);

		component.simulate('press');

		expect(component).toHaveLength(1);
		expect(onPress).toBeCalled();
		expect(onPress).toBeCalledTimes(1);
	});

	it('should render with onPress in image avatar', () => {
		const onPress = jest.fn();
		const component = shallow(
			<Avatar
				source={{
					uri: 'https://i.pravatar.cc/50'
				}}
				onPress={onPress}
			/>
		);

		component.simulate('press');

		expect(component).toHaveLength(1);
		expect(onPress).toBeCalled();
		expect(onPress).toBeCalledTimes(1);
	});
});
