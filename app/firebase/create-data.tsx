import { collection, addDoc } from "firebase/firestore";
import { db } from "@/app/firebase/firebase";


async function CreateData(collectionName: string, newData: Partial<Order>) {
    try{
        await addDoc(collection(db, collectionName), newData)
      
    } catch (e) {
        console.error(e)
    }
}

export default CreateData