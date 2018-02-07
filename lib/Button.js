import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

export default class Button extends React.Component {

    static defaultProps = {
        value: "",
        disabled: false,
        theme: "default",
        onPress: () => { }
    }

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return <View style={[styles.btn, styles[this.props.theme]]}>
            <Text style={styles[this.props.theme + "_txt"]}>{this.props.value}</Text>
        </View>
    }
}

const styles = StyleSheet.create({
    btn: {
        height: 36,
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: 16,
        paddingRight: 16,
        margin: 4,
        borderRadius: 2,
    },
    default: {
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
    },
    default_txt: {
        color: "#333"
    },

})