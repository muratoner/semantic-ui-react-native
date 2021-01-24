import {Checkbox, Divider, Inset} from '@muratoner/semantic-ui-react-native'
import React, {useState} from 'react'
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native'
const Component = () => {
	const [checked, setChecked] = useState(false)

	return (
		<SafeAreaView style={{flex: 1}}>
			<ScrollView
				contentInsetAdjustmentBehavior='automatic'
				style={styles.scrollView}
			>
				<Inset all={10}>
					<Checkbox
						checked={checked}
						title='Show profile details'
						onChanged={setChecked}
					/>
					<Checkbox
						title='Show profile details'
						checked={checked}
						onChanged={setChecked}
						type='circle-overflow'
					/>
					<Checkbox
						title='Show profile details'
						checked={checked}
						onChanged={setChecked}
						checkedColor='blue'
						type='flag'
					/>
					<Checkbox
						title='Show profile details'
						checked={checked}
						onChanged={setChecked}
						type='heart'
						checkedColor='red'
						unCheckedColor='red'
					/>
					<Checkbox
						checked={checked}
						title='Show profile details'
						onChanged={setChecked}
						type='lock'
					/>
					<Checkbox
						title='Show profile details'
						checked={checked}
						onChanged={setChecked}
						type='notification'
					/>
					<Checkbox
						checked={checked}
						title='Show profile details'
						onChanged={setChecked}
						type='square'
					/>
					<Checkbox
						title='Show profile details'
						checked={checked}
						onChanged={setChecked}
						checkedColor='green'
						unCheckedColor='red'
						type='square-overflow'
					/>
					<Checkbox
						checked={checked}
						title='Show profile details'
						onChanged={setChecked}
						type='volume'
					/>
					<Checkbox
						checked={checked}
						title='Show profile details'
						onChanged={setChecked}
						type='radio'
					/>
					<Inset vertical={10}>
						<Checkbox
							checked={checked}
							title='Show profile details'
							onChanged={setChecked}
							type='slider'
						/>
					</Inset>
					<Checkbox
						checked={checked}
						title='Show profile details'
						onChanged={setChecked}
						type='toggle'
					/>
					<Inset vertical={20}>
						<Divider title='Disable Status' />
					</Inset>
					<Checkbox
						title='Show profile details'
						checked={checked}
						onChanged={setChecked}
						type='radio'
						disable
					/>
					<Inset vertical={10}>
						<Checkbox
							title='Show profile details'
							checked={checked}
							onChanged={setChecked}
							type='slider'
							disable
						/>
					</Inset>
					<Checkbox
						title='Show profile details'
						checked={checked}
						onChanged={setChecked}
						type='toggle'
						disable
					/>
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
