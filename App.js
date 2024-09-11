import { StyleSheet, Text, View, ScrollView, StatusBar, FlatList, SectionList} from 'react-native';
import myPokemonList from './data.json' // this is important to work with data.json file
import myGroupedPokemonList from './grouped-data.json'


export default function App() {
  return (
    <View style={styles.container}>

      {/* <ScrollView>
        {
          myPokemonList.map(myPokemon => {
            console.log(myPokemon.id)
            return(
              <View style={styles.card} key={myPokemon.id}>
                <Text style={styles.text}>{myPokemon.name}</Text>
                <Text style={styles.text}>{myPokemon.type}</Text>

              </View>
            )
          }) 
        }

      </ScrollView> */}

      {/* <FlatList
        data={myPokemonList}
        renderItem={({item}) => {
          return(
            <View style={styles.card} key={item.id}>
              <Text style={styles.text}>{item.name}</Text>
              <Text style={styles.text}>{item.type}</Text>

            </View>
          )

        }}
        ListEmptyComponent={
          <Text style={styles.emptyListText}>No items present</Text>
        }
        ListHeaderComponent={
          <Text style={styles.headerListText}>Pokemon lists</Text>
        }
        ListFooterComponent={
          <Text style={styles.footerListText}>The end</Text>
        }
      /> */}
      
      <SectionList // it has two mandatory props sections and renderItem
      // the SectionList component is used with the grouped-data.json file
      sections={myGroupedPokemonList}
      renderItem={({item}) => {
        return(
          <View style={styles.card}>
            <Text style={styles.text}>{item}</Text>
          </View>
        )
      }}
      renderSectionHeader={({section}) => ( //this  makes sure that type of the data within grouped-data.json file is specified
        <Text style={styles.sectionHeaderText}>{section.type}</Text>
      )}

      />

      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9DA2AB',
    paddingTop: StatusBar.currentHeight,
    padding: 10
  },
  card: {
   paddingHorizontal: 20,
   borderRadius: 8,
   borderWidth: 2,
   padding: 20,
   marginBottom: 10,
   backgroundColor: 'white'
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  emptyListText:{
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold'
  },
  headerListText:{
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10

  },
  footerListText:{
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10

  },
  sectionHeaderText: {
    fontSize: 22,
    fontWeight: 'bold',
  }



});
