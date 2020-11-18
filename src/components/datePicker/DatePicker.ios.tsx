import React from 'react';
import { View, Text, Constants, Colors } from 'react-native-markup-kit';
import { TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

interface DataPickerProps {
  visible: boolean;
  minimumDate: Date;
  value: Date;
  setDate: (date: Date) => void;
  setVisible: (visible: boolean) => void;
  height: number;
}

export const DatePicker = ({
  visible,
  value,
  setVisible,
  setDate,
  height,
}: DataPickerProps) => {
  if (!visible) {
    return null;
  }

  return (
    <View style={[styles.pickerContainerIos, { height }]}>
      <SafeAreaView style={{ backgroundColor: 'white' }}>
        <TouchableOpacity
          onPress={() => setVisible(false)}
          style={styles.header}>
          <Text style={styles.headerText}>Done</Text>
        </TouchableOpacity>
        <DateTimePicker
          minuteInterval={5}
          value={value}
          mode="datetime"
          display="spinner"
          onChange={(event, newDate) => {
            if (newDate) {
              setDate(newDate);
            }
          }}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  pickerContainer: {
    position: 'absolute',
    zIndex: 100,
    flex: 100,
    backgroundColor: 'rgba(1,1,1,0.8)',
    width: '100%',
    height: Constants.windowHeight,
    justifyContent: 'center',
  },
  pickerContainerIos: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.3)',
    width: '100%',
    justifyContent: 'flex-end',
  },
  header: {
    width: '100%',
    backgroundColor: Colors.white,
    alignItems: 'flex-end',
    paddingRight: 15,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: Colors.grey50,
  },
  headerText: {
    fontSize: 16,
    paddingVertical: 10,
    color: Colors.black,
  },
  pickerButtonContainer: {
    width: '100%',
    backgroundColor: Colors.black,
    alignItems: 'center',
  },
  pickerButtonText: {
    fontSize: 22,
    paddingVertical: 10,
    color: 'white',
  },
});
