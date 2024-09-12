import SelectCategory from "@/components/selectcategory";
import Image from "next/image";
import Link from "next/link";

export default async function Page({ params }: { params: { slug: string } }) {

    let data = await fetch(`https://dummyjson.com/products/category/${params.slug}`);
  let response = await data.json()
  
  
  let apiCategories = await fetch('https://dummyjson.com/products/categories');
  let categories = await apiCategories.json()
 
  return (
    <>
      <SelectCategory categories={categories}/>
      <div className="grid grid-cols-4 items-center justify-center gap-4 p-6">
        {
          response.products.map((product:any)=>(
            <Link href={`/product/${product.id}`} key={product.id} className="flex flex-col items-center gap-2 justify-center bg-slate-200 text-black rounded-md shadow-lg p-4">
              <Image alt={product.title} className="h-auto w-auto" src={product.thumbnail} width={300} height={400}/>
              <h1 className="flex-1 w-full text-xl font-bold">{product.title}</h1>
              <p className="flex-1 w-full text-sm">{product.description}</p>
              <p className="flex-1 w-full text-xl font-bold">$ {product.price}</p>
            </Link>
          ))
        }
      </div>
    </>
  );
}