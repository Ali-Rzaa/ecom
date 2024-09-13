import React, {Fragment} from 'react';
import ProductCard from '../../molecules/ProductCard/ProductCard';
import {ScrollView, View} from 'react-native';
import {styles} from './styles';

type productType = {
  id: number;
  name: string;
  price: string;
};

const ProductList = () => {
  const Data: productType[] = [
    {
      id: 0,
      name: 'product 1',
      price: '100',
    },
    {
      id: 1,
      name: 'product 1',
      price: '100',
    },
    {
      id: 2,
      name: 'product 1',
      price: '100',
    },
    {
      id: 3,
      name: 'product 1',
      price: '100',
    },
    {
      id: 4,
      name: 'product 1',
      price: '100',
    },
    {
      id: 5,
      name: 'product 1',
      price: '100',
    },
    {
      id: 6,
      name: 'product 1',
      price: '100',
    },
    {
      id: 7,
      name: 'product 1',
      price: '100',
    },
    {
      id: 8,
      name: 'product 1',
      price: '100',
    },
    {
      id: 9,
      name: 'product 1',
      price: '100',
    },
    {
      id: 10,
      name: 'product 1',
      price: '100',
    },
  ];
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      showsVerticalScrollIndicator={false}
      scrollEnabled={true}>
      <View style={styles.list}>
        {Data.map((item: productType) => (
          <Fragment key={item.id}>
            <ProductCard />
          </Fragment>
        ))}
      </View>
    </ScrollView>
  );
};

export default ProductList;
