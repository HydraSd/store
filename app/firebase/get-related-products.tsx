import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "./firebase";

async function GetRelatedProducts(vehicle: string) {
  try {
    // Create a Firestore query by referencing the collection
    const firestoreCollection = collection(db, "products");

    // If a category filter is provided, add a "where" clause to the query
   
      const firestoreQuery = query(firestoreCollection, where("vehicle", "==", vehicle));
      const querySnapshot = await getDocs(firestoreQuery);
      
      const data: any[] = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });

      return {
        data
      };
   
  } catch (e) {
    console.error("Error fetching data:", e);
    throw e;
  }
}

export default GetRelatedProducts;
