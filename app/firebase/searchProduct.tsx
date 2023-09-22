import { collection, getDocs } from "firebase/firestore";

import { db } from "./firebase";

async function SearchResults(search: string) {
  try {
    const querySnapshot = await getDocs(collection(db, "products"));
    const data: any = [];

    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });

    const results = data.filter((product: any) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
    return {
      results,
    };
  } catch (e) {
    console.error("Error fetching data:", e);
    throw e;
  }
}

export default SearchResults;
