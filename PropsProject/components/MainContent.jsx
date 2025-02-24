import data from "../data/data.js"
import Card from "./Card.jsx"
export default function MainContent(){
    const inputArray= data.map((data)=>{ return <Card
         key={data.id}
         title={data.title}
         text={data.text}
         link={data.link}
         thumbnail={data.thumbnail}
         />
         })
    return (
        <main>
            {inputArray}
        </main>
    )
}