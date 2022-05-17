import { FlatList, StyleSheet } from 'react-native';
import { Restaurant } from '../components/Restaurant';
import { View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

const restaurant = {
  address: 'Calle falsa 123',
  hours: { open: '8:00 am', close: '10:00 pm' },
  image:
    'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/processed-food700-350-e6d0f0f.jpg?quality=90&resize=556,505',
  name: 'Cool restaurant',
  phone: '+57 123 1212',
  whatsapp: '+57 123 1212',
};

const data = [
  restaurant,
  restaurant,
  restaurant,
  restaurant,
  restaurant,
  restaurant,
  restaurant,
];

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<'List'>) {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Restaurant
            onPress={() => navigation.navigate('Details', { restaurant: item })}
            {...item}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  listContainer: {
    flexWrap: 'wrap',
  },
});
