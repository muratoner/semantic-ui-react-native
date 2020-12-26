import { Divider, Title } from '@muratoner/semantic-ui-react-native';
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
                    <Divider text="Huge" />
					<Inset vertical={20}>
                        <Title type="huge">Statistic</Title>
                    </Inset>
                    <Divider text="Large" />
					<Inset vertical={20}>
                        <Title type="large">Statistic</Title>
                    </Inset>
					<Divider text="Medium (Default)" />
					<Inset vertical={20}>
                        <Title type="medium">Statistic</Title>
                    </Inset>
					<Divider text="Small" />
					<Inset vertical={20}>
                        <Title type="small">Statistic</Title>
                    </Inset>
					<Divider text="Tiny" />
					<Inset vertical={20}>
                        <Title type="tiny">Statistic</Title>
                    </Inset>
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
