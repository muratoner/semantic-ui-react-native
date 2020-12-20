import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from '../icons/Icon';
import ButtonColor from './ButtonColor';

const ComponentButton = ({
  circular,
  outline,
  disabled,
  iconName,
  iconType,
  color,
  title,
  style,
  fluid,
}) => {
  const bgColor = ButtonColor.getBgColor(color);
  const textColor = outline ? bgColor : ButtonColor.getTextColor(color);

  return (
    <TouchableOpacity
      disabled={disabled}
      style={StyleSheet.flatten([
        style,
        {
          backgroundColor: outline ? '#fff' : bgColor,
          paddingHorizontal: 11,
          paddingVertical: 11,
          borderRadius: circular ? 50 : 3,
          alignItems: 'center',
          flexDirection: 'row',
          alignSelf: 'flex-start',
          borderWidth: outline ? 1 : 0,
          borderColor: outline ? bgColor : null,
          opacity: disabled ? 0.45 : 1,
          flex: fluid ? 1 : null,
        },
      ])}
    >
      {iconName && iconType && (
        <Icon
          name={iconName}
          type={iconType}
          color={textColor}
          style={StyleSheet.flatten([
            styles.icon,
            {
              marginRight: title ? 5 : 0,
            },
          ])}
        />
      )}
      {title && (
        <Text
          style={{
            fontWeight: 'bold',
            color: textColor,
          }}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    fontSize: 15,
  },
});

ComponentButton.propTypes = {
  title: PropTypes.string,
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'red',
    'positive',
    'negative',
  ]),
  iconName: PropTypes.string,
  iconType: PropTypes.oneOf([
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
};

export default ComponentButton;
