import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "./firebase";

async function FeaturedProducts() {
  try {
    // Create a Firestore query by referencing the collection
    const firestoreCollection = collection(db, "products");

    // Create a query to filter featured products
    const firestoreQuery = query(firestoreCollection, where("isFeatured", "==", true));
    const querySnapshot = await getDocs(firestoreQuery);
    
    const data: any = [];
    querySnapshot.forEach((doc) => {
      const docData = doc.data();
      const { link, ...rest } = docData; // Exclude the 'link' field
      data.push({ id: doc.id, ...rest });
    });

    return {
      data,
    };
  } catch (e) {
    console.error("Error fetching data:", e);
    throw e;
  }
}

export default FeaturedProducts;
