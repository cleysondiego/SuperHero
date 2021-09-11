import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 8,
  },
  thumbnailHero: {
    width: 464,
    height: 261,
  },
  heroName: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  marginContainer: {
    marginHorizontal: 20,
    alignItems: 'center'
  },
  descriptionText: {
    fontSize: 16,
    marginTop: 8,
    marginBottom: 8
  }
});

export default styles;
