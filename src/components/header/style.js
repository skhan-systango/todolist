import { StyleSheet } from 'react-native';
import materialTheme from '../../utils/theme';
import scale from '../../utils/scale';

export default StyleSheet.create({
  container: {
    padding: scale(8),
    borderColor: materialTheme.COLORS.BLACK,
    height: 56,
    flexDirection: 'row',
    backgroundColor: materialTheme.COLORS.HEADER_COLOR,
    justifyContent:'center',
    alignItems: 'center'
  },
  titleText:{
      fontSize: 18,
      color: materialTheme.COLORS.WHITE
  },
  addBtn:{
    margin: scale(16),
    backgroundColor: materialTheme.COLORS.BTN_BG,
    position: 'absolute',
    right: 0,
    padding: 5,
    paddingHorizontal: 8,
    borderRadius: 5
  },
  btnText: {
    color: materialTheme.COLORS.WHITE,
    fontSize: 14
  }
})