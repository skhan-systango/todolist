import { StyleSheet } from 'react-native';
import materialTheme from '../../utils/theme';

export default StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    marginBottom: 12,
    alignSelf: 'stretch',
    borderWidth: 0.5,
    borderRadius: 8,
    borderColor: materialTheme.COLORS.WHITE,
    backgroundColor: materialTheme.COLORS.WHITE,
    shadowOpacity: 0.90,
    shadowRadius: 8,
    elevation: 1,
    shadowColor: materialTheme.COLORS.BLACK,
    shadowOffset: { height: 0, width: 0 },
    paddingHorizontal: 16,
    paddingVertical: 9,
    flexDirection: 'row',
    alignItems: 'center'
  },
  todoText: {
    fontSize: 16,
    color: materialTheme.COLORS.BLACK
  },
  completedTodoText: {
    fontSize: 16,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    color: materialTheme.COLORS.GREY
  },
  image: {
    width: 18,
    height: 18,
    marginRight: 10,
    padding: 5
  }
})