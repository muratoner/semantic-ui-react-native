import {
	Avatar,
	Badge,
	Button,
	Center,
	Divider,
	Icon,
	Inset,
	Row
} from '@muratoner/semantic-ui-react-native'
import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'
const Component = () => {
	return (
		<SafeAreaView style={{flex: 1}}>
			<ScrollView
				contentInsetAdjustmentBehavior='automatic'
				style={styles.scrollView}
			>
				<Inset all={10}
				>
					<Center>
					<Divider title='Avatar' />
					<View
						style={{
							flexDirection: 'row',
							width: '100%',
							justifyContent: 'space-between'
						}}
					>
						<Badge size={10}>
							<Avatar
								title='Kermaine Schiller'
								size={64}
								titleShowLimit={2}
								circular={false}
								bordered
							/>
						</Badge>
						<Badge size={10} rounded circular={false}>
							<Avatar
								title='Kermaine Schiller'
								size={64}
								titleShowLimit={2}
								circular={false}
								bordered
							/>
						</Badge>
						<Badge
							size={10}
							rounded={false}
							circular={false}
							verticalPosition='bottom'
						>
							<Avatar
								title='Kermaine Schiller'
								size={64}
								titleShowLimit={2}
								circular={false}
								bordered
							/>
						</Badge>
					</View>
					<Divider title='Avatar' />
					<View
						style={{
							flexDirection: 'row',
							width: '100%',
							justifyContent: 'space-between'
						}}
					>
						<Badge overlap='circular' content='Online'>
							<Avatar title='Nihal Kerem' size={64} titleShowLimit={2} bordered />
						</Badge>
						<Badge overlap='circular' content='2' verticalPosition='bottom'>
							<Avatar title='Nihal Kerem' size={64} titleShowLimit={2} bordered />
						</Badge>
						<Badge
							overlap='circular'
							content={<Icon size={15} color='white' name='menu' />}
							style={{right: 1, bottom: 1}}
							size={15}
							color='red'
							verticalPosition='bottom'
						>
							<Avatar title='Nihal Kerem' size={64} titleShowLimit={2} bordered />
						</Badge>
					</View>
					<Divider title='Icon' />
					<Badge content='99+' horizontalPosition='left'>
						<Icon size={24} name='envelope' color='#191919' type='FontAwesome' />
					</Badge>
					<Divider title='Button' />
					<View style={styles.row}>
						<Badge content='99+'>
							<Button title={'Save'} />
						</Badge>
						<Badge color='red'>
							<Button title={'Save'} />
						</Badge>
						<Badge>
							<Button title={'Save'} />
						</Badge>
						<Badge
							color='black'
							content={
								<Icon
									name='bell'
									type='FontAwesome5'
									size={13}
									color='white'
								/>
							}
							size={20}
						>
							<Button title={'Notifications'} />
						</Badge>
					</View>
					<Divider title='Without children - Rounded' />
					<Row>
						<Center flex flexDirection="row" justifyContent="space-between">
							<Badge content='Info' color='blue' circular={false} rounded />
							<Badge content='New' color='green' circular={false} rounded />
							<Badge content='Deleted' color='red' circular={false} rounded />
							<Badge content='Warning' color='orange' circular={false} rounded />
						</Center>
					</Row>
					<Divider title='Without children - Flat' />
					<Row>
						<Center flex flexDirection="row" justifyContent="space-between">
							<Badge content='Info' color='blue' circular={false} rounded={false} />
							<Badge content='New' color='green' circular={false} rounded={false} />
							<Badge content='Deleted' color='red' circular={false} rounded={false} />
							<Badge
								content='Warning'
								color='orange'
								circular={false}
								rounded={false}
							/>
						</Center>
					</Row>
					<Divider title='Without children - Circular (Default)' />
					<Row>
						<Center flex flexDirection="row" justifyContent="space-between">
							<Badge content='Info' color='blue' />
							<Badge content='New' color='green' />
							<Badge content='Deleted' color='red' />
							<Badge content='Warning' color='orange' />
						</Center>
					</Row>
					</Center>
				</Inset>
			</ScrollView>
		</SafeAreaView>
	)
}
const styles = StyleSheet.create({
	scrollView: {
		flex: 1,
		height: '100%'
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%'
	}
})
export default Component
