import * as React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ItemTile from '../../components/ItemTile';

const items = [
    {
        title: 'Fries (Fries) 500g',
        description: 'Himalaya moistorisin',
        size: '75G',
        price: 200,
        imageUrl:
            'https://image.shutterstock.com/z/stock-vector-baby-care-products-cosmetics-bottles-with-kids-cartoon-design-and-flying-soap-bubbles-plastic-1416397529.jpg',
    },
    {
        title: 'Fries (Fries) 500g pack',
        description: 'Himalaya moistorising baby soap olive oil and almond oil',
        size: '75G',
        price: 200,
        imageUrl:
            'https://image.shutterstock.com/z/stock-vector-baby-care-products-cosmetics-bottles-with-kids-cartoon-design-and-flying-soap-bubbles-plastic-1416397529.jpg',
    },
    {
        title: 'Fries (Fries) 500g pack',
        description: 'Himalaya moistorising baby soap olive oil and almond oil',
        size: '75G',
        price: 200,
        imageUrl:
            'https://image.shutterstock.com/z/stock-vector-baby-care-products-cosmetics-bottles-with-kids-cartoon-design-and-flying-soap-bubbles-plastic-1416397529.jpg',
    },
    {
        title: 'Fries (Fries) 500g pack',
        description: 'Himalaya moistorising baby soap olive oil and almond oil',
        size: '75G',
        price: 200,
        imageUrl:
            'https://image.shutterstock.com/z/stock-vector-baby-care-products-cosmetics-bottles-with-kids-cartoon-design-and-flying-soap-bubbles-plastic-1416397529.jpg',
    },
    {
        title: 'Fries (Fries) 500g pack',
        description: 'Himalaya moistorising baby soap olive oil and almond oil',
        size: '75G',
        price: 200,
        imageUrl:
            'https://image.shutterstock.com/z/stock-vector-baby-care-products-cosmetics-bottles-with-kids-cartoon-design-and-flying-soap-bubbles-plastic-1416397529.jpg',
    },
    {
        title: 'Fries (Fries) 500g pack',
        description: 'Himalaya moistorising baby soap olive oil and almond oil',
        size: '75G',
        price: 200,
        imageUrl:
            'https://image.shutterstock.com/z/stock-vector-baby-care-products-cosmetics-bottles-with-kids-cartoon-design-and-flying-soap-bubbles-plastic-1416397529.jpg',
    },
    {
        title: 'Fries (Fries) 500g pack',
        description: 'Himalaya moistorising baby soap olive oil and almond oil',
        size: '75G',
        price: 200,
        imageUrl:
            'https://image.shutterstock.com/z/stock-vector-baby-care-products-cosmetics-bottles-with-kids-cartoon-design-and-flying-soap-bubbles-plastic-1416397529.jpg',
    },
    {
        title: 'Fries (Fries) 500g pack',
        description: 'Himalaya moistorising baby soap olive oil and almond oil',
        size: '75G',
        price: 200,
        imageUrl:
            'https://image.shutterstock.com/z/stock-vector-baby-care-products-cosmetics-bottles-with-kids-cartoon-design-and-flying-soap-bubbles-plastic-1416397529.jpg',
    },
];

export default function Items(props) {
    return (
        <ScrollView>
            {items.map((item, key) => (
                <ItemTile key={key} {...item} />
            ))}
        </ScrollView>
    );
}
