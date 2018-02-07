import * as React from 'react';
import {
    ViewStyle,
    TextStyle,
    Image,
    ImageProperties,
    ImageStyle,
    ImageURISource,
    TouchableWithoutFeedbackProps,
    TouchableHighlightProperties,
    TouchableOpacityProperties,
    ViewProperties,
    TextInputProperties,
    TextInput,
    TextProperties,
    StatusBarProperties,
    KeyboardType,
    KeyboardTypeIOS,
    StyleProp,
    GestureResponderEvent,
    Animated,
    TransformsStyle,
    ActivityIndicatorProperties,
} from 'react-native';

export interface ButtonProps extends TouchableWithoutFeedbackProps {

}
export class Button extends React.Component<ButtonProps, any> { }