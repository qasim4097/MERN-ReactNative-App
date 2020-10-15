import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';

const ItemTile = (props) => {
    return (
        <Card style={styles.container}>
            <Card.Cover style={styles.image} source={{ uri: props.imageUrl }} />
            <Card.Content>
                <Title>{props.title}</Title>
                <Paragraph>{props.description}</Paragraph>
                <View style={styles.bottom}>
                    <View>
                        <Paragraph>Price: Rs {props.price}</Paragraph>
                        <Paragraph>Quantity: {props.size}</Paragraph>
                    </View>
                    <Card.Actions>
                        <Button>Add</Button>
                    </Card.Actions>
                </View>
            </Card.Content>
        </Card>
    );
};

export default ItemTile;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginVertical: 5,
        padding: 0,
        backgroundColor: 'white',
        justifyContent: 'space-around',
    },
    bottom: {
        marginBottom: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    image: {
        height: 100,
    },
});
