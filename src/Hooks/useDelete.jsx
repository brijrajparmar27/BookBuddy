import { db } from "../Firebase/config";

const useDelete = ()=>{
    const del = async(id)=>{
        try{
            await db.collection("bucketlist").doc(id).delete();
        }
        catch(e)
        {
            console.log(e.message);
        }
    }
    return {del}
}
export default useDelete;