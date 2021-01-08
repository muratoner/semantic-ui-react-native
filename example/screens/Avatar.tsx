import { Avatar, Divider } from '@muratoner/semantic-ui-react-native';
import React from 'react';
import {
	Alert,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	View
} from 'react-native';
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
					<Divider title="TextColorMode Is black-white" />
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-around',
							flex: 1,
							width: '100%'
						}}
					>
						<Avatar
							title="Yvette Barton"
							size={64}
							titleShowLimit={2}
							bordered
						/>
						<Avatar title="Nihal Kerem" size={64} titleShowLimit={2} bordered />
						<Avatar
							title="Kermaine Schiller"
							size={64}
							titleShowLimit={2}
							circular={false}
							bordered
						/>
						<Avatar
							title="Estelle Monahan"
							size={64}
							titleShowLimit={2}
							raised
						/>
						<Avatar title="Frieda Christiansen II" size={64} raised />
					</View>
					<Stack size={10} />
					<Divider title="TextColorMode Is light" />
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-around',
							flex: 1,
							width: '100%'
						}}
					>
						<Avatar
							title="Yvette Barton"
							textColorMode="light"
							size={64}
							bordered
							titleShowLimit={2}
						/>
						<Avatar
							title="Nihal Kerem"
							textColorMode="light"
							size={64}
							bordered
							titleShowLimit={2}
						/>
						<Avatar
							title="Kermaine Schiller"
							textColorMode="light"
							size={64}
							titleShowLimit={2}
							circular={false}
						/>
						<Avatar
							title="Estelle Monahan"
							textColorMode="light"
							size={64}
							titleShowLimit={2}
							raised
						/>
						<Avatar
							title="Frieda Christiansen II"
							textColorMode="light"
							size={64}
							raised
						/>
					</View>
					<Stack size={10} />
					<Divider title="Show Full Name" />
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-around',
							flex: 1,
							width: '100%'
						}}
					>
						<Avatar
							title="Deanna"
							size={64}
							bordered
							shortestTitle={false}
							onPress={() => Alert.alert('Clicked Deanna avatar :)')}
						/>
						<Avatar title="Yvette" bordered size={64} shortestTitle={false} />
						<Avatar
							title="Esta"
							size={64}
							shortestTitle={false}
							circular={false}
						/>
						<Avatar title="Kermaine" size={64} shortestTitle={false} raised />
						<Avatar title="Estelle" size={64} shortestTitle={false} raised />
					</View>
					<Stack size={10} />
					<Divider title="With Image" />
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-around',
							flex: 1,
							width: '100%'
						}}
					>
						<Avatar
							title={'Deon Legros'}
							size={64}
							bordered
							source={{
								uri: 'https://i.pravatar.cc/128?img=1'
							}}
						/>
						<Avatar
							title={'Rhett Reichert'}
							titleShowLimit={2}
							size={64}
							bordered
							source={{
								uri: 'https://i.pravatar.cc/1920?img=2'
							}}
						/>
						<Avatar
							title={'Trent Lemke'}
							size={64}
							circular={false}
							source={{
								uri: 'https://i.pravatar.cc/128?img=3'
							}}
						/>
						<Avatar
							title={'Trent Lemke'}
							size={64}
							raised
							source={{
								uri: 'https://i.pravatar.cc/128?img=4'
							}}
						/>
						<Avatar
							title={'Trent Lemke'}
							size={64}
							raised
							source={{
								uri: 'https://i.pravatar.cc/128?img=5'
							}}
						/>
					</View>
					<Stack size={10} />

					<Divider title="With Icon" />
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-around',
							flex: 1,
							width: '100%'
						}}
					>
						<Avatar
							size={64}
							bordered
							icon={{
								name: 'user',
								type: 'AntDesign',
								color: 'white'
							}}
						/>
						<Avatar
							size={64}
							bordered
							icon={{
								name: 'facebook',
								type: 'FontAwesome',
								color: 'white'
							}}
						/>
						<Avatar
							size={64}
							circular={false}
							icon={{
								name: 'flickr',
								type: 'FontAwesome',
								color: 'white'
							}}
						/>
						<Avatar
							size={64}
							raised
							icon={{
								name: 'twitter',
								type: 'FontAwesome',
								color: 'white'
							}}
						/>
						<Avatar
							size={64}
							raised
							icon={{
								name: 'home',
								type: 'AntDesign'
							}}
						/>
					</View>
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
