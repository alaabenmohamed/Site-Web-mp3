import React from 'react'
import "./styles.css"
/* props pour dire qui existe de donnes */
const  SongInfo=(aa) =>{
    /* 1ere methode : console.log(props.song) ou existe autre syntaxe */
    const{songindex}=aa; /* aa ou props ou quelque soit */
   
  return (
    <div className='song-info' >
        {/* alt pour dire on cas ou ne existe pas image donc affiche titre */}
        <img src={songindex.img} alt={songindex.title} />
       
       <h3>{songindex.title}</h3>
       <h3>{songindex.artist}</h3>
       
    </div>
  )
}

export default SongInfo