import { StyleSheet } from 'react-native';
import colors from '../../colors';

export const HEIGHT = 60;

export default StyleSheet.create({
  base: {
    flexDirection: 'row',
    width: '90%',
    borderRadius: 6,
    backgroundColor: colors.white,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 2,
    minHeight: HEIGHT,
  },
  borderLeft: {
    borderLeftWidth: 5,
    borderLeftColor: colors.alto
  },
  iconContainer: {
    paddingHorizontal: 14,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    width: 20,
    height: 20
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 15,
    paddingBottom: 15,
  },
  closeButtonContainer: {
    paddingHorizontal: 14,
    alignItems: 'center',
    justifyContent: 'center'
  },
  closeIcon: {
    width: 9,
    height: 9
  },
  text1: {
    fontSize: 16,
    fontFamily: "Rubik-Regular",
    lineHeight: 25,
  },
  text2: {
    marginTop: 5,
    fontSize: 13,
    color: colors.dustyGray
  }
});
