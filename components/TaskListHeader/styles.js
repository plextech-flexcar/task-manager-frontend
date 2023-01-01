import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  active: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    width: 'auto',
    backgroundColor: '#27007A',
    borderRadius: 18,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  notActive: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    width: 'auto',
    borderRadius: 18,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  activeButton: {
    color: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  notActiveButton: {
    color: '#27007A',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  headerBack: {
    height: 130,
    width: '100%',
    paddingHorizontal: 10,
    backgroundColor: '#EDEDED',
    borderBottomColor: '#d1cdd8',
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: 'flex-end',
    flexDirection: 'column',
  },
  headerSearchRow: {
    width: '100%',
    justifyContent: 'space-between',
    backgroundColor: '#EDEDED',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  headerButtonRow: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  iconSize: {
    width: 16,
    height: 16,
  },
  numTasks: {
    color: '#76757D',
    paddingVertical: 4,
  },
  searchBarStyle: {
    width: '60%',
    height: 30,
    backgroundColor: '#FFFFFF',
  },
});
export { styles };
