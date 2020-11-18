import React, { useCallback, useState } from 'react';
import {
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
  Platform,
} from 'react-native';
import { Constants, View } from 'react-native-markup-kit';
import { useHeaderHeight } from '@react-navigation/stack';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  getDateTimeFormattedString,
  getDateFormattedString,
} from '../utils/date';
import { useDispatch } from 'react-redux';
import {
  newTodo,
  NewTodoAction,
  saveTodo,
  SaveTodoAction,
} from '../redux/actions';
import { themeStyles } from '../theme/styles';
import { DatePicker } from '../components/datePicker/DatePicker';
import { EditScreenRouteProp } from '../navigation/Navigation';
import { Button } from '../components/Button';

export const EditScreen = () => {
  const navigation = useNavigation();
  const route = useRoute<EditScreenRouteProp>();
  const item = route.params?.item;
  const [itemTitle, setItemTitle] = useState(item?.title ?? '');
  const [date, setDate] = useState(item?.date ?? new Date());
  const [pickerVisible, setPickerVisible] = useState(false);
  const headerHeight = useHeaderHeight();
  const dispatch = useDispatch();

  const onSave = useCallback(() => {
    if (!itemTitle) {
      Alert.alert('Validation Error', 'Please enter your todo title');
      return;
    }
    if (item) {
      dispatch<SaveTodoAction>(
        saveTodo({
          ...item,
          title: itemTitle,
          date,
        }),
      );
    } else {
      dispatch<NewTodoAction>(
        newTodo({
          title: itemTitle,
          date,
          completed: false,
        }),
      );
    }
    navigation.goBack();
  }, [itemTitle, date, dispatch, navigation, item]);

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
        style={themeStyles.inputWrap}>
        <View row centerV flex>
          <Text>Due: </Text>
          <Text>{getDateTimeFormattedString(date)}</Text>
          <View padding-2 />
          <Text>{getDateFormattedString(date)}</Text>
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
