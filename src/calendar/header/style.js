import {StyleSheet, Platform} from 'react-native';
import * as defaultStyle from '../../style';

const STYLESHEET_ID = 'stylesheet.calendar.header';

export default function(theme={}) {
  const appStyle = {...defaultStyle, ...theme};
  return StyleSheet.create({
    header: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: 250,
      alignSelf: 'center',
    },
    monthText: {
      fontFamily: appStyle.textMonthFontFamily,
      fontWeight: appStyle.textMonthFontWeight,
      color: '#444444',
      margin: 10,
      fontSize: 15
    },
    arrow: {
      left:20,
      paddingLeft: 15,
      position: 'absolute',
    },
    arrowRight: {
      right: 20,
      paddingRight: 15,
      position: 'absolute',
    },
    arrowImage: {
      width: 25,
      height: 25
    },
    week: {
      marginTop: 7,
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    dayHeader: {
      marginTop: 2,
      marginBottom: 7,
      width: 32,
      textAlign: 'center',
      fontSize: appStyle.textDayHeaderFontSize,
      fontFamily: 'ProximaNova-Semibold',
      color: '#444444',
      fontSize: 17
    },
    ...(theme[STYLESHEET_ID] || {})
  });
}
