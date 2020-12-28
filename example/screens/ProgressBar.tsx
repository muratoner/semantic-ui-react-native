import { Divider, ProgressBar } from '@muratoner/semantic-ui-react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { Inset } from 'react-native-spacing-system';

const Component = () => {
	const [progress, setProgress] = useState(0);

	function getRndInteger(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	useEffect(() => {
		setTimeout(() => {
			setProgress(getRndInteger(0, 100));
		}, 3000);
	}, [progress]);

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<ScrollView
				contentInsetAdjustmentBehavior="automatic"
				style={styles.scrollView}
			>
				<View
					style={{
						margin: 10
					}}
				>
					<Inset vertical={20}>
						<Divider text="Progress" />
					</Inset>
					<ProgressBar
						progress={progress}
						showProgressValue
						autoColored
						bottomText="Uploading Files"
						bottomTextIncludeProgress
					/>
					<Inset vertical={20}>
						<Divider text="Progress 0" />
					</Inset>
					<ProgressBar progress={0} showProgressValue />
					<Inset vertical={20}>
						<Divider text="Progress 10" />
					</Inset>
					<ProgressBar progress={10} showProgressValue />
					<Inset vertical={20}>
						<Divider text="Progress 20" />
					</Inset>
					<ProgressBar progress={20} showProgressValue />
					<Inset vertical={20}>
						<Divider text="Progress 30" />
					</Inset>
					<ProgressBar
						progress={30}
						showProgressValue
						bottomText="Uploading Files"
						bottomTextIncludeProgress
					/>
					<Inset vertical={20}>
						<Divider text="Progress 40" />
					</Inset>
					<ProgressBar progress={40} />
					<Inset vertical={20}>
						<Divider text="Progress 50" />
					</Inset>
					<ProgressBar progress={50} />
					<Inset vertical={20}>
						<Divider text="Progress 60" />
					</Inset>
					<ProgressBar progress={60} />
					<Inset vertical={20}>
						<Divider text="Progress 70" />
					</Inset>
					<ProgressBar progress={70} />
					<Inset vertical={20}>
						<Divider text="Progress 80" />
					</Inset>
					<ProgressBar progress={80} />
					<Inset vertical={20}>
						<Divider text="Progress 90" />
					</Inset>
					<ProgressBar progress={90} showProgressValue />
					<Inset vertical={20}>
						<Divider text="Progress 100" />
					</Inset>
					<ProgressBar progress={100} showProgressValue />
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	scrollView: {
		flex: 1,
		height: '100%'
	}
});

export default Component;
