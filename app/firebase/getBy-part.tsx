import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

async function GetByType(search: string, doc: string) {
  try {
    const querySnapshot = await getDocs(collection(db, doc));
    const data: any = [];

    querySnapshot.forEach((doc) => {
      const docData = doc.data();
      const { link, ...rest } = docData; // Exclude the 'link' field
      data.push({ id: doc.id, ...rest });
    });

    const results = data.filter((product: any) =>
      product.type.toLowerCase().includes(search.toLowerCase())
    );

    return {
      results,
    };
  } catch (e) {
    console.error("Error fetching data:", e);
    throw e;
  }
}

export default GetByType;
