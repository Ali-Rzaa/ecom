import React from 'react';
import {
  KeyboardType,
  StyleProp,
  TextInput,
  View,
  ViewStyle,
} from 'react-native';
import {styles} from './styles';

type inputProps = {
  value: string;
  placeholder: string;
  keyboardType?: KeyboardType;
  inputStyle?: StyleProp<ViewStyle>;
  inputFieldStyle?: StyleProp<ViewStyle>;
  onChangeText: (e: any) => void;
};
const InputField = (props: inputProps) => {
  const {
    value,
    placeholder = 'Please enter text',
    keyboardType = 'default',
    inputStyle = {},
    inputFieldStyle = {},
    onChangeText = (e: any) => {},
  } = props;
  return (
    <View style={[styles.container, inputFieldStyle]}>
      <TextInput
        value={value}
        placeholder={placeholder}
        keyboardType={keyboardType ? keyboardType : 'default'}
        onChangeText={e => onChangeText(e)}
        cursorColor={'gray'}
        style={[styles.inputStyle, inputStyle]}
        placeholderTextColor={'gray'}
      />
    </View>
  );
};

export default React.memo(InputField);
