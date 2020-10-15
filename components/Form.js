import React from 'react';
import { View, StyleSheet } from 'react-native';

import { TextInput } from 'react-native-paper';

const Form = (props) => (
    <View style={styles.container}>
        <TextInput style={styles.input} mode="outlined" {...props} />
    </View>
);

export default Form;

const styles = StyleSheet.create({
    container: {
        marginBottom: 5,
    },
    input: {
        height: 40,
    },
});
