import data from "../data/data.js"
import Card from "./Card.jsx"
import { useRef } from "react";
export default function MainContent(){

    
    const scrollRef = useRef(null);
    const handleWheel = (event) => {
        if (scrollRef.current) {
          scrollRef.current.scrollLeft += event.deltaY; // Horizontal scroll effect
          event.preventDefault(); // Prevent default browser scrolling
        }
      };

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
            <div ref={scrollRef} onWheel={handleWheel} className="container">
            {inputArray}
            </div>
        </main>
    )
}