import {Button, Center, Inset, Stack} from '@muratoner/semantic-ui-react-native'
import React from 'react'
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native'
const Component = () => {
	return (
		<SafeAreaView style={{flex: 1}}>
			<ScrollView
				contentInsetAdjustmentBehavior='automatic'
				style={styles.scrollView}
			>
				<Inset all={10}>
					<Center>
						<View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
							<Button title='Save' style={{margin: 5}} />
							<Button title='Save' disabled style={{margin: 5}} />
							<Button title='Save' color='primary' style={{margin: 5}} />
							<Button title='Save' color='primary' disabled style={{margin: 5}} />
							<Button title='Save' color='secondary' style={{margin: 5}} />
							<Button title='Save' color='secondary' disabled style={{margin: 5}} />
							<Button title='Save' color='red' style={{margin: 5}} />
							<Button title='Save' color='red' disabled style={{margin: 5}} />
						</View>
						<View style={{flexDirection: 'row'}}>
							<Button
								title='Add Favorite'
								color='secondary'
								iconName='heart'
								iconType='AntDesign'
								fluid
								circular
								style={{marginRight: 10}}
							/>
							<Button
								title='Add Favorite'
								color='secondary'
								iconName='heart'
								iconType='AntDesign'
								disabled
							/>
						</View>
						<View style={{flexDirection: 'row', marginVertical: 10}}>
							<Button
								type='outline'
								title='Add Friend'
								color='secondary'
								iconName='user'
								iconType='FontAwesome'
								style={{marginRight: 10}}
							/>
							<Button
								loading
								type='outline'
								title='Add Friend'
								color='red'
								iconName='user'
								iconType='FontAwesome'
								fluid
								style={{marginRight: 10}}
							/>
							<Button
								disabled
								loading
								type='outline'
								title='Add Friend'
								color='red'
								iconName='user'
								iconType='FontAwesome'
							/>
						</View>
						<Stack size={10} />
						<Button
							color='secondary'
							iconName='basket'
							iconType='MaterialCommunityIcons'
						/>
						<Stack size={10} />
						<Button
							circular
							color='secondary'
							iconName='basket'
							iconType='MaterialCommunityIcons'
						/>
					</Center>
				</Inset>
			</ScrollView>
		</SafeAreaView>
	)
}
const styles = StyleSheet.create({
	scrollView: {
		flex: 1,
		height: '100%'
	}
})
export default Component
