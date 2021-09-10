import React, { useEffect } from 'react';
import { ActivityIndicator, TouchableOpacity, SafeAreaView, Text, View, FlatList, Image } from "react-native";

import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { connect } from 'react-redux';

import { loadHeroes } from '../../redux/actions/heroes';
import { IHero } from '../../types/IHero';
import { IStackParamList } from '../../types/IStackParamList';

import styles from './styles';

interface IProps {
  loadHeroes: () => void;
  heroes: IHero[];
  isLoading: boolean;
}

type IDetailsNavigation = StackNavigationProp<IStackParamList, 'Details'>;

const mapStateToProps = (state: any) => {
  return {
    heroes: state.heroes.heroes as IHero[],
    isLoading: state.heroes.isLoading
  };
}

function Heroes({ heroes, isLoading, loadHeroes }: IProps) {
  const navigation = useNavigation<IDetailsNavigation>();

  useEffect(() => {
    loadHeroes();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {isLoading && (
        <View
          style={styles.loadingContainer}
        >
          <ActivityIndicator size='large' color='#FF0000' />
        </View>
      )}

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
    </SafeAreaView>
  )
}

export default connect(mapStateToProps, { loadHeroes })(Heroes);
