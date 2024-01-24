import { MetadataRoute } from 'next'
import GetData from './firebase/get-data';
 
export default async function sitemap(): Promise<MetadataRoute.Sitemap>{
  const baseUrl = 'https://doolmotors.vercel.app/description/';
  const products = (await GetData("products")).data
  const productIds = products.map((product:any) => product.id);

  const productEntries = productIds.map((productId:string) => ({
    url: baseUrl + productId,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [
    {
      url: 'https://doolmotors.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...productEntries
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