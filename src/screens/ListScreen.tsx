import React from 'react';
import { FlatList } from 'react-native';
import { View, Text } from 'react-native-markup-kit';
import { useSelector } from 'react-redux';
import { StoreState } from '../redux/reducers';
import { Todo } from '../redux/actions';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NAVIGATION_EDIT_SCREEN } from '../navigation/routes';
import { themeStyles } from "../theme/styles";
import { DateText } from "../components/DateText";

export const ListScreen = () => {
  const navigation = useNavigation();
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

  const renderItem = ({ item }: { item: Todo }) => {
    return (
      <View style={themeStyles.todoItemWrap} centerV>
        <Text>{item.title}</Text>
        <View paddingT-5 />
        <DateText date={item.date} />
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
