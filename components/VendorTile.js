import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { Rating } from 'react-native-ratings';

const VendorTile = (props) => {
    return (
        <Card
            style={styles.container}
            onPress={() => props.navigate('Items', { name: props.name })}>
            <Card.Cover source={{ uri: props.imageUrl }} />
            <Card.Content>
                <View style={styles.title}>
                    <Title>{props.name}</Title>
                    <View style={styles.rating}>
                        <Rating
                            ratingCount={1}
                            startingValue={props.rating / 5}
                            imageSize={16}
                            readonly
                            style={{ marginRight: 4 }}
                        />
                        <Text>{props.rating}/5</Text>
                    </View>
                </View>
                <Paragraph>{props.description}</Paragraph>
            </Card.Content>
        </Card>
    );
};

export default VendorTile;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginVertical: 5,
        justifyContent: 'space-evenly',
    },
    title: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    rating: {
        flexDirection: 'row',
        marginTop: 5,
    },
});
