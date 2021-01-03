import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { RouteNames } from '../utils';
import {
	StackNavigatorAvatar,
	StackNavigatorButton,
	StackNavigatorCheckbox,
	StackNavigatorDivider,
	StackNavigatorIcon,
	StackNavigatorLabeledButton,
	StackNavigatorProgressBar,
	StackNavigatorSocialIcon,
	StackNavigatorTitle
} from './StackNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
	return (
		<Drawer.Navigator>
			<Drawer.Screen
				name={RouteNames.Avatar}
				component={StackNavigatorAvatar}
			/>
			<Drawer.Screen
				name={RouteNames.Button}
				component={StackNavigatorButton}
			/>
			<Drawer.Screen
				name={RouteNames.Checkbox}
				component={StackNavigatorCheckbox}
			/>
			<Drawer.Screen
				name={RouteNames.Divider}
				component={StackNavigatorDivider}
			/>
			<Drawer.Screen name={RouteNames.Icon} component={StackNavigatorIcon} />

			<Drawer.Screen
				name={RouteNames.LabeledButton}
				component={StackNavigatorLabeledButton}
			/>

			<Drawer.Screen
				name={RouteNames.ProgressBar}
				component={StackNavigatorProgressBar}
			/>
			<Drawer.Screen
				name={RouteNames.SocialIcon}
				component={StackNavigatorSocialIcon}
			/>
			<Drawer.Screen name={RouteNames.Title} component={StackNavigatorTitle} />
		</Drawer.Navigator>
	);
};
export default DrawerNavigator;
