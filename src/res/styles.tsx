import {StyleSheet, Platform} from 'react-native';
import {} from './colors';
import fonts from './fonts';
import colors from './colors';
import sizes from './sizes';

class Styles {
  common = StyleSheet.create({
    bg_button: {
      height: sizes._45sdp,
      backgroundColor: colors._color_button_login,
      borderRadius: sizes._24sdp,
    },
    container: {
      flex: 1,
      paddingTop: sizes._30sdp,
      borderTopStartRadius: sizes._30sdp,
      borderTopEndRadius: sizes._30sdp,
      backgroundColor: colors._color_white,
    },
    bg_white_border_top: {
      flex: 1,
      backgroundColor: colors._color_white,
      borderTopLeftRadius: sizes._30sdp,
      borderTopRightRadius: sizes._30sdp,
      // paddingHorizontal: sizes._5sdp,
      paddingTop: sizes._5sdp,
      overflow: 'hidden',
    },
  });
  screen_home = StyleSheet.create({
    add_btn: {
      alignItems: 'flex-end',
    },
    ref_group: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: sizes._8sdp,
    },
    ref_title: {
      flex: 1,
      // fontSize: fonts._font_size_large,
    },
    ref_delete_btn: {
      position: 'absolute',
      right: 0,
    },
    borderWhite: {
      backgroundColor: colors._color_white,
      borderRadius: sizes._10sdp,
    },
  });
  flatlist_order = StyleSheet.create({
    item: {
      height: sizes._70sdp,
      flexDirection: 'row',
      backgroundColor: colors._color_white,
      borderTopRightRadius: sizes._10sdp,
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomRightRadius: sizes._10sdp,
    },
    imageItem: {
      height: sizes._50sdp,
      width: sizes._50sdp,
      marginLeft: sizes._30sdp,
      borderRadius: sizes._25sdp,
    },
    containerName: {
      flex: 1,
      marginHorizontal: sizes._20sdp,
    },
    containerTime: {
      flexDirection: 'row',
      marginTop: sizes._4sdp,
      alignItems: 'center',
    },
    iconTime: {
      width: sizes._10sdp,
      height: sizes._10sdp,
    },
    txtBlack: {
      color: colors._color_black,
      fontSize: sizes._14sdp,
      fontFamily: fonts.HelveticaNeueRegular,
    },
    txtMediumBlack: {
      color: colors._color_black,
      fontSize: sizes._14sdp,
      fontFamily: fonts.HelveticaNeueMedium,
    },
    txtMediumYellow: {
      color: colors._color_yellow,
      fontSize: sizes._14sdp,
      marginTop: sizes._4sdp,
      fontFamily: fonts.HelveticaNeueMedium,
    },
    txtGray: {
      color: '#999999',
      fontSize: sizes._14sdp,
      marginLeft: sizes._10sdp,
    },
    containerPrice: {
      justifyContent: 'center',
      alignItems: 'flex-end',
      marginRight: sizes._30sdp,
    },
  });
}

export default new Styles();
