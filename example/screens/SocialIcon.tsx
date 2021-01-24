import {
	Divider,
	Inset,
	SocialIcon,
	Stack
} from '@muratoner/semantic-ui-react-native'
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
					<Divider title='Flat & Circular Button Styles With Light Theme' />
					<View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
						<SocialIcon type='angellist' light raised />
						<SocialIcon type='codepen' light raised />
						<SocialIcon type='envelope' light raised />
						<SocialIcon type='etsy' light circular raised />
						<SocialIcon type='facebook' light circular raised />
						<SocialIcon type='flickr' light circular raised />
					</View>
					<Divider title='Flat & Circular Button Style' />
					<View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
						<SocialIcon type='steam' raised />
						<SocialIcon type='stumbleupon' light raised />
						<SocialIcon type='tumblr' raised />
						<SocialIcon type='twitch' circular raised />
						<SocialIcon type='twitter' circular raised />
						<SocialIcon type='vimeo' circular raised />
					</View>
					<Divider title='Flat Button Style With Text' />
					<Stack size={10} />
					<SocialIcon type='medium' fluid raised title='Sign In With Medium' />
					<Stack size={10} />
					<SocialIcon type='pinterest' fluid raised />
					<Stack size={10} />
					<SocialIcon type='quora' fluid raised title='Your Title' />
					<Stack size={10} />
					<SocialIcon type='reddit' fluid raised title='Your Title' />
					<Divider title='Circular Button Style With Text' />
					<Stack size={10} />
					<SocialIcon type='vk' fluid circular raised title='Your Title' />
					<Stack size={10} />
					<SocialIcon type='weibo' fluid circular raised title='Your Title' />
					<Stack size={10} />
					<SocialIcon
						type='wordpress'
						fluid
						circular
						title='Sign In With Wordpress'
					/>
					<Stack size={10} />
					<SocialIcon type='youtube' fluid circular title='Sign In With Youtube' />
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
