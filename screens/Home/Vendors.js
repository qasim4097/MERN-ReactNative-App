import * as React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import VendorTile from '../../components/VendorTile';

const vendors = [
    {
        name: 'VendorName',
        description: 'best vendor ever',
        rating: 4.4,
        imageUrl:
            'https://image.shutterstock.com/z/stock-vector-baby-care-products-cosmetics-bottles-with-kids-cartoon-design-and-flying-soap-bubbles-plastic-1416397529.jpg',
    },
    {
        name: '2nd Vendor',
        description: '2nd best vendor',
        rating: 4.4,
        imageUrl:
            'https://image.shutterstock.com/z/stock-vector-baby-care-products-cosmetics-bottles-with-kids-cartoon-design-and-flying-soap-bubbles-plastic-1416397529.jpg',
    },
];

export default function Vendors(props) {
    return (
        <ScrollView>
            {vendors.map((item, key) => (
                <VendorTile
                    key={key}
                    {...item}
                    navigate={props.navigation.navigate}
                />
            ))}
        </ScrollView>
    );
}
