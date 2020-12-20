import PropTypes from 'prop-types';
import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Icon from '../icons/Icon';
import ButtonColor from './ButtonColor';

const LabeledButton = ({
  outline,
  fluid,
  circular,
  disabled,
  style,
  label,
  labelIcon,
  labelIconType,
  labelRight,
  color,
  title,
  loading,
  pointing,
}) => {
  const bgColor = ButtonColor.getBgColor(color);
  const textColor = ButtonColor.getTextColor(color);

  const getValueColor = () => {
    switch (color) {
      case 'red':
        return '#db2828';
      case 'primary':
        return '#2185d0';
      default:
        return 'rgba(0,0,0,.6)';
    }
  };

  const getLabel = () => (
    <View
      style={StyleSheet.flatten([
        styles.labelContainer,
        {
          backgroundColor: outline ? '#fff' : bgColor,
          flex: fluid ? 1 : null,
          borderColor: outline ? bgColor : '#fff',
          borderRightWidth: outline ? 1 : 0,
        },
      ])}
    >
      {labelIcon && labelIconType && (
        <Icon
          name={labelIcon}
          type={labelIconType}
          color={outline ? bgColor : textColor}
          style={StyleSheet.flatten([
            styles.icon,
            {
              marginRight: label ? 5 : 0,
            },
          ])}
        />
      )}
      {label && (
        <Text
          style={StyleSheet.flatten([
            styles.label,
            {
              color: outline ? bgColor : textColor,
            },
          ])}
        >
          {label}
        </Text>
      )}
      {labelRight && getPointing()}
    </View>
  );

  const getPointing = () =>
    pointing ? (
      <View
        style={StyleSheet.flatten([
          styles.pointing,
          {
            borderColor: outline ? bgColor : '#fff',
            transform: [
              { rotate: '45deg' },
              { translateX: labelRight ? -6 : -3 },
              { translateY: labelRight ? 0 : 4 },
            ],
          },
        ])}
      />
    ) : null;

  return (
    <TouchableOpacity
      disabled={disabled}
      style={StyleSheet.flatten([
        styles.button,
        style,
        {
          borderColor: bgColor,
          borderRadius: circular ? 50 : 3,
          opacity: disabled ? 0.45 : 1,
          width: fluid ? '100%' : null,
        },
      ])}
    >
      {!labelRight && getLabel()}
      {title && !loading && (
        <Text
          style={StyleSheet.flatten([
            styles.title,
            {
              color: getValueColor(),
              flex: fluid ? 1 : null,
            },
          ])}
        >
          {!labelRight && getPointing()}
          {title}
        </Text>
      )}
      {loading && (
        <ActivityIndicator
          style={StyleSheet.flatten([
            styles.indicator,
            { flex: fluid ? 1 : null },
          ])}
        />
      )}
      {labelRight && getLabel()}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  labelContainer: {
    height: '100%',
    paddingHorizontal: 21,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontWeight: 'bold',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    overflow: 'hidden',
    borderWidth: 1,
  },
  icon: {
    fontSize: 15,
  },
  indicator: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  title: {
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  pointing: {
    position: 'absolute',
    width: 10,
    height: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    top: '50%',
  },
});

LabeledButton.propTypes = {
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

export default LabeledButton;
