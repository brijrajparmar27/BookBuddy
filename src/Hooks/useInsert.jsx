import { useState } from "react";
import { db } from "../Firebase/config";
import useAuth from "./useAuth";

const useInsert = () => {
  const { user } = useAuth();
  const insert = async (name) => {
    try {
      const res = await db
        .collection("bucketlist")
        .add({ name: name, uid: user.uid });
    } catch (e) {
      alert(e.message);
    }
  };

  return { insert};
};

export default useInsert;
