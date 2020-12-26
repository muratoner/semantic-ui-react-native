import { Divider, ProgressBar } from '@muratoner/semantic-ui-react-native';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { Inset } from 'react-native-spacing-system';

const Component = () => {
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
						<Divider text="Progress 0" />
					</Inset>
					<ProgressBar progress={0} />
					<Inset vertical={20}>
						<Divider text="Progress 10" />
					</Inset>
					<ProgressBar progress={10} />
					<Inset vertical={20}>
						<Divider text="Progress 20" />
					</Inset>
					<ProgressBar progress={20} />
					<Inset vertical={20}>
						<Divider text="Progress 30" />
					</Inset>
					<ProgressBar progress={30} />
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
					<ProgressBar progress={90} />
					<Inset vertical={20}>
						<Divider text="Progress 100" />
					</Inset>
					<ProgressBar progress={100} />
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
