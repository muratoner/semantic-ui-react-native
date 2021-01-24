import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import React from 'react'
import {StyleSheet} from 'react-native'
import {Avatar, Row} from '../../'

describe('Row Component', () => {
	it('should render without issues', () => {
		const component = shallow(<Row style={{backgroundColor: 'red'}} />)

		expect(component.length).toBe(1)
		const style = StyleSheet.flatten(component.get(0).props.style)
		expect(style).toHaveProperty('flexDirection', 'row')
		expect(style).toHaveProperty('backgroundColor', 'red')
		expect(toJson(component)).toMatchSnapshot()
	})

	it('should render with children', () => {
		const component = shallow(
			<Row>
				<Avatar title='Murat ÖNER' />
				<Avatar title='Murat' />
			</Row>
		)

		expect(component.length).toBe(1)
		expect(component.get(0).props.children.length).toBe(2)
		expect(toJson(component)).toMatchSnapshot()
	})
})
