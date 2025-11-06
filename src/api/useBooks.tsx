import axios from "axios";
import { useState } from "react";
import { Alert } from "react-native";

const API_URL = "https://69072138b1879c890ed8e1f4.mockapi.io/books";

export default function useBooks() {
  const [bookList, setBookList] = useState([]);

  const getListOfBooks = async ({ onSuccess, onError } = {}) => {
    try {
      const response = await axios.get(API_URL);
      setBookList(response.data); // Store in state
      onSuccess && onSuccess(response.data);
    } catch (error) {
      onError && onError(error);
    }
  };

  const getBookByID = async ({ id, onSuccess, onError } = {}) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      onSuccess && onSuccess(response.data);
    } catch (error) {
      onError && onError(error);
    }
  };

  const deleteBookByID = async ({ id, onSuccess, onError } = {}) => {
    try {
      const response = await axios.delete(`${API_URL}/${id}`);
      Alert.alert("Book deleted successfully");
      getListOfBooks();
      onSuccess && onSuccess(response.data);
    } catch (error) {
      onError && onError(error);
    }
  };

  const updateBookByID = async ({ id, body, onSuccess, onError } = {}) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, body);
      Alert.alert("Book updated successfully");
      getListOfBooks();
      onSuccess && onSuccess(response.data);
    } catch (error) {
      onError && onError(error);
    }
  };

  const createBook = async ({ body, onSuccess, onError } = {}) => {
    try {
      await axios.post(API_URL, body);
      Alert.alert("Book created successfully");
      getListOfBooks();
      onSuccess && onSuccess();
    } catch (error) {
      onError && onError(error);
    }
  };

  return {
    bookList,
    getListOfBooks,
    getBookByID,
    deleteBookByID,
    updateBookByID,
    createBook,
  };
}
