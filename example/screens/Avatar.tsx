import { Avatar } from '@muratoner/semantic-ui-react-native';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { Stack } from 'react-native-spacing-system';

const Component = () => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<ScrollView
				contentInsetAdjustmentBehavior="automatic"
				style={styles.scrollView}
			>
				<View
					style={{
						alignItems: 'center',
						justifyContent: 'center',
						margin: 10
					}}
				>
					<Avatar fullName="Murat ÖNER ÖNER" size={32} showFullNameLimit={2} />
					<Stack size={10} />
					<Avatar fullName="Murat ÖNER ÖNER" size={64} showFullNameLimit={2} />
					<Stack size={10} />
					<Avatar fullName="Murat ÖNER ÖNER" size={128} showFullNameLimit={2} />
					<Stack size={10} />
					<Avatar
						size={32}
						source={{
							uri: 'https://i.pravatar.cc/32'
						}}
					/>
					<Stack size={10} />
					<Avatar
						size={64}
						source={{
							uri: 'https://i.pravatar.cc/64'
						}}
					/>
					<Stack size={10} />
					<Avatar
						size={128}
						source={{
							uri: 'https://i.pravatar.cc/128'
						}}
					/>
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
