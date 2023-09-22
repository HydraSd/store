import { collection, getDocs } from "firebase/firestore";

import { db } from "./firebase";

async function GetData(collectionName: string) {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const data:any = [];

    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });

    return {
      data,
    };
  } catch (e) {
    console.error("Error fetching data:", e);
    throw e;
  }
}

export default GetData;
