import React, { useEffect } from 'react';
import { ActivityIndicator, ImageBackground, SafeAreaView, Text, View, FlatList, Image } from "react-native";

import { connect } from 'react-redux';

import { loadHeroes } from '../../redux/actions/heroes';
import { IHero } from '../../types/IHero';

import styles from './styles';

interface IProps {
  loadHeroes: () => void;
  heroes: IHero[];
  isLoading: boolean;
}

const mapStateToProps = (state: any) => {
  return {
    heroes: state.heroes.heroes as IHero[],
    isLoading: state.heroes.isLoading
  };
}

function Heroes({ heroes, isLoading, loadHeroes }: IProps) {
  useEffect(() => {
    loadHeroes();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {isLoading && (
        <View
          style={{
            flex: 1,
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <ActivityIndicator size='large' color='#FF0000' />
        </View>
      )}

      <FlatList
        data={heroes}
        renderItem={({ item }) => {
          const uri = `${item.thumbnail.path}/portrait_medium.${item.thumbnail.extension}`;
          return (
            <View style={styles.itemContainer}>
              <Image
                source={{ uri }}
                style={styles.heroImage}
              />
              <Text>{item.name}</Text>
            </View>
          );
        }}
        numColumns={2}
        keyExtractor={(item) => String(item.id)}
      />
      {/* <Text>Heroes Screen</Text> */}
    </SafeAreaView>
  )
}

export default connect(mapStateToProps, { loadHeroes })(Heroes);
