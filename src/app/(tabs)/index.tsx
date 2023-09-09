import { FlatList, StyleSheet,Text, TextInput, View } from 'react-native';
import { tracks } from '../../../assets/data/tracks';
import TrackListItem from '../../components/TrackListItem';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';

export default function HomeScreen() {
  const [searchText, setSearchText] = useState('');
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <FontAwesome name="search" size={16} color="gray" />
        <TextInput value={searchText} onChangeText={setSearchText} placeholder="What do you want to listen to?" style={styles.input} />
        <Text onPress={() => setSearchText('')} style={{color:"white"}}>Cancel</Text>
      </View>
      <FlatList
      data={tracks}
      renderItem={({item}) => <TrackListItem track={item} />}
      showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header:{
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  container:{

  },
  input:{
    flex:1,
    backgroundColor: '#121314',
    padding: 8,
    marginHorizontal: 10,
    color: 'white',
    borderRadius: 5,
  }

});