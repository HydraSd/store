import GetBlog from "@/app/firebase/get-blog";
import React from "react";
import parse, { domToReact } from "html-react-parser";
import Image from "next/image";
import { Metadata } from "next";
import Footer from "@/components/Footer";
import NewsLetter from "@/components/Home/NewsLetter";


type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata(
  {params}: Props,
  // parent: ResolvedMetadata
): Promise<Metadata> {
  const blog = await GetBlog(params.id);


  // const previousTitle =  parent.title
  // const previousDescription = parent.description
  return {
    title: blog?.name ,
    description: `DOOL Motors:${blog?.name}`
  }
}


function replaceH1(domNode: any) {
  if (domNode.type === "tag" && domNode.name === "h1") {
    // Replace h1 tag with Tailwind CSS class
    return (
      <h1 className="text-4xl font-bold">
        {domToReact(domNode.children, {
          replace: (childNode) => {
            // Ensure each child is of type ReactNode
            //@ts-ignore
            return Array.isArray(childNode)
              ? childNode.map((node, index) => (
                  <React.Fragment key={index}>
                    {domToReact([node], {})}
                  </React.Fragment>
                ))
              : childNode;
          },
        })}
      </h1>
    );
  }
  if (domNode.type === "tag" && domNode.name === "h2") {
    // Replace h1 tag with Tailwind CSS class
    return (
      <h2 className="text-xl font-bold my-2 ">
        {domToReact(domNode.children, {
          replace: (childNode) => {
            // Ensure each child is of type ReactNode
            return Array.isArray(childNode)
              ? childNode.map((node, index) => (
                  <React.Fragment key={index}>
                    {domToReact([node], {})}
                  </React.Fragment>
                ))
              : childNode;
          },
        })}
      </h2>
    );
  }
  if (domNode.type === "tag" && domNode.name === "h3") {
    // Replace h1 tag with Tailwind CSS class
    return (
      <h2 className="font-bold my-2 ">
        {domToReact(domNode.children, {
          replace: (childNode) => {
            // Ensure each child is of type ReactNode
            return Array.isArray(childNode)
              ? childNode.map((node, index) => (
                  <React.Fragment key={index}>
                    {domToReact([node], {})}
                  </React.Fragment>
                ))
              : childNode;
          },
        })}
      </h2>
    );
  }


  if (domNode.type === "tag" && domNode.name === "a") {
    const href = domNode.attribs.href;
    // Replace h1 tag with Tailwind CSS class
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{ whiteSpace: "nowrap" }}
        className="text-yellow-600"
      >
        {domToReact(domNode.children, {
          replace: (childNode) => {
            // Ensure each child is of type ReactNode
            return Array.isArray(childNode)
              ? childNode.map((node, index) => (
                  <React.Fragment key={index}>
                    {domToReact([node], {})}
                  </React.Fragment>
                ))
              : childNode;
          },
        })}
      </a>
    );
  }

  if (domNode.type === "tag" && domNode.name === "ul") {
    return (
      <ul>
        {domToReact(domNode.children, {
          replace: (childNode) => {
            // Ensure each child is of type ReactNode
            return Array.isArray(childNode)
              ? childNode.map((node, index) => (
                  <React.Fragment key={index}>
                    {domToReact([node], {})}
                  </React.Fragment>
                ))
              : childNode;
          },
        })}
      </ul>
    );
  }

  if (domNode.type === "tag" && domNode.name === "li") {
    return (
      <li className="list-disc mx-10">
        {domToReact(domNode.children, {
          replace: (childNode) => {
            // Ensure each child is of type ReactNode
            return Array.isArray(childNode)
              ? childNode.map((node, index) => (
                  <React.Fragment key={index}>
                    {domToReact([node], {})}
                  </React.Fragment>
                ))
              : childNode;
          },
        })}
      </li>
    );
  }

  // Handle other tags or elements as needed
  return undefined;
}

async function page({ params }: Props) {
  const blog = await GetBlog(params.id);
  const description = blog?.description;
  return (
    <div>
      <div className="mx-3 sm:mx-20">
        <div className="relative h-[300px] w-full my-5 rounded-md">
          <Image 
            className="rounded-md"
            style={{ objectFit: "cover" }}
            alt={blog?.name!}
            fill
            src={blog?.imageLinks!}
          />
        </div>
        {description && <div>{parse(description, { replace: replaceH1 })}</div>}
      </div>
      <div className="my-5">

      <NewsLetter />
      </div>
      <div className="mt-5"/>
      <Footer />
    </div>
  );
}

export default page;
