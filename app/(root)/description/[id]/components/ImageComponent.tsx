import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from 'next/image';


type Props = {
    images?: string[]
}

function ImageComponent({images}: Props) {
  return (
    <div>
             {images && (
          <center>
            <Tabs defaultValue={images[0]} className="w-[300px]">
              <TabsList>
                {images.map((img) => (

                <TabsTrigger key={img} value={img}>
                    <Image 
                    width={50}
                    height={50}
                     src={img}
                     alt=""
                    />
                </TabsTrigger>
               
                ))}
              </TabsList>
              {images.map((img) => (

              <TabsContent key={img} value={img}>
                <Image 
                 width={250}
                 height={250}
                src={img} alt="" />
              </TabsContent>
              ))}
              <TabsContent value="password">
                Change your password here.
              </TabsContent>
            </Tabs>
       
          </center>
        )}
    </div>
  )
}

export default ImageComponent