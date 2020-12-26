import {
    createStackNavigator,
    StackNavigationOptions
} from '@react-navigation/stack';
import { RouteParams } from '../../utils/RouteParams';

export default {
	Stack: createStackNavigator<RouteParams>(),
	ScreenOptionStyle: {
	} as StackNavigationOptions
};
