import {Dimensions, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: '#1D9A7A',
    padding: 20,
    rowGap: 5,
    width: Dimensions.get('window').width / 2 - 20,
  },
  priceWrapper: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  button: {
    backgroundColor: '#F14812',
    right: 0,
    position: 'absolute',
  },
  name: {
    fontSize: 14,
    fontWeight: '500',
  },
});
