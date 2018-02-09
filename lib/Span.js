import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

export default class Icon extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { children } = this.props;
        return <Text allowFontScaling={false}  {...this.props}>
            {children}
        </Text>
    }
}
