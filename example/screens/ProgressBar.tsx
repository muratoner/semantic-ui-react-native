import {Divider, Inset, ProgressBar} from '@muratoner/semantic-ui-react-native'
import React, {useEffect, useState} from 'react'
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native'

const Component = () => {
	const [progress, setProgress] = useState(0)

	function getRndInteger(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min
	}

	useEffect(() => {
		setTimeout(() => {
			setProgress(getRndInteger(0, 100))
		}, 3000)
	}, [progress])

	return (
		<SafeAreaView style={{flex: 1}}>
			<ScrollView
				contentInsetAdjustmentBehavior='automatic'
				style={styles.scrollView}
			>
				<Inset all={10}>
					<Divider title='Progress with autoColored' />
					<ProgressBar
						progress={progress}
						showProgressValue
						autoColored
						bottomText='Uploading Files'
						bottomTextIncludeProgress
					/>
					<Divider title='Progress 0' />
					<ProgressBar progress={0} showProgressValue />
					<Divider title='Progress 10' />
					<ProgressBar progress={10} showProgressValue />
					<Divider title='Progress 20' />
					<ProgressBar progress={20} showProgressValue />
					<Divider title='Progress 30' />
					<ProgressBar
						progress={30}
						showProgressValue
						bottomText='Uploading Files'
						bottomTextIncludeProgress
					/>
					<Divider title='Progress 40' />
					<ProgressBar progress={40} />
					<Divider title='Progress 50' />
					<ProgressBar progress={50} />
					<Divider title='Progress 60' />
					<ProgressBar progress={60} />
					<Divider title='Progress 70' />
					<ProgressBar progress={70} />
					<Divider title='Progress 80' />
					<ProgressBar progress={80} />
					<Divider title='Progress 90' />
					<ProgressBar progress={90} showProgressValue />
					<Divider title='Progress 100' />
					<ProgressBar progress={100} showProgressValue />
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
