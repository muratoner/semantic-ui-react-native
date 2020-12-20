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

class Icon extends React.Component {
  state = {
    Icon: null,
  };

  componentDidMount() {
    this.setIcon(this.props.type);
  }

  setIcon(type) {
    let iconType;
    switch (type) {
      case 'AntDesign':
        iconType = AntDesign;
        break;
      case 'Entypo':
        iconType = Entypo;
        break;
      case 'EvilIcons':
        iconType = EvilIcons;
        break;
      case 'Feather':
        iconType = Feather;
        break;
      case 'FontAwesome':
        iconType = FontAwesome;
        break;
      case 'FontAwesome5':
        iconType = FontAwesome5;
        break;
      case 'Fontisto':
        iconType = Fontisto;
        break;
      case 'Foundation':
        iconType = Foundation;
        break;
      case 'Ionicons':
        iconType = Ionicons;
        break;
      case 'MaterialCommunityIcons':
        iconType = MaterialCommunityIcons;
        break;
      case 'MaterialIcons':
        iconType = MaterialIcons;
        break;
      case 'Octicons':
        iconType = Octicons;
        break;
      case 'SimpleLineIcons':
        iconType = SimpleLineIcons;
        break;
      case 'Zocial':
        iconType = Zocial;
        break;
      default:
        iconType = Ionicons;
    }
    this.setState({
      Icon: iconType,
    });
  }

  render() {
    return this.state.Icon ? (
      <this.state.Icon
        name={this.props.name}
        color={this.props.color}
        size={this.props.size}
        style={this.props.style}
      />
    ) : null;
  }
}

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
    'Zocial',
  ]),
  size: PropTypes.number,
  color: PropTypes.string,
  style: PropTypes.object,
};

export default Icon;
