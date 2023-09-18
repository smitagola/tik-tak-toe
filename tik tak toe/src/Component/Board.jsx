import React, { useRef, useState } from 'react'
import '../Component/Board.css'
import cross from '../assets/cross.png'
import circle from '../assets/circle.png'
let data = ["","","","","","","","",""];
const Board = () => {
  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);
  const box4 = useRef(null);
  const box5 = useRef(null);
  const box6 = useRef(null);
  const box0 = useRef(null);
  const box7 = useRef(null);
  const box8 = useRef(null);
  let box_array = [box0,box1,box2,box3,box4,box5,box6,box7,box8];
  let title = useRef(null);
  let player = useRef(null);
  let  [xwin ,setXwin] = useState(0);
  let [owin , setOwin] = useState(0);
  let [count , setCount ] = useState(0);
  const [lock , setLock ] = useState(false);
  const toggle = (e,num) =>{
    if(lock){
      console.log('winner');
      return 0;
    }
    if(count%2===0){
      e.target.innerHTML = `<img src='${circle}'>`;
      data[num]='o';
      player.current.innerHTML = "please play its X turn "
      setCount(++count);
     
    }
    else
    {
      e.target.innerHTML = `<img src='${cross}'>`;
      data[num]='x';
      player.current.innerHTML = "please play its O turn "
      setCount(++count);
    }
    checkwin();
  }
  const checkwin = () =>{
    console.log(data);
    if(data[0]===data[1] && data[1]===data[2] && data[2]!=="")
    {
    
      won(data[2]);
    }
    else if(data[3]===data[4] && data[4]===data[5] && data[5]!=="")
    {
      won(data[5]);
    }
    else if(data[6]===data[7] && data[7]===data[8] && data[8]!=="")
    {
      won(data[8]);
    }
    else if(data[0]===data[3] && data[3]===data[6] && data[6]!=="")
    {
      won(data[6]);
    }
    else if(data[1]===data[4] && data[4]===data[7] && data[7]!=="")
    {
      won(data[7]);
    }
    else if(data[2]===data[5] && data[5]===data[8] && data[8]!=="")
    {
      won(data[8]);
    }
    else if(data[0]===data[4] && data[4]===data[8] && data[8]!=="")
    {
      won(data[8]);
    }
    else if(data[2]===data[4] && data[4]===data[6] && data[6]!=="")
    {
      won(data[6]);
    }
  }
  const won = (winner) =>{
      setLock(true);
      if(winner === "x")
      {
        // alert('X is winner')
        setXwin(++xwin);
        title.current.innerHTML = 'congratulation <span>X</span> is winner ';
        player.current.innerHTML="";
      }
      else 
      {
        // alert('O is winner')
        setOwin(++owin);
        title.current.innerHTML = 'congratulation <span>O</span> is winner ';
        player.current.innerHTML="";
      
      }
  }
 const reset = () =>{
  setLock(false);
  title.current.innerHTML = 'Tik Tak Toe With <span>React</span>';
  box_array.map((e)=>{
    e.current.innerHTML="";
    data = ["","","","","","","","",""];
    console.log(data);
  })
 }
  return (
   <>
   <div className="title" ref={title}>Tik Tak Toe With <span>React</span></div>
   <div className="win"><span className="x">X - {xwin} |</span><span className='o'>O - {owin}</span></div>
   <div className="board">
    <div className="row1">
      <div className="box1" ref={box0} onClick={(e)=>{toggle(e,0)}}></div>
      <div className="box1" ref={box1} onClick={(e)=>{toggle(e,1)}}></div>
      <div className="box1" ref={box2} onClick={(e)=>{toggle(e,2)}}></div>
    </div>
    <div className="row2">
    <div className="box1" ref={box3} onClick={(e)=>{toggle(e,3)}}></div>
    <div className="box1" ref={box4} onClick={(e)=>{toggle(e,4)}}></div>
    <div className="box1" ref={box5} onClick={(e)=>{toggle(e,5)}}></div>
    </div>
    <div className="row3">
    <div className="box1" ref={box6} onClick={(e)=>{toggle(e,6)}}></div>
    <div className="box1" ref={box7} onClick={(e)=>{toggle(e,7)}}></div>
    <div className="box1" ref={box8} onClick={(e)=>{toggle(e,8)}}></div>
    </div>
   </div>
   <div className="player" ref={player}>O turn to play </div>
   <div className="resetbtn"><button onClick={reset}>Reset</button></div>
   </>
  )
}

export default Board