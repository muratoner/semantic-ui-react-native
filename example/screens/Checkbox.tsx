import { Checkbox, Divider } from '@muratoner/semantic-ui-react-native';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { Inset } from 'react-native-spacing-system';

const Component = () => {
	const [checked, setChecked] = useState(false);

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
					<Checkbox checked={checked} onChanged={setChecked} />
					<Checkbox
						checked={checked}
						onChanged={setChecked}
						type="circle-overflow"
					/>
					<Checkbox
						checked={checked}
						onChanged={setChecked}
						checkedColor="blue"
						type="flag"
					/>
					<Checkbox
						checked={checked}
						onChanged={setChecked}
						type="heart"
						checkedColor="red"
						unCheckedColor="red"
					/>
					<Checkbox checked={checked} onChanged={setChecked} type="lock" />
					<Checkbox
						checked={checked}
						onChanged={setChecked}
						type="notification"
					/>
					<Checkbox checked={checked} onChanged={setChecked} type="square" />
					<Checkbox
						checked={checked}
						onChanged={setChecked}
						checkedColor="green"
						unCheckedColor="red"
						type="square-overflow"
					/>
					<Checkbox checked={checked} onChanged={setChecked} type="volume" />
					<Checkbox checked={checked} onChanged={setChecked} type="radio" />
					<Inset vertical={10}>
						<Checkbox checked={checked} onChanged={setChecked} type="slider" />
					</Inset>
					<Checkbox checked={checked} onChanged={setChecked} type="toggle" />
					<Inset vertical={20}>
						<Divider title="Disable Status" />
					</Inset>
					<Checkbox
						checked={checked}
						onChanged={setChecked}
						type="radio"
						disable
					/>
					<Inset vertical={10}>
						<Checkbox
							checked={checked}
							onChanged={setChecked}
							type="slider"
							disable
						/>
					</Inset>
					<Checkbox
						checked={checked}
						onChanged={setChecked}
						type="toggle"
						disable
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
