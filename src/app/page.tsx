import Image from 'next/image'
import Link from 'next/link'
import { client } from '@/lib/sanityClient'
import { urlForImage } from '../../sanity/lib/image'
export const getProduct = async () => {
  const res = await client.fetch("*[_type=='product']")
  return res
}
interface iProduct {
  title: string,
  description: string,
  image: string,
}

export default async function Home() {
  const data: iProduct[] = await getProduct()
  
  console.log("data: ",data);
  const product = (data: any) => {
    return (
      <div className='w-[50%]'>
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        {/* <img src={urlForImage(data.image).width(200).url()} alt="" /> */}
      </div>
    )
  }
  return (
    // <div className='bg-slate-300 h-screen'>
    //   <nav className='py-2 px-4 bg-slate-500 w-[100%] flex justify-end'>
    //     <ul>
    //      <Link href={'/class'}><li className='font-[2px] cursor-pointer'>Past Papers</li></Link> 
    //     </ul>
    //   </nav>
    // </div>
    <div className='bg-blue-400 flex items-center flex-col h-screen'>
      {data.map(product)}
    </div>
  )
}
