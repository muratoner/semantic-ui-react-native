import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import React from 'react'
import {StyleSheet} from 'react-native'
import {Avatar, Flex} from '../../'

describe('Flex Component', () => {
	it('should render without issues', () => {
		const component = shallow(<Flex style={{backgroundColor: 'red'}} />)

		expect(component.length).toBe(1)
		const style = StyleSheet.flatten(component.get(0).props.style)
		expect(style).toHaveProperty('flex', 1)
		expect(style).toHaveProperty('backgroundColor', 'red')
		expect(toJson(component)).toMatchSnapshot()
	})

	it('should render with 2 flex size', () => {
		const component = shallow(<Flex size={2} />)

		expect(component.length).toBe(1)
		const style = StyleSheet.flatten(component.get(0).props.style)
		expect(style).toHaveProperty('flex', 2)
		expect(toJson(component)).toMatchSnapshot()
	})

	it('should render with two children', () => {
		const component = shallow(
			<Flex>
				<Avatar title='Murat ÖNER' />
				<Avatar title='Murat' />
			</Flex>
		)

		expect(component.length).toBe(1)
		expect(component.get(0).props.children.length).toBe(2)
		expect(toJson(component)).toMatchSnapshot()
	})
})
