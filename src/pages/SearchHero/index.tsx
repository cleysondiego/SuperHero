import React, { useState } from 'react';
import { View, TextInput, Text, ActivityIndicator, FlatList, TouchableOpacity, Image } from 'react-native';

import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { RectButton } from 'react-native-gesture-handler';
import { connect } from 'react-redux';

import { IHero } from '../../types/IHero';
import { IStackParamList } from '../../types/IStackParamList';
import { searchHeroes } from '../../redux/actions/searchHeroes';

import styles from './styles';

interface IProps {
  searchHeroes: (name: string) => void;
  heroes: IHero[];
  isLoading: boolean;
}

type IDetailsNavigation = StackNavigationProp<IStackParamList, 'Details'>;

const mapStateToProps = (state: any) => {
  return {
    heroes: state.searchHeroes.heroes as IHero[],
    isLoading: state.searchHeroes.isLoading as boolean
  };
}

function SearchHero({ heroes, isLoading, searchHeroes }: IProps) {
  const navigation = useNavigation<IDetailsNavigation>();

  const [name, setName] = useState('');
  const [lastSearch, setLastSearch] = useState('');

  function handleSearch() {
    if (isLoading) return;
    if (name === lastSearch) return;
    setLastSearch(name);
    searchHeroes(name);
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Enter a character name'
        value={name}
        onChangeText={setName}
      />

      <RectButton
        style={styles.searchHero}
        onPress={handleSearch}
      >
        <Text style={styles.searchHeroButtonText}>Find my hero</Text>
      </RectButton>

      {isLoading && (
        <View
          style={styles.loadingContainer}
        >
          <ActivityIndicator size='large' color='#FF0000' />
        </View>
      )}

      {heroes.length > 0 && 
        <FlatList
          data={heroes}
          renderItem={({ item }) => {
            const uri = `${item.thumbnail.path}/standard_large.${item.thumbnail.extension}`;
            return (
              <View style={styles.itemContainer}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Details', { hero: item })}
                  activeOpacity={0.5}
                >
                  <Image
                    source={{ uri }}
                    style={styles.heroImage}
                  />
                </TouchableOpacity>
                <Text>{item.name}</Text>
              </View>
            );
          }}
          numColumns={2}
          keyExtractor={(item) => String(item.id)}
        />
      }
    </View>
  );
}

export default connect(mapStateToProps, { searchHeroes })(SearchHero);
