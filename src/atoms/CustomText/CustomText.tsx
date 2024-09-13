import React from 'react';
import {StyleProp, Text, TextStyle} from 'react-native';
import {styles} from './styles';

type TextProps = {
  title: string;
  textStyle?: StyleProp<TextStyle>;
};
const CustomText = (props: TextProps) => {
  const {title = 'text', textStyle = {}} = props;
  return <Text style={[styles.title, textStyle]}>{title}</Text>;
};

export default React.memo(CustomText);
