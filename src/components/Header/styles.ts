import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '12%',
    width: '100%',
    backgroundColor: '#3cba92',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  image: {
    width: 80,
    height: 80,
    marginTop: '5%',
    marginLeft: '5%',
    resizeMode: 'contain',
  },

  buttonsContainer: {
    marginRight: '5%',
    marginTop: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  cartButton: {
    marginRight:'3%',
    height: 40,
    width: 40,
    borderRadius: 50,
  },

  infoButton: {
    marginRight:'3%',
    height: 40,
    width: 40,
    borderRadius: 50,
  },

  buttonIcon: {
    marginTop: '18%',
    marginLeft: '20%',
  },
})

export default styles;