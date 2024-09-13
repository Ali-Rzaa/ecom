import React from 'react';
import CustomButton from '../../atoms/CustomButton/CustomButton';
import {View} from 'react-native';
import {styles} from './styles';
import CustomText from '../../atoms/CustomText/CustomText';

const ProductCard = () => {
  return (
    <View style={styles.container}>
      <CustomText textStyle={styles.name} title="Product Name" />
      <View style={styles.priceWrapper}>
        <CustomText title="Price: " />
        <CustomText title={'1000' + '$'} />
        <CustomButton
          onPress={() => {}}
          buttonStyle={styles.button}
          title={'Delete'}
        />
      </View>
    </View>
  );
};

export default ProductCard;
