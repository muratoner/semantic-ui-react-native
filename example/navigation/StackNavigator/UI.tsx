import React from 'react';
import { ScreenUI } from '../../screens';
import { RouteNames } from '../../utils';
import Base from './Base';

const Stack = Base.Stack;
const Screen = Stack.Screen;
const options = {
	cardStyle: {
		backgroundColor: 'white'
	}
};

export default () => {
	return (
		<Stack.Navigator screenOptions={Base.ScreenOptionStyle}>
			<Screen
				name={RouteNames.UI}
				options={{
					...options
				}}
				component={ScreenUI}
			/>
		</Stack.Navigator>
	);
};
