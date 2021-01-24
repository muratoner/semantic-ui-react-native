import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import React from 'react'
import {StyleSheet} from 'react-native'
import {Stack} from '../../'

describe('Stack Component', () => {
	it('should render without issues', () => {
		const component = shallow(
			<Stack size={10} style={{backgroundColor: 'red'}} />
		)

		expect(component.length).toBe(1)
		const style = StyleSheet.flatten(component.get(0).props.style)
		expect(style).toHaveProperty('height', 10)
		expect(style).toHaveProperty('backgroundColor', 'red')
		expect(toJson(component)).toMatchSnapshot()
	})
})
