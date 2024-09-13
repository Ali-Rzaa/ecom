import React from 'react';
import {View} from 'react-native';
import Logo from '../../atoms/Logo/Logo';
import {styles} from './styles';
import CustomText from '../../atoms/CustomText/CustomText';

const Header = () => {
  return (
    <View style={styles.container}>
      <Logo />
      <CustomText textStyle={styles.textStyle} title={'Shop Now'} />
    </View>
  );
};

export default React.memo(Header);
