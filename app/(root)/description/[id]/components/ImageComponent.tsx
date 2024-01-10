import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Props = {
  images?: string[];
  imageLinks?: string;
  img: boolean;
};

function ImageComponent({ images, imageLinks, img }: Props) {
  const imagesLinkList = imageLinks?.split("||");
  return (
    <div>
      {img ? (
        <center>
          <Tabs defaultValue={images?.[0]} className="w-[300px]">
            <TabsList>
              {images?.map((img) => (
                <TabsTrigger key={img} value={img}>
                  <img width={50} height={50} src={img} alt="img" />
                </TabsTrigger>
              ))}
            </TabsList>
            {images?.map((img) => (
              <TabsContent key={img} value={img}>
                <img width={250} height={250} src={img} alt="img" />
              </TabsContent>
            ))}
            <TabsContent value="password">
              Change your password here.
            </TabsContent>
          </Tabs>
        </center>
      ) : (
        <center>
        <Tabs defaultValue={imagesLinkList?.[0]} className="w-[300px]">
          <TabsList>
            {imagesLinkList?.map((img) => (
              <TabsTrigger key={img} value={img}>
                <img width={50} height={50} src={img} alt="img" />
              </TabsTrigger>
            ))}
          </TabsList>
          {imagesLinkList?.map((img) => (
            <TabsContent key={img} value={img}>
              <img width={250} height={250} src={img} alt="img" />
            </TabsContent>
          ))}
          <TabsContent value="password">
            Change your password here.
          </TabsContent>
        </Tabs>
      </center>
      )}

      
    </div>
  );
}

export default ImageComponent;
