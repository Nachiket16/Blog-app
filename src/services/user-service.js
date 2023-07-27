//All user related ops
import { myAxios } from "./helper";

const signUp = (user) => {
  return myAxios
    .post("/api/v1/auth/register")
    .then((response) => response.json());
};

