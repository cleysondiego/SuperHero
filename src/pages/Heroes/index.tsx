import React, { useEffect } from 'react';
import { ActivityIndicator, SafeAreaView, Text, View } from 'react-native';

import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { connect } from 'react-redux';
import { RectButton } from 'react-native-gesture-handler';

import { loadHeroes, addFavoriteHero } from '../../redux/actions/heroes';
import { IHero } from '../../types/IHero';
import { IStackParamList } from '../../types/IStackParamList';
import CharactersList from '../../components/CharactersList';

import styles from './styles';

interface IProps {
  loadHeroes: () => void;
  addFavoriteHero: (hero: IHero) => void;
  heroes: IHero[];
  isLoading: boolean;
}

type INavigationProps = StackNavigationProp<IStackParamList>;

const mapStateToProps = (state: any) => {
  return {
    heroes: state.heroes.heroes as IHero[],
    isLoading: state.heroes.isLoading as boolean
  };
}

function Heroes({ heroes, isLoading, loadHeroes, addFavoriteHero }: IProps) {
  const navigation = useNavigation<INavigationProps>();

  useEffect(() => {
    loadHeroes();
  }, []);

  function handleFavoriteHero(hero: IHero) {
    addFavoriteHero(hero);
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

      {heroes.length > 0 &&
        <View style={styles.contentContainer}>
          <RectButton
            style={styles.searchHero}
            onPress={() => navigation.navigate('SearchHero')}
          >
            <Text style={styles.searchHeroButtonText}>Find my hero</Text>
          </RectButton>

          <CharactersList heroesList={heroes} handleFavoriteHero={handleFavoriteHero} />
        </View>
      }
    </SafeAreaView>
  )
}

export default connect(mapStateToProps, { loadHeroes, addFavoriteHero })(Heroes);
