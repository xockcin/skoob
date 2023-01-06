import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import nodeIsbn from "node-isbn";
import Add from "./screens/Add"

export default function App() {
  const [books, setBooks] = useState([])

  const addBook = bookToAdd => setBooks(books.concat(bookToAdd))

  return <Add addBook={addBook} books={books} />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
});
