import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import natural from "natural";

// Create a stemmer for English language
const stemmer = natural.PorterStemmer;

async function SearchResults(search: string) {
  try {
    const querySnapshot = await getDocs(collection(db, "products"));
    const data: any = [];

    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });
    // Create instances of WordTokenizer
    const wordTokenizer = new natural.WordTokenizer();

    const results = data.filter((product: any) => {
      // Ensure wordTokenizer is not null
      if (wordTokenizer) {
        // Tokenize and stem each word in product name

        //@ts-ignore
        const productNameTokens = wordTokenizer
          .tokenize(product.name.toLowerCase())
          .map((token) => stemmer.stem(token));

        // Tokenize and stem each word in search query
        //@ts-ignore
        const searchTokens = wordTokenizer
          .tokenize(search.toLowerCase())
          .map((token) => stemmer.stem(token));

        // Check if any tokenized search word is found in tokenized product name
        return searchTokens.some((searchToken) =>
          productNameTokens.includes(searchToken)
        );
      } else {
        // Handle the case where wordTokenizer is null
        console.error("WordTokenizer is null");
        return false; // or handle this case appropriately
      }
    });

    // const results = data.filter((product: any) =>
    //   product.name.toLowerCase().includes(search.toLowerCase())
    // );
    return {
      results,
    };
  } catch (e) {
    console.error("Error fetching data:", e);
    throw e;
  }
}

export default SearchResults;
