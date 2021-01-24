import {LabeledButton, Stack} from '@muratoner/semantic-ui-react-native'
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
					<LabeledButton
						label='Like'
						labelIcon='heart'
						labelIconType='AntDesign'
						title='2,048'
					/>
					<Stack size={10} />
					<LabeledButton
						loading
						label='Like'
						labelIcon='heart'
						labelIconType='AntDesign'
						title='2,048'
					/>
					<Stack size={10} />
					<LabeledButton
						loading
						disabled
						label='Like'
						labelIcon='heart'
						labelIconType='AntDesign'
						title='2,048'
					/>
					<Stack size={10} />
					<LabeledButton
						pointing
						label='Like'
						labelIcon='heart'
						labelIconType='AntDesign'
						title='2,048'
						labelRight
					/>
					<Stack size={10} />
					<LabeledButton
						label='Like'
						labelIcon='heart'
						labelIconType='AntDesign'
						title='2,048'
						labelRight
					/>
					<Stack size={10} />
					<LabeledButton
						labelIcon='heart'
						labelIconType='AntDesign'
						title='2,048'
						labelRight
					/>
					<Stack size={10} />
					<LabeledButton
						pointing
						color='red'
						label='Like'
						labelIcon='heart'
						labelIconType='AntDesign'
						title='2,048'
					/>
					<Stack size={10} />
					<LabeledButton
						outline
						pointing
						color='primary'
						label='Forks'
						labelIcon='fork'
						labelIconType='AntDesign'
						title='1,048'
					/>
					<Stack size={10} />
					<LabeledButton
						circular
						outline
						pointing
						color='primary'
						label='Forks'
						labelIcon='fork'
						labelIconType='AntDesign'
						title='1,048'
					/>
					<Stack size={10} />
					<LabeledButton labelIcon='pause' labelIconType='Fontisto' title='Pause' />
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
