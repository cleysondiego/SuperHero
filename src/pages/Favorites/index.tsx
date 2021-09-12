import React from 'react';
import { SafeAreaView, Share, Text, TouchableOpacity, View } from 'react-native';

import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';

import { removeFavoriteHero } from '../../redux/actions/heroes';
import { IHero } from '../../types/IHero';
import CharactersList from '../../components/CharactersList';

import styles from './styles';

interface IProps {
  removeFavoriteHero: (hero: IHero) => void;
  favoriteHeroes: IHero[];
}

const mapStateToProps = (state: any) => state.favoriteHeroes;

function Favorites({ favoriteHeroes, removeFavoriteHero }: IProps) {
  function handleRemoveFavoriteHero(hero: IHero) {
    removeFavoriteHero(hero);
  }

  async function shareFavorites() {
    try {
      const heroesName = favoriteHeroes.map(hero => {
        return ` ${hero.name}`;
      });
      await Share.share({
        message: `My favorites superheroes:${heroesName}`
      });
    } catch(error) {
      console.error(error);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      {favoriteHeroes.length > 0 ? (
        <>
          <CharactersList heroesList={favoriteHeroes} handleFavoriteHero={handleRemoveFavoriteHero} />
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={shareFavorites}>
              <Text style={styles.text}>
                <Icon name='share' size={24} />
                Share my favorites superheroes
              </Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <View style={styles.textContainer}>
          <Text style={styles.text}>No superhero as favorite</Text>
        </View>
      )}
    </SafeAreaView>
  )
}

export default connect(mapStateToProps, { removeFavoriteHero })(Favorites);
