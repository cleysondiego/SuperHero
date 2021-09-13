import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  loadingContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 1,
  },
  button: {
    marginTop: 16,
    marginBottom: 16,
    height: 60,
    width: 168,
    borderRadius: 8,
    backgroundColor: '#ff0000',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 16
  },
  textError: {
    color: '#000',
    fontSize: 16
  },
  errorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 16,
    marginBottom: 16,
    height: 24,
    justifyContent: 'space-evenly'
  },
  textButton: {
    fontSize: 16,
    color: '#000'
  }
});

export default styles;
