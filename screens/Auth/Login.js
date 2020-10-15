import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Form from '../../components/Form';
import Button from '../../components/Button';

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const login = () => {
        console.log(email, password);
    };

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.formWrapper}>
                    <Form
                        label="Mobile Number / Email"
                        onChangeText={setEmail}
                        value={email}
                    />
                    <Form
                        label="Password"
                        onChangeText={setPassword}
                        value={password}
                        secureTextEntry={true}
                    />
                </View>
                <Button
                    mode="text"
                    text="Forgot Password?"
                    uppercase={false}
                    style={{
                        alignSelf: 'flex-end',
                        marginTop: -10,
                    }}
                />
                <Button text="Login" onPress={login} />
            </View>
            <Button
                mode="text"
                text="Create An Account"
                onPress={() => props.navigation.navigate('Register')}
            />
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    wrapper: {
        borderWidth: 0,
        margin: 40,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    formWrapper: {
        marginVertical: 5,
    },
});
