import * as React from 'react';
import {
	ActivityIndicatorProps,
	ImageSourcePropType,
	ImageStyle,
	StyleProp,
	TextProps as TextProperties,
	TextStyle,
	TouchableHighlightProps,
	TouchableNativeFeedbackProps,
	TouchableOpacityProps,
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

export interface LabeledButtonProps
  extends TouchableOpacityProps,
    TouchableNativeFeedbackProps {
  /**
   * Specify other touchable such as TouchableOpacity/TouchableNativeFeedback
   *
   * Default is TouchableOpacity on IOS and TouchableNativeFeedback on Android
   */
  TouchableComponent?: React.ComponentClass;

  /**
   * Specify a different component as the background for the button.
   * Useful for if you want to make a button with a gradient background.
   *
   * @default View
   */
  ViewComponent?: React.ComponentClass<any>;

  /**
   * Additional styling for button (background) view component
   *
   * @default null
   */
  buttonStyle?: StyleProp<ViewStyle>;

  /**
   * Labeled Button value
   */
  title?: string;

  /**
   * If to show the icon on the right
   *
   * @default false
   */
  iconRight?: boolean;

  /**
   * Icon name
   */
  iconName?: string;

  /**
   * Icon type
   */
  iconType?: IconType;

  /**
   * Style for the container around the icon
   */
  iconContainerStyle?: StyleProp<ViewStyle>;

  /**
   * Title styling
   */
  titleStyle?: StyleProp<TextStyle>;

  /**
   * Optional props for the title inside the button
   */
  titleProps?: TextProperties;

  /**
   * Styling for Component container
   *
   * @default null
   */
  containerStyle?: StyleProp<ViewStyle>;

  /**
   * Display a loading spinner
   *
   * @default false
   */
  loading?: boolean;

  /**
   * Additional style to applied to the ActivityIndicator
   */
  loadingStyle?: StyleProp<ViewStyle>;

  /**
   * Additional props to applied to the ActivityIndicator
   */
  loadingProps?: ActivityIndicatorProps;

  /**
   * Object of props to be applied to the linearGradient view(ViewComponent)
   */
  linearGradientProps?: Object;

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
   * Style of the title when the button is disabled
   */
  disabledTitleStyle?: StyleProp<TextStyle>;

  /**
   * Style of the button when disabled
   */
  disabledStyle?: StyleProp<ViewStyle>;

  /**
   * If the button has raised styling
   *
   * @default false
   */
  raised?: boolean;

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
   * Button type outline
   */
  outline?: boolean;

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
}

export interface ButtonProps
  extends TouchableOpacityProps,
    TouchableNativeFeedbackProps {
  /**
   * Specify other touchable such as TouchableOpacity/TouchableNativeFeedback
   *
   * Default is TouchableOpacity on IOS and TouchableNativeFeedback on Android
   */
  TouchableComponent?: React.ComponentClass;

  /**
   * Specify a different component as the background for the button.
   * Useful for if you want to make a button with a gradient background.
   *
   * @default View
   */
  ViewComponent?: React.ComponentClass<any>;

  /**
   * Additional styling for button (background) view component
   *
   * @default null
   */
  buttonStyle?: StyleProp<ViewStyle>;

  /**
   * Button title
   */
  title?: string;

  /**
   * If to show the icon on the right
   *
   * @default false
   */
  iconRight?: boolean;

  /**
   * Icon name
   */
  iconName?: string;

  /**
   * Icon type
   */
  iconType?: IconType;

  /**
   * Style for the container around the icon
   */
  iconContainerStyle?: StyleProp<ViewStyle>;

  /**
   * Title styling
   */
  titleStyle?: StyleProp<TextStyle>;

  /**
   * Optional props for the title inside the button
   */
  titleProps?: TextProperties;

  /**
   * Styling for Component container
   *
   * @default null
   */
  containerStyle?: StyleProp<ViewStyle>;

  /**
   * Display a loading spinner
   *
   * @default false
   */
  loading?: boolean;

  /**
   * Additional style to applied to the ActivityIndicator
   */
  loadingStyle?: StyleProp<ViewStyle>;

  /**
   * Additional props to applied to the ActivityIndicator
   */
  loadingProps?: ActivityIndicatorProps;

  /**
   * Object of props to be applied to the linearGradient view(ViewComponent)
   */
  linearGradientProps?: Object;

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
   * Style of the title when the button is disabled
   */
  disabledTitleStyle?: StyleProp<TextStyle>;

  /**
   * Style of the button when disabled
   */
  disabledStyle?: StyleProp<ViewStyle>;

  /**
   * If the button has raised styling
   *
   * @default false
   */
  raised?: boolean;

  /**
   * Button type outline
   */
  outline?: boolean;

  /**
   * Button width of its container
   */
  fluid?: boolean;

  /**
   * Button circular
   */
  circular?: boolean;
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

export interface ButtonGroupProps {
  /**
   * Allows the user to select multiple items
   *
   * @default false
   */
  selectMultiple?: boolean;

  /**
   * Current selected index of array of buttons
   */
  selectedIndex?: number | null;

  /**
   * The indexes that are selected. Used with 'selectMultiple'
   *
   * @default []
   */
  selectedIndexes?: number[];

  /**
   * Array of buttons for component, if returning a component, must be an object with { element: componentName }
   */
  buttons: string[];

  /**
   * Choose other button component such as TouchableOpacity
   *
   * @default TouchableHighlight
   */
  Component?: React.ComponentType<any>;

  /**
   * Specify styling for main button container
   */
  containerStyle?: StyleProp<ViewStyle>;

  /**
   * Specify styling for buttons container
   */
  buttonContainerStyle?: StyleProp<ViewStyle>;

  /**
   * inherited styling	specify styling for button
   */
  buttonStyle?: StyleProp<ViewStyle>;

  /**
   * Specify styling selected button
   *
   * @default 'white'
   */
  selectedButtonStyle?: StyleProp<ViewStyle>;

  /**
   * Specify specific styling for text
   */
  textStyle?: StyleProp<TextStyle>;

  /**
   * Specify specific styling for text in the selected state
   */
  selectedTextStyle?: StyleProp<TextStyle>;

  /**
   * Specify underlayColor for TouchableHighlight
   *
   * @default 'white'
   */
  underlayColor?: string;

  /**
   * Determines what the opacity of the wrapped view should be when touch is active.
   */
  activeOpacity?: number;

  /**
   * Border radius for the container
   */
  containerBorderRadius?: number;

  /**
   * Controls if buttons are disabled
   *
   * Setting `true` makes all of them disabled, while using an array only makes those indices disabled
   *
   * @default false
   */
  disabled?: boolean | number[];

  /**
   * Styling for each button when disabled
   */
  disabledStyle?: StyleProp<ViewStyle>;

  /**
   * Styling for each selected button when disabled
   */
  disabledSelectedStyle?: StyleProp<ViewStyle>;

  /**
   * Styling for the text of each button when disabled
   */
  disabledTextStyle?: StyleProp<TextStyle>;

  /**
   * Styling for the text of each selected button when disabled
   */
  disabledSelectedTextStyle?: StyleProp<TextStyle>;

  /**
   * Display in vertical orientation
   *
   * @default false
   */
  vertical?: boolean;

  /**
   * Method to update Button Group Index
   */
  onPress(selectedIndex: number): void;
}

export class ButtonGroup extends React.Component<ButtonGroupProps> {}

export interface DividerProps {
  /**
   * Title text
   */
  text?: string;
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
