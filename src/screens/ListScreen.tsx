import React from 'react';
import { FlatList } from 'react-native';
import { View, Text, TouchableOpacity } from 'react-native-markup-kit';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../redux/reducers';
import {
  DeleteTodoAction,
  deleteTodos,
  saveTodo,
  SaveTodoAction,
  Todo,
} from '../redux/actions';
import { useNavigation } from '@react-navigation/native';
import { NAVIGATION_EDIT_SCREEN } from '../navigation/routes';
import { themeStyles } from '../theme/styles';
import { DateText } from '../components/DateText';
import { CheckBox } from '../components/CheckBox';
import { DeleteButton } from '../components/DeleteButton';
import { EditButton } from '../components/EditButton';
import { Button } from '../components/Button';

export const ListScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const todos = useSelector<StoreState, Todo[]>((state) => state.todos.todos);

  if (todos.length === 0) {
    return (
      <View flex center>
        <Text>Nothing in your todo list</Text>
        <Button
          title="Add todo"
          onPress={() => navigation.navigate(NAVIGATION_EDIT_SCREEN)}
        />
      </View>
    );
  }

  const removeItem = (item: Todo) => {
    dispatch<DeleteTodoAction>(deleteTodos(item.id));
  };

  const editItem = (item: Todo) => {
    navigation.navigate(NAVIGATION_EDIT_SCREEN, {
      item,
      title: 'Edit Item',
    });
  };

  const toggleItem = (item: Todo) => {
    const newItem: Todo = { ...item, completed: !item.completed };
    dispatch<SaveTodoAction>(saveTodo(newItem));
  };

  const renderItem = ({ item }: { item: Todo }) => {
    return (
      <View style={[themeStyles.todoItemWrap, { paddingRight: 4 }]} row centerV>
        <TouchableOpacity row centerV flex onPress={() => toggleItem(item)}>
          <CheckBox size={20} checked={item.completed} />
          <View paddingL-17>
            <Text>{item.title}</Text>
            <View paddingT-5 />
            <DateText date={item.date} />
          </View>
        </TouchableOpacity>
        <View row>
          <DeleteButton
            size={50}
            iconSize={24}
            onPress={() => removeItem(item)}
          />
          <EditButton size={50} iconSize={24} onPress={() => editItem(item)} />
        </View>
      </View>
    );
  };

  return (
    <View flex>
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item) => `todoListItem${item.id.toString()}`}
      />
    </View>
  );
};
