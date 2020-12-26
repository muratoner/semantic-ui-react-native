import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { RouteNames } from '../utils';
import {
	StackNavigatorButton,
	StackNavigatorDivider,
	StackNavigatorIcon,
	StackNavigatorLabeledButton,
	StackNavigatorTitle
} from './StackNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
	return (
		<Drawer.Navigator>
			<Drawer.Screen
				name={RouteNames.Button}
				component={StackNavigatorButton}
			/>
			<Drawer.Screen
				name={RouteNames.LabeledButton}
				component={StackNavigatorLabeledButton}
			/>
			<Drawer.Screen name={RouteNames.Icon} component={StackNavigatorIcon} />
			<Drawer.Screen
				name={RouteNames.Divider}
				component={StackNavigatorDivider}
			/>
			<Drawer.Screen
				name={RouteNames.Title}
				component={StackNavigatorTitle}
			/>
		</Drawer.Navigator>
	);
};
export default DrawerNavigator;
