import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';

import Icon from './Icon'

export default class Button extends React.Component {

    static defaultProps = {
        value: "",
        disabled: false,
        theme: "default",
        style: null,
        icon: null,
        loading: false,
        loadingStyle: null,
        loadingProps: {
            color: "#333",
            size: "small"
        },
        onPress: () => { }
    }

    constructor(props) {
        super(props);
    }

    render() {
        const { loadingProps, loading, icon } = this.props;
        return <TouchableOpacity onPress={this.props.onPress}>
            <View style={[styles.btn, styles[this.props.theme], this.props.style]}>
                {loading && <ActivityIndicator
                    animating={true}
                    style={[styles.loading, this.props.loadingStyle]}
                    color={loadingProps.color}
                    size={loadingProps.size}
                    {...loadingProps}
                />}
                {!loading && icon && <Icon name={icon} style={styles.icon} />}
                {!loading && <Text style={[styles.txt, styles[this.props.theme + "_txt"]]}>{this.props.value}</Text>}
            </View>
        </TouchableOpacity>
    }
}

const styles = StyleSheet.create({
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 36,
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: 16,
        paddingRight: 16,
        margin: 4,
        borderRadius: 2,
    },
    icon:{
        marginRight:1,
    },
    txt: {
        textAlign: 'center',
    },
    default: {
        backgroundColor: "#fff",
    },
    default_txt: {
        color: "#333",
    },

})