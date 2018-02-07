import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableWithoutFeedback
} from 'react-native';

export default class Icon extends React.Component {

    static defaultProps = {
        name: "",
        width: 20,
        onPress: () => { }
    }

    constructor(props) {
        super(props);
    }

    render() {
        const { children, width } = this.props;
        return <TouchableWithoutFeedback onPress={this.props.onPress}>
            <Image source={{ uri: this.props.name }}
                resizeMode="cover" resizeMethod="scale"
                style={[IconStyle.icon, { width: width, height: width }]} />
        </TouchableWithoutFeedback>
    }
}
const IconStyle = StyleSheet.create({
    icon: {

    }
})