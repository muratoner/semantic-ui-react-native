import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import React from 'react'
import {StyleSheet} from 'react-native'
import {Avatar} from '../..'
import Icon from '../../icons/Icon'
import {UtilColor} from '../../utils'
import Badge from '../Badge'

describe('Badge Component', () => {
	it('should render without issues', () => {
		const component = shallow(<Badge />)

		expect(component.length).toBe(1)

		expect(component.get(0).props.style).toEqual([undefined])
		expect(
			StyleSheet.flatten(component.get(0).props.children[0].props.style)
		).toHaveProperty('height', 10)
		expect(
			StyleSheet.flatten(component.get(0).props.children[0].props.style)
		).toHaveProperty('height', 10)
		expect(
			StyleSheet.flatten(component.get(0).props.children[0].props.style)
		).toHaveProperty('borderRadius', 20)
		expect(
			StyleSheet.flatten(component.get(0).props.children[0].props.style)
		).toHaveProperty('backgroundColor', UtilColor.getBgColor('green'))

		expect(toJson(component)).toMatchSnapshot()
	})

	it('should render with overlap prop and Avatar child', () => {
		const component = shallow(
			<Badge overlap='circular'>
				<Avatar title='Murat ÖNER' />
			</Badge>
		)

		expect(component.length).toBe(1)
		expect(component.get(0).props.children.length).toBe(2)

		expect(
			StyleSheet.flatten(component.get(0).props.children[0].props.style)
		).toHaveProperty('position', 'absolute')
		expect(
			StyleSheet.flatten(component.get(0).props.children[0].props.style)
		).toHaveProperty('right', 5)
		expect(
			StyleSheet.flatten(component.get(0).props.children[0].props.style)
		).toHaveProperty('top', 5)

		expect(toJson(component)).toMatchSnapshot()
	})

	it('should render with rounded Avatar child', () => {
		const component = shallow(
			<Badge>
				<Avatar title='Murat ÖNER' />
			</Badge>
		)

		expect(component.length).toBe(1)
		expect(component.get(0).props.children.length).toBe(2)

		expect(
			StyleSheet.flatten(component.get(0).props.children[0].props.style)
		).toHaveProperty('position', 'absolute')
		expect(
			StyleSheet.flatten(component.get(0).props.children[0].props.style)
		).toHaveProperty('right', -3)
		expect(
			StyleSheet.flatten(component.get(0).props.children[0].props.style)
		).toHaveProperty('top', -3)

		expect(toJson(component)).toMatchSnapshot()
	})

	it('should render with content', () => {
		const component = shallow(<Badge content={<Icon name='user' />} />)

		expect(component.length).toBe(1)
		expect(component.get(0).props.children[1]).toEqual(undefined)

		expect(toJson(component)).toMatchSnapshot()
	})

	it('should render with rounded', () => {
		const component = shallow(<Badge rounded content='New' />)

		const text = component.find('Text').shallow()

		expect(component.length).toBe(1)
		expect(component.get(0).props.children[1]).toEqual(undefined)
		expect(text.get(0).props.children).toBe('New')

		expect(toJson(component)).toMatchSnapshot()
	})
})
