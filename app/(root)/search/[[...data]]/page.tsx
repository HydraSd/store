import SearchResults from "@/app/firebase/searchProduct";
import GetData from "@/app/firebase/get-data";
import Client from "./components/Client";

type Props = {
  params: {
    data: [];
  };
};

async function SearchPage({ params }: Props) {
  // @ts-ignore
  const search = decodeURI(params.data[0]);
  const results = (await SearchResults(search)).results;
  const vehicleModal = (await GetData("vehicle-modals")).data;
  const automotiveType = (await GetData("automotive-type")).data;
  const industrialType = (await GetData("industrial-type")).data;



  return (
    <div>
      <Client
       searchTerm={search}
       initialData={results}
       vehicleModal={vehicleModal}
       automotiveType={automotiveType}
       industrialType={industrialType}
      />
    </div>
  );
}

export default SearchPage;
