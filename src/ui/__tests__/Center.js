import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import React from 'react'
import {StyleSheet} from 'react-native'
import {Center} from '../../'

describe('Center Component', () => {
	it('should render without issues', () => {
		const component = shallow(<Center />)

		expect(component.length).toBe(1)
		const style = StyleSheet.flatten(component.get(0).props.style)
		expect(style).toHaveProperty('alignItems', 'center')
		expect(style).toHaveProperty('justifyContent', 'center')
		expect(toJson(component)).toMatchSnapshot()
	})

	it('should render with flex direction', () => {
		const component = shallow(<Center flexDirection='row' />)

		expect(component.length).toBe(1)
		expect(StyleSheet.flatten(component.get(0).props.style)).toHaveProperty(
			'flexDirection',
			'row'
		)
		expect(toJson(component)).toMatchSnapshot()
	})
})
