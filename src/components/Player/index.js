import React ,{useState} from 'react'
import Controls from '../Controls'
import SongInfo from '../Songinfo'
import "./styles.css"
import {songs} from'../../songs.js' /* on utulise carly prasser "{}" car Spngs est comme un liste */
const Player=() => {
  // const songs =()=>{
  //   const i =Math.floor(Math.random()*3);
  //   return songs(i);
  // }
  const [songindex,setSongIndex]  =useState(0); /*useState tjrs meme notation */
  return (
    <div className='music-player'>
    <SongInfo  songindex={songs[songindex]}/>
    <Controls 
    setSongIndex={setSongIndex}
    songindex={songindex}
    songs={songs}/>  
    </div>
  )
}

export default Player