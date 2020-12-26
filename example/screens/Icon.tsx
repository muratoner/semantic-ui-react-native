import { Divider, Icon, Title } from '@muratoner/semantic-ui-react-native';
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
					<Title>Default Type (Ionicons)</Title>
					<Icon name="home" size={50} />
					<Stack size={10} />
					<Divider  />
					<Stack size={10} />
					<Title>AntDesign Type</Title>
					<Icon name="user" size={50} type="AntDesign" />
					<Stack size={10} />
					<Divider  />
					<Stack size={10} />
					<Title>Entypo Type</Title>
					<Icon name="user" size={50} type="Entypo" />
					<Stack size={10} />
					<Divider  />
					<Stack size={10} />
					<Title>EvilIcons Type</Title>
					<Icon name="user" size={50} type="EvilIcons" />
					<Stack size={10} />
					<Divider  />
					<Stack size={10} />
					<Title>Feather Type</Title>
					<Icon name="user" size={50} type="Feather" />
					<Stack size={10} />
					<Divider  />
					<Stack size={10} />
					<Title>FontAwesome Type</Title>
					<Icon name="user" size={50} type="FontAwesome" />
					<Stack size={10} />
					<Divider  />
					<Stack size={10} />
					<Title>FontAwesome5 Type</Title>
					<Icon name="user" size={50} type="FontAwesome5" />
					<Stack size={10} />
					<Divider  />
					<Stack size={10} />
					<Title>Fontisto Type</Title>
					<Icon name="home" size={50} type="Fontisto" />
					<Stack size={10} />
					<Divider  />
					<Stack size={10} />
					<Title>Foundation Type</Title>
					<Icon name="home" size={50} type="Foundation" />
					<Stack size={10} />
					<Divider  />
					<Stack size={10} />
					<Title>Ionicons Type</Title>
					<Icon name="home" size={50} type="Ionicons" />
					<Stack size={10} />
					<Divider  />
					<Stack size={10} />
					<Title>MaterialCommunityIcons Type</Title>
					<Icon name="home" size={50} type="MaterialCommunityIcons" />
					<Stack size={10} />
					<Divider  />
					<Stack size={10} />
					<Title>MaterialIcons Type</Title>
					<Icon name="home" size={50} type="MaterialIcons" />
					<Stack size={10} />
					<Divider  />
					<Stack size={10} />
					<Title>Octicons Type</Title>
					<Icon name="home" size={50} type="Octicons" />
					<Stack size={10} />
					<Divider  />
					<Stack size={10} />
					<Title>SimpleLineIcons Type</Title>
					<Icon name="home" size={50} type="SimpleLineIcons" />
					<Stack size={10} />
					<Divider  />
					<Stack size={10} />
					<Title>Zocial Type</Title>
					<Icon name="amazon" size={50} type="Zocial" />
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
