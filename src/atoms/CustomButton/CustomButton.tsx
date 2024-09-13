import React, {useState} from 'react';
import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {styles} from './styles';

type buttonProps = {
  title: string;
  isDisabled?: boolean;
  onPress: () => void;
  buttonStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
};
const CustomButton = (props: buttonProps) => {
  const {
    title = 'Press',
    isDisabled = false,
    onPress = () => {},
    buttonStyle = {},
    titleStyle = {},
  } = props;
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      disabled={isDisabled}
      style={[isDisabled ? styles.button_disable : styles.button, buttonStyle]}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(CustomButton);
