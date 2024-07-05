import React, { useEffect, useState } from 'react'

export default function Tictactoe() {
    
    const [turn, setTurn] = useState(true)
    let [crossEntries , setCrossEntries] = useState([])
    let [circleEntries , setCircleEntries] = useState([])
    useEffect(() => {
        const cells = document.querySelectorAll(".cell");
        const cellNumbers = Array.from(cells)
        // console.log(cells)
        cells.forEach((cell) => {
          cell.addEventListener("click", handleClick);
        });
    
        return () => {
          cells.forEach((cell) => {
            cell.removeEventListener("click", handleClick);
          });
        };
      }, [turn]);
      useEffect(() => {
        checkWin();
      }, [crossEntries, circleEntries]);    
      const handleClick = (e) => {
        const cells = document.querySelectorAll('.cell')
        if (turn) {
          e.target.classList.add("cross");
          // console.log(turn);
          // console.log(cellNumbers.indexOf(e.target))
          setTurn(false);
          let index = -1;
          for (let i = 0; i < cells.length; i++) {
            if (cells[i] === e.target) {
              index = i;
              // console.log(index)
              break;
            }
          }
          setCrossEntries([...crossEntries, index]);
          
        } else {
          e.target.classList.add("circle");
          setTurn(true);
          // console.log(turn);
          let index = -1;
          for (let i = 0; i < cells.length; i++) {
            if (cells[i] === e.target) {
              index = i;
              // console.log(index)
              break;
            }
          }
          setCircleEntries([...circleEntries, index]);
        }
      };
      const possibleWins = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[6,4,2]]
      // useEffect(()=>{
        const checkWin = () => {
          if((circleEntries.length+crossEntries.length)>=9){
            // console.log('draw')
            gameOver('draw')

          }
          for (let i = 0; i < possibleWins.length; i++) {
            // console.log(circleEntries.length+crossEntries.length)
            for(let winCondition of possibleWins){
              if(winCondition.every(index=> crossEntries.includes(index))){
                gameOver('cross')
                // console.log('cross win')
              }
              else if(winCondition.every(index=> circleEntries.includes(index))){
                // console.log('circle wins')
                gameOver('circle')

              }
            }
            
      }
    }
    const gameOver = (result)=>{
      const wins = document.querySelector('.wins')
      if(result==='cross'){
        console.log('cross wins')
        wins.innerHTML = 'Cross wins'
       
    }
    else if(result==='circle'){
      console.log('circle wins')
      wins.innerHTML = 'Cross wins'

    }
    else if(result==='draw'){
      console.log('draw')
      wins.innerHTML = 'Draw'

    }
    const cells = document.querySelectorAll('.cell')
    cells.forEach(cell=>{
      cell.removeEventListener('click', handleClick)
    })
  }
let checkSubset = (parentArray, subsetArray) => {
  return subsetArray.every((el) => {
      return parentArray.includes(el)
  })
}

      // console.log(crossEntries)
      // console.log(circleEntries)
  return (
    <div className='tictactoe'>
        <h1>Tic-Tac-Toe</h1>
        <h2 className='wins'></h2>
        <div className="main">
            <div className="board">
                <div className="row">
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                </div>
                <div className="row">
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                </div>
                <div className="row">
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                </div>
            </div>
        </div>
    </div>
  )
}
