import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import React from 'react'
import {StyleSheet} from 'react-native'
import {Avatar, Column} from '../../'

describe('Center Component', () => {
	it('should render without issues', () => {
		const component = shallow(<Column style={{backgroundColor: 'red'}} />)

		expect(component.length).toBe(1)
		const style = StyleSheet.flatten(component.get(0).props.style)
		expect(style).toHaveProperty('flexDirection', 'column')
		expect(style).toHaveProperty('backgroundColor', 'red')
		expect(toJson(component)).toMatchSnapshot()
	})

	it('should render with children', () => {
		const component = shallow(
			<Column>
				<Avatar title='Murat ÖNER' />
				<Avatar title='Murat' />
			</Column>
		)

		expect(component.length).toBe(1)
		expect(component.get(0).props.children.length).toBe(2)
		expect(toJson(component)).toMatchSnapshot()
	})
})
