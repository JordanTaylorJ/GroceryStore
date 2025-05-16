
import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from '../navigation/TabNavigator';

export default function BakeryScreen() {
    const items = [
        { name: 'Croissant', price: '$4.50', image: 'https://images.unsplash.com/photo-1529978215771-45f0bcc12de3?q=80&w=3115&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { name: 'Macaroon', price: '$2.00', image: 'https://plus.unsplash.com/premium_photo-1672986896021-cf725eba8ba3?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { name: 'Muffin', price: '$3.50', image: 'https://images.unsplash.com/photo-1637087788517-c63086ec5b7e?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { name: 'Eclair', price: '$4.00', image: 'https://images.unsplash.com/photo-1588685722676-bbabfec936d3?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { name: 'Chocolate Croissant', price: '$4.55', image: 'https://images.unsplash.com/photo-1597528662465-55ece5734101?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    ];

    return(
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Fresh baked goods</Text>
            {items.map((item, index) => (
                <View key={index} style={styles.itemContainer}>
                    <Image source={{uri: item.image}} style={styles.image} />
                    <View style={styles.details}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.price}>{item.price}</Text>
                        <TouchableOpacity style={styles.button} onPress={() => alert(`${item.name} added to cart`)}>
                            <Text style={styles.buttonText}>Add to Cart</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ))}
        </ScrollView>
    );
}