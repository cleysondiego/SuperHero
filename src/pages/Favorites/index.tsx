import React from 'react';
import { SafeAreaView } from 'react-native';

import { connect } from 'react-redux';

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

  return (
    <SafeAreaView style={styles.container}>
      <CharactersList heroesList={favoriteHeroes} handleFavoriteHero={handleRemoveFavoriteHero} />
    </SafeAreaView>
  )
}

export default connect(mapStateToProps, { removeFavoriteHero })(Favorites);
