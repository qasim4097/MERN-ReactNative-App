import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

export default (props) => {
    const { text, ...restProps } = props;
    return (
        <Button style={styles.button} raised mode="contained" {...restProps}>
            {text}
        </Button>
    );
};

const styles = StyleSheet.create({
    button: {
        maxWidth: '50%',
        alignSelf: 'center',
    },
});
