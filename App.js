import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import nodeIsbn from "node-isbn";
import AddBook from "./screens/AddBook"
import ViewBooks from "./screens/ViewBooks";

export default function App() {
  const [books, setBooks] = useState([])
  const [adding, setAdding] = useState(false)

  const bookList = (
    <View style={styles.container}>
      <Text>{JSON.stringify(books)}</Text>
      <Button title={"Tap to add book"} onPress={() => setAdding(true)}  />
    </View>
  );

  const addBook = bookToAdd => setBooks(books.concat(bookToAdd))

  const addScreen = (
    <AddBook
      addBook={addBook}
      books={books}
      viewBooks={() => setAdding(false)}
    />
  )

  const screenToShow = adding ? addScreen : bookList

  return screenToShow
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
});
