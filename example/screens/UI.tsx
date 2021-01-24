import {
	Button,
	Center,
	Column,
	Divider,
	Flex,
	Inset,
	Row,
	Stack
} from '@muratoner/semantic-ui-react-native'
import React from 'react'
import {SafeAreaView, StyleSheet, Text} from 'react-native'
const Component = () => {
	return (
		<SafeAreaView style={{flex: 1}}>
			<Inset all={10} flex>
				<Divider title='Flex and Center' />
				<Flex>
					<Center flex>
						<Text style={{width: 200}}>
							Vestibulum vulputate pulvinar scelerisque non
						</Text>
					</Center>
				</Flex>
				<Divider title='Row' />
				<Row style={styles.row}>
					<Button title='Save' color='green' />
					<Button title='Edit' color='blue' />
					<Button title='Delete' color='red' />
				</Row>
				<Divider title='Column and Stack' />
				<Column style={styles.row}>
					<Button title='Save' color='green' />
					<Stack />
					<Button title='Edit' color='blue' />
					<Stack />
					<Button title='Delete' color='red' />
				</Column>
			</Inset>
			<Center>
				<Inset top={10}>
					<Text>Note: Applied screen padding with Inset component</Text>
				</Inset>
			</Center>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	scrollView: {
		flex: 1,
		height: '100%'
	},
	row: {
		justifyContent: 'space-between',
		width: '100%'
	}
})

export default Component
