import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, Colors } from 'react-native-markup-kit';
// @ts-ignore
import Icon from 'react-native-vector-icons/dist/Entypo';

interface DateTextProps {
  size: number;
  checked: boolean;
}

export const CheckBox = ({ size, checked }: DateTextProps) => {
  return (
    <View style={[{ height: size, width: size }, styles.wrap]}>
      {checked && <Icon name="check" size={size - 5} />}
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    borderColor: Colors.black,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
