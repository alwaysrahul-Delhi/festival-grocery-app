import React, { useMemo, useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

import { FESTIVALS } from './src/data/festivals';
import { generateGroceryList } from './src/utils/calculateList';

export default function App() {
  const [selectedFestival, setSelectedFestival] = useState(FESTIVALS[0]);
  const [guests, setGuests] = useState('20');

  const groceryList = useMemo(
    () => generateGroceryList(selectedFestival, guests),
    [selectedFestival, guests]
  );

  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.heading}>Festival Grocery Planner</Text>
      <Text style={styles.subHeading}>Create festival-wise grocery list by invited people.</Text>

      <Text style={styles.label}>Select Festival</Text>
      <View style={styles.festivalWrap}>
        {FESTIVALS.map((festival) => {
          const active = selectedFestival === festival;
          return (
            <TouchableOpacity
              key={festival}
              onPress={() => setSelectedFestival(festival)}
              style={[styles.festivalChip, active && styles.festivalChipActive]}
            >
              <Text style={[styles.festivalChipText, active && styles.festivalChipTextActive]}>
                {festival}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <Text style={styles.label}>Invited Persons</Text>
      <TextInput
        keyboardType="numeric"
        value={guests}
        onChangeText={setGuests}
        placeholder="Enter invited people count"
        style={styles.input}
      />

      <Text style={styles.listTitle}>Required Grocery Items</Text>
      <FlatList
        data={groceryList}
        keyExtractor={(item) => `${item.item}-${item.unit}`}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.itemName}>{item.item}</Text>
            <Text style={styles.qty}>{item.totalQuantity} {item.unit}</Text>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f3f5f9',
    paddingHorizontal: 16,
    paddingTop: 12
  },
  heading: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1f2d3d'
  },
  subHeading: {
    marginTop: 6,
    marginBottom: 18,
    fontSize: 14,
    color: '#52606d'
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
    color: '#243b53'
  },
  festivalWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 18
  },
  festivalChip: {
    borderWidth: 1,
    borderColor: '#bcccdc',
    borderRadius: 18,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#fff'
  },
  festivalChipActive: {
    backgroundColor: '#0d6efd',
    borderColor: '#0d6efd'
  },
  festivalChipText: {
    color: '#334e68',
    fontSize: 13,
    fontWeight: '500'
  },
  festivalChipTextActive: {
    color: '#fff'
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#bcccdc',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 18
  },
  listTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 10,
    color: '#102a43'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 11,
    paddingHorizontal: 12,
    borderRadius: 8
  },
  itemName: {
    fontSize: 14,
    color: '#243b53',
    maxWidth: '65%'
  },
  qty: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0d6efd'
  },
  separator: {
    height: 8
  }
});
