import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Form from '../../components/Form';
import Button from '../../components/Button';

const Register = (props) => {
    const [FullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('+92');
    const [code, setCode] = useState('');
    const [numberVerified, setNumberVerified] = useState(false);

    const register = () => {
        console.log('register');
    };

    const verify = () => {};

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.formWrapper}>
                    {!numberVerified ? (
                        <>
                            <Form
                                label="Phone Number"
                                onChangeText={setPhoneNumber}
                                value={phoneNumber}
                            />
                            <Form
                                label="Code"
                                onChangeText={setCode}
                                value={code}
                            />
                        </>
                    ) : (
                        <>
                            <Form
                                label="Full Name"
                                onChangeText={setFullName}
                                value={FullName}
                            />
                            <Form
                                label="Email"
                                onChangeText={setEmail}
                                value={email}
                            />
                            <Form
                                label="Password"
                                onChangeText={setPassword}
                                value={password}
                                secureTextEntry={true}
                            />
                        </>
                    )}
                </View>
                {numberVerified ? (
                    <Button text="Register" onPress={register} />
                ) : (
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                        }}>
                        <Button text="Next" onPress={verify} disabled={!code} />
                        <Button text="Send Code" onPress={verify} />
                    </View>
                )}
            </View>
            <Button
                mode="text"
                text="Login"
                onPress={() => props.navigation.navigate('Login')}
            />
        </View>
    );
};

export default Register;

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
