import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import React from 'react'
import {StyleSheet} from 'react-native'
import Avatar from '../Avatar'

describe('Avatar Component', () => {
	it('should render without issues', () => {
		const component = shallow(<Avatar />)

		let props = component.children().props()

		expect(component.find('Text')).toHaveLength(1)
		expect(props).toHaveProperty('numberOfLines', 1)
		expect(props).toHaveProperty('adjustsFontSizeToFit', true)
		expect(props).toHaveProperty('minimumFontScale', 0.01)
		expect(props).toHaveProperty('children', undefined)

		expect(toJson(component)).toMatchSnapshot()
	})

	it('should render with textAutoColorMode is auto-light', () => {
		const component = shallow(
			<Avatar title='Murat ÖNER' textColorMode='auto-light' />
		)

		let props = component.children().props()

		expect(component.find('Text')).toHaveLength(1)
		expect(props).toHaveProperty('numberOfLines', 1)
		expect(props).toHaveProperty('adjustsFontSizeToFit', true)
		expect(props).toHaveProperty('minimumFontScale', 0.01)
		expect(props).toHaveProperty('children', ['M', 'Ö'])

		expect(toJson(component)).toMatchSnapshot()
	})

	it('should render with title', () => {
		const component = shallow(<Avatar title='Murat ÖNER' />)

		let props = component.children().props()

		expect(component.find('Text')).toHaveLength(1)
		expect(props).toHaveProperty('numberOfLines', 1)
		expect(props).toHaveProperty('adjustsFontSizeToFit', true)
		expect(props).toHaveProperty('minimumFontScale', 0.01)
		expect(props).toHaveProperty('children', ['M', 'Ö'])

		expect(toJson(component)).toMatchSnapshot()
	})

	it('should render with shortestTitle is false', () => {
		const component = shallow(<Avatar title='Murat ÖNER' shortestTitle={false} />)

		let props = component.children().props()

		expect(component.find('Text')).toHaveLength(1)
		expect(props).toHaveProperty('numberOfLines', 1)
		expect(props).toHaveProperty('adjustsFontSizeToFit', true)
		expect(props).toHaveProperty('minimumFontScale', 0.01)
		expect(props).toHaveProperty('children', 'Murat ÖNER')

		expect(toJson(component)).toMatchSnapshot()
	})

	it('should render with shortestTitle is false', () => {
		const component = shallow(<Avatar title='Murat ÖNER' shortestTitle={false} />)

		let props = component.children().props()

		expect(component.find('Text')).toHaveLength(1)
		expect(props).toHaveProperty('numberOfLines', 1)
		expect(props).toHaveProperty('adjustsFontSizeToFit', true)
		expect(props).toHaveProperty('minimumFontScale', 0.01)
		expect(props).toHaveProperty('children', 'Murat ÖNER')

		expect(toJson(component)).toMatchSnapshot()
	})

	it('should render with titleShowLimit is 2', () => {
		const component = shallow(
			<Avatar title='Murat Sancar Öner' titleShowLimit={2} />
		)

		let props = component.children().props()

		expect(component.find('Text')).toHaveLength(1)
		expect(props).toHaveProperty('numberOfLines', 1)
		expect(props).toHaveProperty('adjustsFontSizeToFit', true)
		expect(props).toHaveProperty('minimumFontScale', 0.01)
		expect(props).toHaveProperty('children', ['M', 'S'])

		expect(toJson(component)).toMatchSnapshot()
	})

	it('should render with avatar image', () => {
		const component = shallow(
			<Avatar
				title='Murat Sancar Öner'
				source={{
					uri: 'https://i.pravatar.cc/50'
				}}
				titleShowLimit={2}
			/>
		)

		let imageBackground = component.find('ImageBackground').shallow()
		let image = imageBackground.find('Image').shallow()
		let text = imageBackground.find('Text').shallow()

		image.simulate('loadEnd')

		var imageStyles = image.get(0).props

		expect(imageBackground).toHaveLength(1)
		expect(image).toHaveLength(1)
		expect(text).toHaveLength(1)
		expect(image.get(0).props).toHaveProperty('resizeMode', 'cover')
		expect(text.get(0).props).toHaveProperty('children', ['M', 'S'])

		expect(toJson(component)).toMatchSnapshot()
	})

	it('should render with avatar image', () => {
		const component = shallow(
			<Avatar
				title='Murat Sancar Öner'
				source={{
					uri: 'https://i.pravatar.cc/50'
				}}
				titleShowLimit={2}
			/>
		)

		let imageBackground = component.find('ImageBackground').shallow()
		let image = imageBackground.find('Image').shallow()
		let text = imageBackground.find('Text').shallow()

		image.simulate('loadEnd')

		var imageStyles = image.get(0).props

		expect(imageBackground).toHaveLength(1)
		expect(image).toHaveLength(1)
		expect(text).toHaveLength(1)
		expect(image.get(0).props).toHaveProperty('resizeMode', 'cover')
		expect(text.get(0).props).toHaveProperty('children', ['M', 'S'])

		expect(toJson(component)).toMatchSnapshot()
	})

	it('should render with icon', () => {
		const component = shallow(<Avatar icon='user' />)

		let props = component.children().props()

		expect(component.find('Icon')).toHaveLength(1)
		expect(props).toHaveProperty('numberOfLines', 1)
		expect(props).toHaveProperty('adjustsFontSizeToFit', true)
		expect(props).toHaveProperty('minimumFontScale', 0.01)

		expect(toJson(component)).toMatchSnapshot()
	})

	it('should render with randomColor is false', () => {
		const component = shallow(
			<Avatar title={'Murat ÖNER'} withRandomColor={false} />
		)

		const text = component.find('Text')

		expect(text).toHaveLength(1)
		expect(text.props()).toHaveProperty('children', ['M', 'Ö'])
		expect(
			component.get(0).props.style.reduce((acc, cur) => Object.assign(acc, cur))
		).toHaveProperty('backgroundColor', '#b1b1b1')

		expect(toJson(component)).toMatchSnapshot()
	})

	it('should render with circular is false', () => {
		const component = shallow(
			<Avatar
				source={{
					uri: 'https://i.pravatar.cc/50'
				}}
				circular={false}
			/>
		)

		const imageBackground = component.find('ImageBackground')

		expect(imageBackground).toHaveLength(1)
		expect(imageBackground.get(0).props.style).toHaveProperty(
			'borderRadius',
			undefined
		)

		expect(toJson(component)).toMatchSnapshot()
	})

	it('should render with onPress in Icon avatar', () => {
		const onPress = jest.fn()
		const component = shallow(<Avatar icon='user' onPress={onPress} />)

		component.simulate('press')

		expect(component).toHaveLength(1)
		expect(onPress).toBeCalled()
		expect(onPress).toBeCalledTimes(1)

		expect(toJson(component)).toMatchSnapshot()
	})

	it('should render with onPress in title avatar', () => {
		const onPress = jest.fn()
		const component = shallow(<Avatar title='Murat ÖNER' onPress={onPress} />)

		component.simulate('press')

		expect(component).toHaveLength(1)
		expect(onPress).toBeCalled()
		expect(onPress).toBeCalledTimes(1)

		expect(toJson(component)).toMatchSnapshot()
	})

	it('should render with onPress in image avatar', () => {
		const onPress = jest.fn()
		const component = shallow(
			<Avatar
				source={{
					uri: 'https://i.pravatar.cc/50'
				}}
				onPress={onPress}
			/>
		)

		component.simulate('press')

		expect(component).toHaveLength(1)
		expect(onPress).toBeCalled()
		expect(onPress).toBeCalledTimes(1)

		expect(toJson(component)).toMatchSnapshot()
	})

	it('should render with textColorMode is light', () => {
		const component = shallow(
			<Avatar textColorMode='light' withRandomColor title='Murat ÖNER' />
		)

		expect(
			StyleSheet.flatten(component.get(0).props.children.props.style)
		).toHaveProperty('color', '#ffffff')

		expect(toJson(component)).toMatchSnapshot()
	})

	it('should render with bordered prop', () => {
		const componentTitle = shallow(<Avatar bordered title='Murat ÖNER' />)

		const componentImage = shallow(
			<Avatar
				bordered
				source={{
					uri: 'https://i.pravatar.cc/50'
				}}
			/>
		)

		expect(StyleSheet.flatten(componentTitle.get(0).props.style)).toHaveProperty(
			'borderColor',
			'#BCBEC1'
		)

		expect(StyleSheet.flatten(componentTitle.get(0).props.style)).toHaveProperty(
			'borderWidth',
			1
		)

		expect(StyleSheet.flatten(componentImage.get(0).props.style)).toHaveProperty(
			'borderColor',
			'#BCBEC1'
		)

		expect(StyleSheet.flatten(componentImage.get(0).props.style)).toHaveProperty(
			'borderWidth',
			1
		)

		expect(toJson(componentImage)).toMatchSnapshot()
		expect(toJson(componentTitle)).toMatchSnapshot()
	})

	it('should render with raised prop', () => {
		const componentTitle = shallow(<Avatar raised title='Murat ÖNER' />)

		const componentImage = shallow(
			<Avatar
				raised
				source={{
					uri: 'https://i.pravatar.cc/50'
				}}
			/>
		)

		let checkCommonRules = (component) => {
			expect(StyleSheet.flatten(component.get(0).props.style)).toHaveProperty(
				'shadowColor',
				'rgba(0,0,0,.5)'
			)

			expect(StyleSheet.flatten(component.get(0).props.style)).toHaveProperty(
				'shadowOpacity',
				0.5
			)

			expect(StyleSheet.flatten(component.get(0).props.style)).toHaveProperty(
				'shadowRadius',
				2
			)

			expect(
				StyleSheet.flatten(component.get(0).props.style)
			).toHaveProperty('shadowOffset', {width: 0, height: 0})

			expect(toJson(component)).toMatchSnapshot()
		}

		checkCommonRules(componentImage)
		checkCommonRules(componentTitle)
	})

	it('should render with rounded prop', () => {
		const componentTitle = shallow(
			<Avatar circular={false} rounded title='Murat ÖNER' />
		)

		const componentImage = shallow(
			<Avatar
				rounded
				circular={false}
				source={{
					uri: 'https://i.pravatar.cc/50'
				}}
			/>
		)

		let checkCommonRules = (component) => {
			expect(StyleSheet.flatten(component.get(0).props.style)).toHaveProperty(
				'borderRadius',
				5
			)

			expect(toJson(component)).toMatchSnapshot()
		}

		checkCommonRules(componentImage)
		checkCommonRules(componentTitle)
	})
})
