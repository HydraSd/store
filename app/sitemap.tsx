import { MetadataRoute } from 'next'
import GetData from './firebase/get-data';
 
export default async function sitemap(): Promise<MetadataRoute.Sitemap>{
  const baseUrl = 'https://doolmotors.com/description/';
  const blogBaseUrl = 'https://doolmotors.com/blog/'
  const products = (await GetData("products")).data
  const blogs = (await GetData("blogs")).data
  const blogIds = blogs.map((product:any) => product.id);
  const productIds = products.map((product:any) => product.id);

  const productEntries = productIds.map((productId:string) => ({
    url: baseUrl + productId,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const blogEntries = blogIds.map((blogId:string) => ({
    url: blogBaseUrl + blogId,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [
    {
      url: 'https://doolmotors.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://doolmotors.com/blog',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...productEntries,
    ...blogEntries
    // {
    //   url: 'https://acme.com/about',
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
    // {
    //   url: 'https://acme.com/blog',
    //   lastModified: new Date(),
    //   changeFrequency: 'weekly',
    //   priority: 0.5,
    // },
  ]
}