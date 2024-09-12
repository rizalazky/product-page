import Caraosel from "@/components/caraosel";


export default async function Page({ params }: { params: { id: string } }) {

    let data = await fetch(`https://dummyjson.com/products/${params.id}`);
    let response = await data.json()

    console.log(response)

    return (
        <div>
           <Caraosel images={response.images}/>
           <h1>{response.title}</h1>
           <p>{response.description}</p>
        </div>
    )
}