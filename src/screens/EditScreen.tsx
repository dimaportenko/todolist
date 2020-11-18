import React, { useCallback, useState } from 'react';
import {
  TextInput,
  TouchableOpacity,
  Text,
  Button,
  Alert,
  Platform,
} from 'react-native';
import { Constants, View } from 'react-native-markup-kit';
import { useHeaderHeight } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native';
import {
  getDateTimeFormattedString,
  getDateFormattedString,
} from '../utils/date';
import { useDispatch } from 'react-redux';
import { newTodo, NewTodoAction } from '../redux/actions';
import { themeStyles } from '../theme/styles';
import { DatePicker } from '../components/datePicker/DatePicker.ios';

export const EditScreen = () => {
  const navigation = useNavigation();
  const [itemTitle, setItemTitle] = useState('');
  const [date, setDate] = useState(new Date());
  const [pickerVisible, setPickerVisible] = useState(false);
  const headerHeight = useHeaderHeight();
  const dispatch = useDispatch();

  const onSave = useCallback(() => {
    if (!itemTitle) {
      Alert.alert('Validation Error', 'Please enter your todo title');
      return;
    }
    dispatch<NewTodoAction>(
      newTodo({
        title: itemTitle,
        date,
        completed: false,
      }),
    );
    navigation.goBack();
  }, [itemTitle, date, dispatch, navigation]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button onPress={onSave} title="Save" />,
    });
  }, [navigation, onSave]);

  return (
    <View flex>
      <View style={themeStyles.inputWrap} centerV>
        <TextInput
          underlineColorAndroid="transparent"
          onChangeText={setItemTitle}
          value={itemTitle}
          placeholder="What are you going to do?"
        />
      </View>

      <TouchableOpacity
        onPress={() => setPickerVisible(true)}
        disabled={Platform.OS === 'android'}
        style={themeStyles.inputWrap}>
        <View row centerV flex>
          <Text>Due date: </Text>
          <Text
          // onPress={() => {
          //   if (Platform.OS === 'android') setEndTimePicker(true);
          //   else setIosEndDatePickerVisible(true);
          //}}
          >
            {getDateTimeFormattedString(date)}
          </Text>
          <View padding-2 />
          <Text
            onPress={() => {
              // if (Platform.OS === 'android') setEndDatePicker(true);
              // else setIosEndDatePickerVisible(true);
            }}>
            {getDateFormattedString(date)}
          </Text>
        </View>
      </TouchableOpacity>
      <DatePicker
        minimumDate={new Date()}
        visible={pickerVisible}
        value={date}
        setVisible={setPickerVisible}
        setDate={setDate}
        height={Constants.windowHeight - headerHeight}
      />
    </View>
  );
};
