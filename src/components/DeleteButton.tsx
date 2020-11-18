import React from 'react';
import {
  StyleSheet,
  GestureResponderEvent,
  TouchableOpacity,
} from 'react-native';
import { Colors } from 'react-native-markup-kit';
// @ts-ignore
import Icon from 'react-native-vector-icons/dist/AntDesign';

interface DateTextProps {
  size: number | string;
  iconSize: number;
  onPress: (event: GestureResponderEvent) => void;
}

export const DeleteButton = ({ size, iconSize, onPress }: DateTextProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[{ height: size, width: size }, styles.wrap]}>
      <Icon name="delete" size={iconSize} color={Colors.red10} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrap: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
