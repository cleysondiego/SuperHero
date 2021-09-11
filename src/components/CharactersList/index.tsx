import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';

import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Feather';

import { IHero } from '../../types/IHero';
import { IStackParamList } from '../../types/IStackParamList';

import styles from './styles';

interface IProps {
  heroesList: IHero[]
  handleFavoriteHero: (hero: IHero) => void;
}

type IDetailsNavigation = StackNavigationProp<IStackParamList, 'Details'>;

function CharactersList({ heroesList, handleFavoriteHero }: IProps) {
  const navigation = useNavigation<IDetailsNavigation>();

  return (
    <FlatList
      data={heroesList}
      renderItem={({ item }) => {
        const uri = `${item.thumbnail.path}/standard_large.${item.thumbnail.extension}`;
        return (
          <View style={styles.itemContainer}>
            <TouchableOpacity onPress={() => handleFavoriteHero(item)}>
              <Icon name='star' size={16} />
            </TouchableOpacity>
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
  );
}

export default CharactersList;