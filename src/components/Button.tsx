import React from 'react';
import {
  StyleSheet,
  GestureResponderEvent,
  TouchableOpacity,
} from 'react-native';
import { Text } from 'react-native-markup-kit';

interface DateTextProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
}

export const Button = ({ title, onPress }: DateTextProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.wrap}>
      <Text black color="#007AFF" text70>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrap: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});
