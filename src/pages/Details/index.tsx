import React from 'react';
import { Image, SafeAreaView, Text, View } from "react-native";

import { StackScreenProps } from '@react-navigation/stack';

import { IStackParamList } from '../../types/IStackParamList';

import styles from './styles';

interface IProps extends StackScreenProps<IStackParamList, 'Details'> {}

function Details({ route }: IProps) {
  const { hero } = route.params;
  const uri = `${hero.thumbnail.path}/landscape_incredible.${hero.thumbnail.extension}`;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri }} style={styles.thumbnailHero} />
      </View>
      <View style={styles.marginContainer}>
        <Text style={styles.heroName}>{hero.name}</Text>
        <Text style={styles.descriptionText}>{hero.description ? hero.description : 'Description not available'}</Text>
      </View>
    </SafeAreaView>
  )
}

export default Details;