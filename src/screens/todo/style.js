import { StyleSheet } from 'react-native';
import materialTheme from '../../utils/theme';
import scale, { verticalScale } from '../../utils/scale';

export default StyleSheet.create({
    container: {
        flex: 1,
      },
      listContaner:{
          marginHorizontal: scale(16),
          paddingVertical: verticalScale(16)
      },
      inputConainer:{
        height: 80,
        borderColor: materialTheme.COLORS.GREY, 
        borderWidth: 1,
        borderRadius: 5,
        marginTop: verticalScale(10),
        textAlignVertical: 'top'
      },
      bottomSheetContainer:{
        backgroundColor: materialTheme.COLORS.POPUP_BG,
        padding: 16,
        height: verticalScale(100),
        borderRadius: 1,
        borderColor: materialTheme.COLORS.BLACK,
        borderWidth: 1
      },
      addBtn:{
        margin: 16,
        backgroundColor: materialTheme.COLORS.BTN_BG,
        position: 'absolute',
        right: 0,
        bottom: 0,
        padding: 5,
        paddingHorizontal: 8,
        borderRadius: 5,
      },
      btnText: {
        color: materialTheme.COLORS.WHITE,
        fontSize: 14
      }
})