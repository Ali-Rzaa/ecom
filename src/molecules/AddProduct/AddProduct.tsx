import React, {useCallback, useState} from 'react';
import {View} from 'react-native';
import InputField from '../../atoms/InputField.tsx/InputField';
import CustomText from '../../atoms/CustomText/CustomText';
import CustomButton from '../../atoms/CustomButton/CustomButton';
import {styles} from './styles';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const Validate = useCallback(() => {
    if (name == undefined || name == '' || price == undefined || price == '') {
      return true;
    } else {
      return false;
    }
  }, [name, price]);
  return (
    <View style={styles.container}>
      <CustomText title="Add Product" textStyle={styles.textStyle} />
      <InputField
        value={name}
        placeholder="Please enter name"
        onChangeText={(e: any) => setName(e)}
      />
      <InputField
        value={price}
        placeholder="Please enter price"
        onChangeText={(e: any) => setPrice(e)}
      />
      <View style={styles.buttonWrapper}>
        <CustomButton
          title={'Save'}
          onPress={() => {}}
          isDisabled={Validate()}
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.titleStyle}
        />
      </View>
    </View>
  );
};

export default AddProduct;
