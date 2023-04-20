import React, {useState,useRef, useEffect}from 'react'
import { FaBackward,FaPause,FaPlay,FaForward } from "react-icons/fa";
import  "./styles.css" 
const Controls = (props) => {
  const {songindex,setSongIndex,songs}=props;
  const au=useRef(null);
 const[isPlaying,setIsPlaying] =useState(false);
const  handlepaly =() =>/*sans {} car 1 seul extraction */
  /*setIsPlaying(!isPlaying) : 1ere methode */
  setIsPlaying((prev) => !prev); /* pour evite cas d'erreur en cas de beaucoup utilisations (private status )(prev ou quelques soit)*/
  useEffect (()=>{
    if (isPlaying){
      au.current.play();
    } else {
      au.current.pause()
    }
    /* ou 1 seul ligne : "isPlaying? au.current.play(): au.current.pause()" */
  },[isPlaying,setSongIndex]) /* si n'existe pas [] donc sera repetetions infinie
     si existe donc repetion a chaque fois varie le parametre qui existe dans []*/
 //const palyNextSong =() =>{
  //setSongIndex((prev)=>prev+1 > songs.length-1 ? 0 : prev+1) 
  /*1ere methode */
  /*2eme methode */
 // setSongIndex((prev)=>(prev+1) % songs.length);
  //setIsPlaying(true);
 //}
 //const BackSong = () =>{
  //setSongIndex((prev)=>prev-1<0 ?songs.length-1 :prev-1)}
 // setSongIndex((prev) => (prev + songs.length -1 )% songs.length);}
 // simplifie le 2 methode  palyNextSong et BackSong  en 1 fct "sens"
//  const sens = (forward=true)=> { 
//   forward ? setSongIndex((prev)=>prev+1 > songs.length-1 ? 0 : prev+1)
//   : setSongIndex((prev)=>prev-1<0 ?songs.length-1 :prev-1) }
  // simplifier plus "sens"
  const sens = (forward=true)=> { 
    setSongIndex((prev)=>forward ? 
    (prev+1) % songs.length 
    : (prev + songs.length -1 )% songs.length);
    setIsPlaying(false);
  
  }
  return (
    
    <div className="controls">
      <audio src={songs[songindex].src} ref={au} />
        <FaBackward className='player-icon' onClick={sens}/>
        <span className='player-icon play-button' onClick={handlepaly}>
        {isPlaying ? <FaPause /> : <FaPlay />}
        </span>
      <FaForward  className='player-icon' onClick={sens}/>
    </div>
  );
};

export default Controls