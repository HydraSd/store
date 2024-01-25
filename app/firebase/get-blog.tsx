import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

async function GetBlog(documentId: string) {
  try {
    const docRef = doc(db, 'blogs', documentId);

    const docSnapshot = await getDoc(docRef);
    if (docSnapshot.exists()) {
      const data = docSnapshot.data() as Blogs;
      return {
        id: docSnapshot.id,
        name: data.name,
        images: data.images,
        imageLinks: data.imagesLink,
        img: data.img,
        description: data.description,
        date: data.date
      };
    } else {
      return null;
    }
  } catch (e) {
    console.error("Error fetching document:", e);
    throw e;
  }
}

export default GetBlog;
