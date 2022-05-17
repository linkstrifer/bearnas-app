import { StatusBar } from 'expo-status-bar';
import { Image, Platform, StyleSheet, Dimensions } from 'react-native';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

export default function ModalScreen({ route }) {
  const colorScheme = useColorScheme();
  const {
    address,
    hours: { open, close },
    image,
    name,
    phone,
    whatsapp,
  } = route.params.restaurant;

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: image,
        }}
        style={styles.banner}
      />
      <Text style={styles.name}>{name}</Text>

      <Text style={styles.address}>{address}</Text>

      <Text style={styles.openHours}>
        {open} - {close}
      </Text>

      <View
        style={{
          ...styles.contact,
          borderColor: Colors[colorScheme].tabIconDefault,
        }}
      >
        <View style={styles.contactBox}>
          <Text>Telefono: </Text>
          <Text>{phone}</Text>
        </View>

        <View style={styles.contactBox}>
          <Text>Whastapp: </Text>
          <Text>{whatsapp}</Text>
        </View>
      </View>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  name: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  address: {
    fontSize: 14,
    marginBottom: 8,
    marginTop: 4,
    opacity: 0.5,
  },
  openHours: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  contact: {
    borderWidth: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 8,
    padding: 16,
  },
  contactBox: {
    margin: 8,
  },
  banner: {
    height: Dimensions.get('window').height / 5,
    marginBottom: 40,
    width: Dimensions.get('window').width,
  },
});
