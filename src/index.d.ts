import * as React from 'react';
import {
	ImageSourcePropType,
	ImageStyle,
	StyleProp,
	TextProps as TextProperties,
	TextStyle,
	TouchableHighlightProps,
	ViewStyle,
} from 'react-native';

export interface TouchableComponent extends TouchableHighlightProps {}

/**
 * Supports auto complete for most used types as well as any other string type.
 */
export type IconType =
  | 'AntDesign'
  | 'Entypo'
  | 'EvilIcons'
  | 'Feather'
  | 'FontAwesome'
  | 'FontAwesome5'
  | 'Fontisto'
  | 'Foundation'
  | 'Ionicons'
  | 'MaterialCommunityIcons'
  | 'MaterialIcons'
  | 'Octicons'
  | 'SimpleLineIcons'
  | 'Zocial';

export interface IconProps {
  name?: string;
  color?: string;
  size?: number;
  type?: IconType;
  style?: StyleProp<TextStyle>;
}

export interface TextProps extends TextProperties {
  /**
   * Additional styling for Text
   */
  style?: StyleProp<TextStyle>;
}

/**
 * HTML Style Headings
 *
 */
export class Text extends React.Component<TextProps, any> {}

export interface LabeledButtonProps {
  /**
   * Button style
   */
  style?: ViewStyle;

  /**
   * Labeled Button value
   */
  title?: string;

  /**
   * Icon name
   */
  iconName?: string;

  /**
   * Icon type
   */
  iconType?: IconType;

  /**
   * Display a loading spinner
   *
   * @default false
   */
  loading?: boolean;

  /**
   * Type of button
   *
   */
  color?: 'primary' | 'secondary' | 'red' | 'positive' | 'negative';

  /**
   * If the user is allowed to interact with the button
   *
   * @default false
   */
  disabled?: boolean;

  /**
   * Button label
   */
  label?: string;

  /**
   * Button label icon name. basket, user etc.
   */
  labelIcon?: string;

  /**
   * Button label icon type. AntDesign, MaterialIcons etc.
   */
  labelIconType?: IconType;

  /**
   * Button label right
   */
  labelRight?: boolean;

  /**
   * Button pointing
   */
  pointing?: boolean;

  /**
   * Button width of its container
   */
  fluid?: boolean;

  /**
   * Button circular
   */
  circular?: boolean;

  /**
   * Button type
   * @default solid
   */
  type?: 'solid' | 'outline';
}

export interface ButtonProps {
  /**
   * Button style
   */
  style?: StyleProp<ViewStyle>;

  /**
   * Button title
   */
  title?: string;

  /**
   * Icon name
   */
  iconName?: string;

  /**
   * Icon type
   */
  iconType?: IconType;

  /**
   * Display a loading spinner
   *
   * @default false
   */
  loading?: boolean;

  /**
   * Type of button
   *
   */
  color?: 'primary' | 'secondary' | 'red';

  /**
   * If the user is allowed to interact with the button
   *
   * @default false
   */
  disabled?: boolean;

  /**
   * If the button has raised styling
   *
   * @default false
   */
  raised?: boolean;

  /**
   * Button width of its container
   */
  fluid?: boolean;

  /**
   * Button circular
   */
  circular?: boolean;

  /**
   * Button type
   * @default solid
   */
  type?: 'solid' | 'outline';

  /**
   * onPress callback function
   */
  onPress?: () => void;
}

export type IconNode = boolean | React.ReactElement<{}> | Partial<IconProps>;

/**
 * Button component
 *
 */
export class Button extends React.Component<ButtonProps, any> {}

/**
 * Labeled Button component
 *
 */
export class LabeledButton extends React.Component<LabeledButtonProps, any> {}
export interface DividerProps {
  /**
   * Title title
   */
  title?: string;

  /**
   * Icon config
   */
  icon?: IconProps;
}

export class Divider extends React.Component<DividerProps> {}

export interface ProgressBarProps {
  /**
   * Progress size
   */
  progress?: number;

  /**
   * Show progress bar progress value
   */
  showProgressValue?: boolean;

  /**
   * Progress bar height
   */
  height?: number | string;

  /**
   * Progress bar width
   */
  width?: number | string;

  /**
   * Progress bar bottom text
   */
  bottomText?: string;

  /**
   * Progress bar bottom text include progress value
   */
  bottomTextIncludeProgress?: boolean;

  /**
   * Red to green auto background color transition
   */
  autoColored?: boolean;
}

export class ProgressBar extends React.Component<ProgressBarProps> {}

export interface TitleProps {
  /**
   * Title text
   *
   */
  text?: string;

  /**
   * Title type
   *
   * @default medium
   */
  size?: 'huge' | 'large' | 'medium' | 'small' | 'tiny';
}

export class Title extends React.Component<TitleProps> {}

/**
 * Icon component
 */
export class Icon extends React.Component<IconProps> {}

export interface AvatarProps {
  /**
   * Title text
   */
  title?: string;

  /**
   * Title show characters count limit
   *
   * @default showing all chars
   */
  titleShowLimit?: number;

  /**
   * Avatar image source
   */
  source?: ImageSourcePropType;

  /**
   * Avatar image or text size
   *
   * @default 32
   */
  size?: number;

  /**
   * Title text style
   */
  titleStyle?: TextStyle;

  /**
   * Image avatar style
   */
  imageStyle?: ImageStyle;

  /**
   * Title text style
   */
  iconStyle?: TextStyle;

  /**
   * Icon config
   */
  icon?: IconProps;

  /**
   * Avatar, Title or Icon show with rounded border
   *
   * @default true
   */
  rounded?: boolean;

  /**
   * Auto generate random background color for title avatar
   *
   * @default true
   */
  withRandomColor?: boolean;

  /**
   * If you don't want shortest title then set false.
   * @example 'Murat ÖNER' title shortest to 'MÖ'.
   * @default true
   */
  shortestTitle?: boolean;

  /**
   * onPress callback function for avatar container
   */
  onPress?: () => void;
}

/**
 * Avatar component
 */
export class Avatar extends React.Component<AvatarProps> {}

export interface CheckboxProps {
  /**
   * Checkbox checked
   * @default false
   */
  checked: boolean;

  /**
   * Container style
   */
  containerStyle?: ViewStyle;

  /**
   * Icon style
   */
  iconStyle?: TextStyle;

  /**
   * Title Style
   */
  titleStyle?: TextStyle;

  /**
   * Icon element or icon name
   */
  icon?: React.ReactElement | string;

  /**
   * If you set icon property with string then you can use this prop
   */
  iconType?: IconType;

  /**
   * OnChanged callback
   */
  onChanged?: (checked: boolean) => void;

  /**
   * Checkbox type
   */
  type?:
    | 'square'
    | 'square-overflow'
    | 'circle'
    | 'circle-overflow'
    | 'flag'
    | 'heart'
    | 'volume'
    | 'notification'
    | 'lock'
    | 'radio'
    | 'slider'
    | 'toggle';

  /**
   * Checkbox checked color
   */
  checkedColor?: string;

  /**
   * Checkbox unChecked color
   */
  unCheckedColor?: string;

  /**
   * Disable checkbox
   */
  disable?: boolean;
}

export class Checkbox extends React.Component<CheckboxProps> {}

export interface SocialIconProps {
  /**
   * Button style
   */
  style?: ViewStyle;

  /**
   * Icon style
   */
  iconStyle?: TextStyle;

  /**
   * Title Style
   */
  titleStyle?: TextStyle;

  /**
   * Icon element or icon name
   */
  icon?: React.ReactElement | IconProps;

  /**
   * Social icon type
   */
  type:
    | 'angellist'
    | 'codepen'
    | 'envelope'
    | 'etsy'
    | 'facebook'
    | 'flickr'
    | 'foursquare'
    | 'github'
    | 'gitlab'
    | 'instagram'
    | 'linkedin'
    | 'medium'
    | 'pinterest'
    | 'quora'
    | 'reddit'
    | 'soundcloud'
    | 'stack-overflow'
    | 'steam'
    | 'stumbleupon'
    | 'tumblr'
    | 'twitch'
    | 'twitter'
    | 'google'
    | 'vimeo'
    | 'vk'
    | 'weibo'
    | 'wordpress'
    | 'youtube';

  /**
   * Disable
   * @default false
   */
  disable?: boolean;

  /**
   * raised adds a drop shadow, set to false to remove
   * @default true
   */
  raised?: boolean;

  /**
   * onPress callback function
   */
  onPress?: () => void;

  /**
   * Shows loading indicator
   * @default false
   */
  loading?: boolean;

  /**
   * Title
   * @default Sign In With {type=Facebook,Google,Twitter etc.}
   */
  title?: string;

  /**
   * Light theme
   * @default false
   */
  light?: boolean;

  /**
   * Button width of its container
   */
  fluid?: boolean;

  /**
   * Button circular
   */
  circular?: boolean;
}

export class SocialIcon extends React.Component<SocialIconProps> {}
