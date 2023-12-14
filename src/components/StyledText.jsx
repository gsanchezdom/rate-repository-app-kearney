import React from "react";
import {Text, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    text: {
        fontSize: 12,
        color: 'grey'
    },

    bold: {
        fontWeith: 'bold'
    },

    blue: {
        color: 'blue'
    },

    big: {
        fontSize: 20
    },

    normal: {
        fontSize: 15
    },

    small: {
        fontSize: 10
    }
})

export default function StyledText({ blue, bold, children, big, small, normal }) {
    const textStyles = [
        styles.text,
        blue && styles.blue,
        big && styles.big,
        small && styles.small,
        bold && styles.bold,
        normal && styles.normal
    ]

    return (
        <Text style={textStyles}>
            {children}
        </Text>
    )
}