import React from 'react';
import {Image} from 'react-native';
import {styles} from './styles';

const Logo = () => {
  return (
    <Image
      style={styles.logo}
      source={require('./../../utility/assets/logo.png')}
    />
  );
};

export default React.memo(Logo);
