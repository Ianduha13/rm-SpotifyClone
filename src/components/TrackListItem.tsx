import { StyleSheet,Pressable, Image, Text, View } from 'react-native'
import React from 'react'
import { Track } from '../types'
import { usePlayerContext } from '../providers/PlayerProvider'

type TrackListItemProps = {
  track: Track
}

const TrackListItem = ({track} : TrackListItemProps) => {
  const { setTrack } = usePlayerContext()

  return (
    <Pressable onPress={() => setTrack(track)} style={styles.container}>
      <Image
      source={{uri: track.album.images[0]?.url}} style={styles.image}
      />
      <View>
        <Text style={styles.title}>{track.name}</Text>
        <Text style={styles.subtitle}>{track.artists[0]?.name}</Text>
      </View>
    </Pressable>
  )
}

export default TrackListItem

const styles = StyleSheet.create({
  container:{
    marginVertical: 5,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  title:{
    color: '#fff',
    fontWeight: '500',
    fontSize: 16,
  }
,
subtitle:{
  color: 'gray',
},
image:{
  width: 50,
  borderRadius: 5,
  aspectRatio: 1,
  marginRight: 10,
}

})