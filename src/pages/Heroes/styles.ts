import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  itemContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
  },
  heroImage: {
    height: 140,
    width: 140,
    borderRadius: 10,
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
  searchHero: {
    marginTop: 16,
    marginBottom: 16,
    height: 60,
    width: 120,
    borderRadius: 8,
    backgroundColor: '#ff0000',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchHeroButtonText: {
    color: '#fff',
    fontSize: 16
  }
});

export default styles;
