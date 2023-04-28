import axios from "axios";
export const setAvatar = async(token, formValue) => {

    try {
      // make axios post request
      const res = await axios({
        method: "patch",
        url: `http://localhost:3001/user/setAvatar`,
        data: formValue,
        headers: {Authorization: `Bearer ${token}`,
                  "Content-Type": "multipart/form-data" }
      });
      return res.data;
    } catch(error) {
        return error.response.data;
    }
  }

  export const getAvatar = async(token) => {
    try {
      // make axios post request
      const res = await axios({
        method: "get",
        url: `http://localhost:3001/user/getAvatar`,
        headers: {Authorization: `Bearer ${token}`}
      });
      return res.data;
    } catch(error) {
        return error.response.data;
    }
  }