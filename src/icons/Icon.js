import PropTypes from 'prop-types';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';
import { IconProps } from '../index';

const Icon = (props: IconProps) => {
	let { type, ...attributes } = props;
	const getIcon = () => {
		switch (type) {
		case 'AntDesign':
			return AntDesign;
		case 'Entypo':
			return Entypo;
		case 'EvilIcons':
			return EvilIcons;
		case 'Feather':
			return Feather;
		case 'FontAwesome':
			return FontAwesome;
		case 'FontAwesome5':
			return FontAwesome5;
		case 'Fontisto':
			return Fontisto;
		case 'Foundation':
			return Foundation;
		case 'MaterialCommunityIcons':
			return MaterialCommunityIcons;
		case 'MaterialIcons':
			return MaterialIcons;
		case 'Octicons':
			return Octicons;
		case 'SimpleLineIcons':
			return SimpleLineIcons;
		case 'Zocial':
			return Zocial;
		case 'Ionicons':
		default:
			return Ionicons;
		}
	};

	var IconType = getIcon();

	return <IconType {...attributes} />;
};

Icon.propTypes = {
	name: PropTypes.string,
	type: PropTypes.oneOf([
		'AntDesign',
		'Entypo',
		'EvilIcons',
		'Feather',
		'FontAwesome',
		'FontAwesome5',
		'Fontisto',
		'Foundation',
		'Ionicons',
		'MaterialCommunityIcons',
		'MaterialIcons',
		'Octicons',
		'SimpleLineIcons',
		'Zocial'
	]),
	size: PropTypes.number,
	color: PropTypes.string,
	style: PropTypes.object
};

export default Icon;
