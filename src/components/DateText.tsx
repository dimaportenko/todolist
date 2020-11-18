import React from 'react';
import { View, Text } from 'react-native-markup-kit';
import {
  getDateFormattedString,
  getDateTimeFormattedString,
} from '../utils/date';

interface DateTextProps {
  date: Date;
}

export const DateText = ({ date }: DateTextProps) => {
  return (
    <View row>
      <Text grey20>{getDateTimeFormattedString(date)}</Text>
      <View padding-2 />
      <Text grey20>{getDateFormattedString(date)}</Text>
    </View>
  );
};
