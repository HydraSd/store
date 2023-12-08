import GetByType from '@/app/firebase/getBy-part';
import React from 'react'
import Client from './components/Client';
import GetData from '@/app/firebase/get-data';

type Props = {
    params: {
        data: [];
      };
}

async function PartTypePage({params}: Props) {
      // @ts-ignore

 const part = decodeURI(params['part']);
 const results = (await GetByType(part, 'products')).results;
 const vehicleModal = (await GetData("vehicle-modals")).data;
 const automotiveType = (await GetData("automotive-type")).data;
 const industrialType = (await GetData("industrial-type")).data;
return (
    <div>
        <Client 
        initialData={results}
        vehicleModal={vehicleModal}
        automotiveType={automotiveType}
        industrialType={industrialType}
        />
    </div>
  )
}

export default PartTypePage