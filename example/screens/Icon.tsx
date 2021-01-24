import {Divider, Icon} from '@muratoner/semantic-ui-react-native'
import React from 'react'
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native'
const Component = () => {
	return (
		<SafeAreaView style={{flex: 1}}>
			<ScrollView
				contentInsetAdjustmentBehavior='automatic'
				style={styles.scrollView}
			>
				<View
					style={{
						alignItems: 'center',
						justifyContent: 'center',
						margin: 10
					}}
				>
					<Divider title='Default (Ionicons)' />

					<Icon name='home' color='#388e3c' size={22} />
					<Divider title='AntDesign' />

					<Icon name='user' size={22} type='AntDesign' />
					<Divider title='Entypo' />

					<Icon name='user' size={22} type='Entypo' color='#c62828' />
					<Divider title='EvilIcons' />

					<Icon name='user' size={22} type='EvilIcons' />
					<Divider title='Feather' />

					<Icon name='user' size={22} type='Feather' />
					<Divider title='FontAwesome' />

					<Icon name='user' size={22} type='FontAwesome' />
					<Divider title='FontAwesome5' />

					<Icon name='user' size={22} type='FontAwesome5' />
					<Divider title='Fontisto' />

					<Icon name='home' size={22} type='Fontisto' />
					<Divider title='Foundation' />

					<Icon name='home' size={22} type='Foundation' />
					<Divider title='Ionicons' />

					<Icon name='home' size={22} type='Ionicons' />
					<Divider title='MaterialCommunityIcons' />

					<Icon name='home' size={22} type='MaterialCommunityIcons' />
					<Divider title='MaterialIcons' />

					<Icon name='home' size={22} type='MaterialIcons' />

					<Divider title='Octicons' />

					<Icon name='home' size={22} type='Octicons' />
					<Divider title='SimpleLineIcons' />

					<Icon name='home' size={22} type='SimpleLineIcons' />
					<Divider title='Zocial' />

					<Icon name='amazon' size={22} type='Zocial' color='#F0941C' />
				</View>
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
