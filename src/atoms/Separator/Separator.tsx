import React from 'react';
import {View} from 'react-native';

const Separator = () => {
  return (
    <View
      style={{
        borderColor: '#1D9A7A',
        borderBottomWidth: 0.5,
        marginVertical: 5,
      }}
    />
  );
};

export default React.memo(Separator);
