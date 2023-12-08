import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

async function GetDocument(collectionName: string, documentId: string) {
  try {
    const docRef = doc(db, collectionName, documentId);

    const docSnapshot = await getDoc(docRef);
    if (docSnapshot.exists()) {
      const data = docSnapshot.data() as Product;
      return {
        id: docSnapshot.id,
        name: data.name,
        price: data.price,
        images: data.images,
        imageLinks: data.imagesLink,
        img: data.img,
        diliveryPrice: data.diliveryPrice,
        diliveryTime: data.diliveryTime,
        vehicle: data.vehicle,
        category: data.category,
        type: data.type,
        description: data.description,
      };
    } else {
      return null;
    }
  } catch (e) {
    console.error("Error fetching document:", e);
    throw e;
  }
}

export default GetDocument;
