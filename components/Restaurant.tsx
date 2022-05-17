import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions, Image, Pressable, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

export function Restaurant({
  name,
  image,
  onPress,
}: {
  name: string;
  image: string;
  onPress: Function;
}) {
  const colorScheme = useColorScheme();

  return (
    <Pressable
      onPress={() => onPress({ name })}
      style={({ pressed }) => ({
        opacity: pressed ? 0.5 : 1,
      })}
    >
      <View
        style={{
          ...styles.container,
          borderColor: Colors[colorScheme].tabIconDefault,
        }}
      >
        <Image source={{ uri: image }} style={styles.image} />
        <LinearGradient
          // Background Linear Gradient
          colors={['transparent', 'rgba(0,0,0,0.7)']}
          style={styles.gradient}
        />
        <Text style={styles.name}>{name}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderRadius: 8,
    borderStyle: 'solid',
    marginHorizontal: 16,
    marginVertical: 8,
    overflow: 'hidden',
    padding: 8,
    paddingVertical: 16,
    position: 'relative',
    width: Dimensions.get('window').width - 32,
  },
  name: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    paddingTop: 32,
  },
  gradient: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  image: {
    height: 100,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    width: Dimensions.get('window').width,
  },
});
