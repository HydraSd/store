
import GetData from "@/app/firebase/get-data";

async function recommended(searchList:Array<string>) {
  
    try {
        // Assuming GetData returns a Promise that resolves to the data
        const data = (await GetData("products")).data;
        const recommendedParts = data.map((part:Product )=> ({
            ...part,
            similarityScore: calculateSimilarityScore(searchList, part.description)
          }));
          recommendedParts.sort((a:any, b:any) => b.similarityScore - a.similarityScore);
        return recommendedParts.slice(0,10);
    } catch (error) {
        // Handle errors if any
        console.error("Error fetching recommended products:", error);
        throw error; // Rethrow the error or handle it as needed
    }
}
function calculateSimilarityScore(userFeatures:any, partDescription:any) {
    // This is a simplified approach; you may use TF-IDF, word embeddings, or other techniques for better accuracy
    // Here, we're just counting the number of common words between user features and part description
    const commonWords = userFeatures.filter((word:any) => partDescription.includes(word));
    return commonWords.length;
  }
export default recommended