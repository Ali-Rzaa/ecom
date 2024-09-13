import React from 'react';
import ProductList from '../../organisms/ProductList/ProductList';
import Header from '../../molecules/Header/Header';
import {View} from 'react-native';
import {styles} from './styles';
import Separator from '../../atoms/Separator/Separator';
import AddProduct from '../../molecules/AddProduct/AddProduct';

const ProductListTemp = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Separator />
      <AddProduct />
      <Separator />
      <ProductList />
    </View>
  );
};

export default React.memo(ProductListTemp);
