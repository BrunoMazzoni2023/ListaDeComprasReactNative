import React, {useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import AppItem from './AppItem';
import Database from './Database';
 

 export default function AppList({ route, navigation }) {


  const [items, setItems] = useState([]);
  
  useEffect(() => {
      Database.getItems().then(items => setItems(items));

  }, [route]);
/*   const [items, setItems] = useState([
    {id: 1, quantidade: 5, descricao: "arroz" }, 
    {id: 2, quantidade: 1, descricao: "feijão" }, 
    {id: 3, quantidade: 0.5, descricao: "lentilha" }, 
    {id: 4, quantidade: 1, descricao: "massa" }, 
    {id: 5, quantidade: 4, descricao: "katchup" }, 
    {id: 6, quantidade: 3, descricao: "queijo-ralado" },
    {id: 8, quantidade: 2, descricao: "arroz" }, 
    {id: 9, quantidade: 4, descricao: "feijão" }, 
    {id: 10, quantidade: 0.5, descricao: "lentilha" }, 
    {id: 11, quantidade: 15, descricao: "massa" }, 
    {id: 12, quantidade: 11, descricao: "katchup" }, 
    {id: 13, quantidade: 10, descricao: "queijo-ralado" }
  ]); */

return (

  <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.title}>Lista de Compras</Text>
      <ScrollView 
          style={styles.scrollContainer}
          contentContainerStyle={styles.itemsContainer}>
          { items.map(item => {
             return <AppItem key={item.id} id={item.id} item={item.quantidade + '  de ' + item.descricao} navigation={navigation} />
          }) }
      </ScrollView>
  </View>
  );

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D93600',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 20
  },
  scrollContainer: {
    flex: 1,
    width: '90%'
  },
  itemsContainer: {
    flex: 1,
    marginTop: 0,
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'stretch',
    backgroundColor: '#fff'
  },
});

