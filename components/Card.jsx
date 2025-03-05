
export default function Card(props){
    
     return (
        <div className="cardContainer">
            <div className="youtubeCard">
                <a href={props.link}><img className="cardImage" src={props.thumbnail} alt="" /></a>
        
                <div className="cardDetail">    
                    <p className="title">{props.title}</p>
                    <p className="text">{props.text}</p>
                    <p className="link">Link: <a href={props.link}>Click here</a></p>
                </div>

            </div>
        </div>
    )
}