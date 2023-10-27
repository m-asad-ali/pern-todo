/* eslint-disable no-unused-vars */
import axios from "axios";
import { toast } from "react-toastify";

const baseUrl = "http://localhost:3000";

export async function signInUser(obj) {
  try {
    const response = await axios
      .post(
        `${baseUrl}/login`,
        { email: obj.email, password: obj.password },
        {
          // headers: { Authorization: `Bearer ${obj.token}` },
        }
      )
      .then((res) => res.data);

    toast.success(`${response.message}`, {
      position: toast.POSITION.TOP_CENTER,
    });

    return response;
  } catch (error) {
    toast.error(`Can not signin`, {
      position: toast.POSITION.TOP_CENTER,
    });
    throw new Error(
      error.response.data.message ? error.response.data.message : error.message
    );
  }
}
