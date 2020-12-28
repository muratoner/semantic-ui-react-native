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
					<View style={{ flexDirection: 'row', justifyContent: 'space-around', flex: 1, width: '100%' }}>
						<Avatar title="Yvette Barton" size={32} titleShowLimit={2} />
						<Avatar title="Esta Moore" size={32} titleShowLimit={2} />
						<Avatar title="Jermaine Schiller" size={32} titleShowLimit={2} />
						<Avatar title="Estelle Monahan" size={32} titleShowLimit={2} />
						<Avatar title="Frieda Christiansen II" size={32} />
						<Avatar title="Tatyana Cassin MD" size={32} />
						<Avatar title="Eulah Hegmann Monahan" size={32} withRandomColor={false} />
					</View>
					<Stack size={10} />
					<Avatar title="Deanna Streich" size={64} titleShowLimit={2} />
					<Stack size={10} />
					<Avatar title="Murat Öner" size={128} titleShowLimit={2} />
					<Stack size={10} />
					<Avatar
						title={"Trent Lemke"}
						size={32}
						source={{
							uri: 'https://i.pravatar.cc/32'
						}}
					/>
					<Stack size={10} />
					<Avatar
						title={"Deon Legros"}
						size={64}
						source={{
							uri: 'https://i.pravatar.cc/64'
						}}
					/>
					<Stack size={10} />
					<Avatar
						title={"Rhett Reichert"}
						titleShowLimit={2}
						size={128}
						source={{
							uri: 'https://i.pravatar.cc/128'
						}}
					/>
					<Stack size={10} />
					<Avatar
						icon={{
							name: 'user',
							type: 'AntDesign',
							color: 'white'
						}}
					/>
					<Stack size={10} />
					<Avatar
						size={128}
						icon={{
							name: 'home',
							type: 'AntDesign',
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
