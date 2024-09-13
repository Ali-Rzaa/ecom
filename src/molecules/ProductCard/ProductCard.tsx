import React from 'react';
import CustomButton from '../../atoms/CustomButton/CustomButton';
import {View} from 'react-native';
import {styles} from './styles';
import CustomText from '../../atoms/CustomText/CustomText';

type productType = {
  id: any;
  name: string;
  price: string;
  onPress: () => void;
};
const ProductCard = (props: productType) => {
  const {id = 0, name = 'product', price = '00', onPress = () => {}} = props;
  return (
    <View style={styles.container}>
      <CustomText textStyle={styles.name} title={name} />
      <View style={styles.priceWrapper}>
        <CustomText title="Price: " />
        <CustomText title={price + '$'} />
        <CustomButton
          onPress={() => onPress()}
          buttonStyle={styles.button}
          title={'Delete'}
        />
      </View>
    </View>
  );
};

export default React.memo(ProductCard);
