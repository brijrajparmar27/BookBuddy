import { useState } from "react";
import { db } from "../Firebase/config";
import useAuth from "./useAuth";

const useSnapshot = ()=>{
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);
    const {user} = useAuth();
    
    const getDocs = async (setDocs) => {
    
        var docs = [];
        try{
          setLoading(true)
          user && db.collection("bucketlist").where("uid","==",user.uid).onSnapshot((snapshot) => {
            snapshot.forEach((each) => {
              docs.push({ ...each.data(),id: each.id});
            });
            setLoading(false);
            setDocs([...docs]);
            docs = [];
          });
        }
        catch(e)
        {
          setError(e.message)
        }
    };

    return { loading, error, getDocs };
}
export default useSnapshot;