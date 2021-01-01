import { Divider, Icon } from '@muratoner/semantic-ui-react-native';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';

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
					<Divider text="Default (Ionicons)" />

					<Icon name="home" color="#388e3c" size={22} />
					<Divider text="AntDesign" />

					<Icon name="user" size={22} type="AntDesign" />
					<Divider text="Entypo" />

					<Icon name="user" size={22} type="Entypo" color="#c62828" />
					<Divider text="EvilIcons" />

					<Icon name="user" size={22} type="EvilIcons" />
					<Divider text="Feather" />

					<Icon name="user" size={22} type="Feather" />
					<Divider text="FontAwesome" />

					<Icon name="user" size={22} type="FontAwesome" />
					<Divider text="FontAwesome5" />

					<Icon name="user" size={22} type="FontAwesome5" />
					<Divider text="Fontisto" />

					<Icon name="home" size={22} type="Fontisto" />
					<Divider text="Foundation" />

					<Icon name="home" size={22} type="Foundation" />
					<Divider text="Ionicons" />

					<Icon name="home" size={22} type="Ionicons" />
					<Divider text="MaterialCommunityIcons" />

					<Icon name="home" size={22} type="MaterialCommunityIcons" />
					<Divider text="MaterialIcons" />

					<Icon name="home" size={22} type="MaterialIcons" />

					<Divider text="Octicons" />

					<Icon name="home" size={22} type="Octicons" />
					<Divider text="SimpleLineIcons" />

					<Icon name="home" size={22} type="SimpleLineIcons" />
					<Divider text="Zocial" />

					<Icon name="amazon" size={22} type="Zocial" color="#F0941C" />
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
