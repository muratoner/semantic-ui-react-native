import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import React from 'react'
import {StyleSheet} from 'react-native'
import {Inset} from '../../'

describe('Inset Component', () => {
	it('should render without issues', () => {
		const component = shallow(<Inset all={10} style={{backgroundColor: 'red'}} />)

		expect(component.length).toBe(1)
		const style = StyleSheet.flatten(component.get(0).props.style)
		expect(style).toHaveProperty('padding', 10)
		expect(style).toHaveProperty('backgroundColor', 'red')
		expect(toJson(component)).toMatchSnapshot()
	})

	it('should render with paddingTop size 10', () => {
		const component = shallow(<Inset top={10} />)

		expect(component.length).toBe(1)
		const style = StyleSheet.flatten(component.get(0).props.style)
		expect(style).toHaveProperty('paddingTop', 10)
		expect(toJson(component)).toMatchSnapshot()
	})

	it('should render with paddingBottom size 10', () => {
		const component = shallow(<Inset bottom={10} />)

		expect(component.length).toBe(1)
		const style = StyleSheet.flatten(component.get(0).props.style)
		expect(style).toHaveProperty('paddingBottom', 10)
		expect(toJson(component)).toMatchSnapshot()
	})

	it('should render with paddingLeft size 10', () => {
		const component = shallow(<Inset left={10} />)

		expect(component.length).toBe(1)
		const style = StyleSheet.flatten(component.get(0).props.style)
		expect(style).toHaveProperty('paddingLeft', 10)
		expect(toJson(component)).toMatchSnapshot()
	})

	it('should render with paddingRight size 10', () => {
		const component = shallow(<Inset right={10} />)

		expect(component.length).toBe(1)
		const style = StyleSheet.flatten(component.get(0).props.style)
		expect(style).toHaveProperty('paddingRight', 10)
		expect(toJson(component)).toMatchSnapshot()
	})

	it('should render with paddingHorizontal size 10', () => {
		const component = shallow(<Inset horizontal={10} />)

		expect(component.length).toBe(1)
		const style = StyleSheet.flatten(component.get(0).props.style)
		expect(style).toHaveProperty('paddingHorizontal', 10)
		expect(toJson(component)).toMatchSnapshot()
	})

	it('should render with paddingVertical size 10', () => {
		const component = shallow(<Inset vertical={10} />)

		expect(component.length).toBe(1)
		const style = StyleSheet.flatten(component.get(0).props.style)
		expect(style).toHaveProperty('paddingVertical', 10)
		expect(toJson(component)).toMatchSnapshot()
	})

	it('should render with flex', () => {
		const component = shallow(<Inset flex />)

		expect(component.length).toBe(1)
		const style = StyleSheet.flatten(component.get(0).props.style)
		expect(style).toHaveProperty('flex', true)
		expect(toJson(component)).toMatchSnapshot()
	})

	it('should render with flex size is 2', () => {
		const component = shallow(<Inset flex={2} />)

		expect(component.length).toBe(1)
		const style = StyleSheet.flatten(component.get(0).props.style)
		expect(style).toHaveProperty('flex', 2)
		expect(toJson(component)).toMatchSnapshot()
	})
})
