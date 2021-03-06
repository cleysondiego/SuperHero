import React, { useState } from 'react';
import { View, TextInput, Text, ActivityIndicator } from 'react-native';

import { RectButton } from 'react-native-gesture-handler';
import { connect } from 'react-redux';

import { IHero } from '../../types/IHero';
import { searchHeroes } from '../../redux/actions/searchHeroes';
import { addFavoriteHero } from '../../redux/actions/heroes';
import CharactersList from '../../components/CharactersList';

import styles from './styles';

interface IProps {
  searchHeroes: (name: string) => void;
  addFavoriteHero: (hero: IHero) => void;
  heroes: IHero[];
  isSearching: boolean;
  lastSearch: String;
}

const mapStateToProps = (state: any) => {
  return {
    heroes: state.searchHeroes.heroes as IHero[],
    isSearching: state.searchHeroes.isSearching as boolean,
    lastSearch: state.searchHeroes.lastSearch as String
  };
}

function SearchHero({ heroes, isSearching, lastSearch, searchHeroes, addFavoriteHero }: IProps) {
  const [name, setName] = useState('');

  function handleSearch() {
    if (isSearching || name === lastSearch || !name) return;
    searchHeroes(name);
  }

  function handleFavoriteHero(hero: IHero) {
    addFavoriteHero(hero);
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Enter a superhero name'
        placeholderTextColor='black'
        value={name}
        onChangeText={setName}
      />

      <RectButton
        style={styles.searchHero}
        onPress={handleSearch}
      >
        <Text style={styles.searchHeroButtonText}>Search</Text>
      </RectButton>

      {isSearching && (
        <View
          style={styles.loadingContainer}
        >
          <ActivityIndicator size='large' color='#FF0000' />
        </View>
      )}

      {heroes.length > 0 &&
        <CharactersList heroesList={heroes} handleFavoriteHero={handleFavoriteHero} />
      }
    </View>
  );
}

export default connect(mapStateToProps, { searchHeroes, addFavoriteHero })(SearchHero);
