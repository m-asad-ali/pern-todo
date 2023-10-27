/* eslint-disable no-unused-vars */
import axios from "axios";
import { toast } from "react-toastify";

const baseUrl = "http://localhost:3000";

export async function fetchAllTodos(token) {
  try {
    const response = await axios
      .get(`${baseUrl}/all`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => res.data);

    return response;
  } catch (error) {
    console.error("Error occurred while fetching data.", error);
    throw new Error(
      error.response.data.message ? error.response.data.message : error.message
    );
  }
}

export async function addTodo(obj) {
  try {
    const response = await axios
      .post(
        `${baseUrl}/create`,
        { title: obj.title, userId: obj.userId },
        {
          headers: { Authorization: `Bearer ${obj.token}` },
        }
      )
      .then((res) => res.data);

    return response;
  } catch (error) {
    console.error("Error occurred while adding data.", error);
    throw new Error(
      error.response.data.message ? error.response.data.message : error.message
    );
  }
}

export async function completeTodo(obj) {
  try {
    const response = await axios
      .put(
        `${baseUrl}/complete/${obj.id}`,
        {},
        { headers: { Authorization: `Bearer ${obj.token}` } }
      )
      .then((res) => res.data);

    return response;
  } catch (error) {
    console.error("Error occurred while adding data.", error);
    throw new Error(
      error.response.data.message ? error.response.data.message : error.message
    );
  }
}

export async function deleteTodo(obj) {
  try {
    const response = await axios
      .delete(`${baseUrl}/delete/${obj.id}`, {
        headers: { Authorization: `Bearer ${obj.token}` },
      })
      .then((res) => res.data);

    return response;
  } catch (error) {
    console.error("Error occurred while deleting task.", error);
    throw new Error(
      error.response.data.message ? error.response.data.message : error.message
    );
  }
}
