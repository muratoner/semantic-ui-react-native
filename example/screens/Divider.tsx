import {Divider, Icon, Inset, Title} from '@muratoner/semantic-ui-react-native'
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
					<Inset vertical={10}>
						<Title>Default</Title>
					</Inset>
					<Divider />
					<Inset top={50} bottom={10}>
						<Title>With Text</Title>
					</Inset>
					<Divider title='OR' />
					<Inset top={50} bottom={10}>
						<Title>With Text and Icon</Title>
					</Inset>
					<Divider
						title='Description'
						icon={{
							name: 'tag',
							type: 'AntDesign'
						}}
					/>
					<Inset top={50} bottom={10}>
						<Title>With custom children</Title>
					</Inset>
					<Divider>
						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center',
								transform: [
									{
										rotateZ: '0.2'
									}
								]
							}}
						>
							<Icon name='user' type='AntDesign' size={22} />
							<Title>User Information</Title>
						</View>
					</Divider>
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
