import React from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

import { StackScreenProps } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Feather';
import { connect } from 'react-redux';

import { IStackParamList } from '../../types/IStackParamList';
import { IHero } from '../../types/IHero';
import { addFavoriteHero } from '../../redux/actions/heroes';

import styles from './styles';

interface IProps extends StackScreenProps<IStackParamList, 'Details'> {
  addFavoriteHero: (hero: IHero) => void;
}

function Details({ route, addFavoriteHero }: IProps) {
  const { hero } = route.params;
  const uri = `${hero.thumbnail.path}/landscape_incredible.${hero.thumbnail.extension}`;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri }} style={styles.thumbnailHero} />
      </View>
      <View style={styles.marginContainer}>
        <TouchableOpacity onPress={() => addFavoriteHero(hero)}>
          <Icon name='star' size={24} />
        </TouchableOpacity>
        <Text style={styles.heroName}>{hero.name}</Text>
        <Text style={styles.descriptionText}>{hero.description ? hero.description : 'Description not available'}</Text>
      </View>
    </SafeAreaView>
  )
}

export default connect(null, { addFavoriteHero })(Details);