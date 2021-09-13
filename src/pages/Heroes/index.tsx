import React, { useEffect } from 'react';
import { ActivityIndicator, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { connect } from 'react-redux';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';

import { loadHeroes, addFavoriteHero } from '../../redux/actions/heroes';
import { incrementPage, decrementPage } from '../../redux/actions/pages';
import { IHero } from '../../types/IHero';
import { IStackParamList } from '../../types/IStackParamList';
import CharactersList from '../../components/CharactersList';

import styles from './styles';

interface IProps {
  loadHeroes: (offset: number) => void;
  addFavoriteHero: (hero: IHero) => void;
  incrementPage: () => void;
  decrementPage: () => void;
  heroes: IHero[];
  isLoading: boolean;
  hasError: boolean;
  previousPage: number;
  currentPage: number;
  nextPage: number;
}

type INavigationProps = StackNavigationProp<IStackParamList>;

const mapStateToProps = (state: any) => {
  return {
    heroes: state.heroes.heroes as IHero[],
    isLoading: state.heroes.isLoading as boolean,
    hasError: state.heroes.hasError as boolean,
    previousPage: state.pages.previousPage as number,
    currentPage: state.pages.currentPage as number,
    nextPage: state.pages.nextPage as number
  };
}

function Heroes({
  heroes,
  isLoading,
  hasError,
  loadHeroes,
  addFavoriteHero,
  incrementPage,
  decrementPage,
  previousPage,
  currentPage,
  nextPage
}: IProps) {
  const navigation = useNavigation<INavigationProps>();

  useEffect(() => {
    loadHeroes(currentPage);
  }, []);

  function handleFavoriteHero(hero: IHero) {
    addFavoriteHero(hero);
  }

  function handleNextPage() {
    loadHeroes(nextPage);
    incrementPage();
  }

  function handlePreviousPage() {
    if (previousPage === currentPage) return;
    loadHeroes(previousPage);
    decrementPage();
  }

  return (
    <SafeAreaView style={styles.container}>
      {isLoading && (
        <View
          style={styles.loadingContainer}
        >
          <ActivityIndicator size='large' color='#FF0000' />
        </View>
      )}

      {(heroes.length > 0 && !isLoading) && (
        <View style={styles.contentContainer}>
          <RectButton
            style={styles.button}
            onPress={() => navigation.navigate('SearchHero')}
          >
            <Text style={styles.text}>Find my superhero</Text>
          </RectButton>

          <CharactersList heroesList={heroes} handleFavoriteHero={handleFavoriteHero} />

          <View style={styles.buttonsContainer}>
            <TouchableOpacity onPress={handlePreviousPage}>
              <Text style={styles.textButton}>
                <Icon name='arrow-left' size={24} />
                Previous
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleNextPage}>
              <Text style={styles.textButton}>
                Next
                <Icon name='arrow-right' size={24} />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {hasError && (
        <View style={styles.errorContainer}>
          <Text style={styles.textError}>Unable to get the superheroes.</Text>
          <Text style={styles.textError}>Make sure do you have network access.</Text>
          <RectButton
            style={styles.button}
            onPress={() => loadHeroes(currentPage)}
          >
            <Text style={styles.text}>Try again!</Text>
          </RectButton>
        </View>
      )}
    </SafeAreaView>
  )
}

export default connect(
  mapStateToProps,
  {
    loadHeroes,
    addFavoriteHero,
    incrementPage,
    decrementPage
  }
)(Heroes);
