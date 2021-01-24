import {Divider, Inset, Title} from '@muratoner/semantic-ui-react-native'
import React from 'react'
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native'
const Component = () => {
	return (
		<SafeAreaView style={{flex: 1}}>
			<ScrollView
				contentInsetAdjustmentBehavior='automatic'
				style={styles.scrollView}
			>
				<Inset all={10}>
					<Divider title='Huge' />
					<Inset vertical={20}>
						<Title size='huge'>Statistic</Title>
					</Inset>
					<Divider title='Large' />
					<Inset vertical={20}>
						<Title size='large'>Statistic</Title>
					</Inset>
					<Divider title='Medium (Default)' />
					<Inset vertical={20}>
						<Title size='medium'>Statistic</Title>
					</Inset>
					<Divider title='Small' />
					<Inset vertical={20}>
						<Title size='small'>Statistic</Title>
					</Inset>
					<Divider title='Tiny' />
					<Inset vertical={20}>
						<Title size='tiny'>Statistic</Title>
					</Inset>
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
