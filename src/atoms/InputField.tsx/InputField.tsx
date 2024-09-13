import React from 'react';
import {StyleProp, TextInput, View, ViewStyle} from 'react-native';
import {styles} from './styles';

type inputProps = {
  value: string;
  placeholder: string;
  inputStyle?: StyleProp<ViewStyle>;
  inputFieldStyle?: StyleProp<ViewStyle>;
  onChangeText: (e: any) => void;
};
const InputField = (props: inputProps) => {
  const {
    value,
    placeholder = 'Please enter text',
    inputStyle = {},
    inputFieldStyle = {},
    onChangeText = (e: any) => {},
  } = props;
  return (
    <View style={[styles.container, inputFieldStyle]}>
      <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={e => onChangeText(e)}
        cursorColor={'gray'}
        style={[styles.inputStyle, inputStyle]}
        placeholderTextColor={'gray'}
      />
    </View>
  );
};

export default InputField;
