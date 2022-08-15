import React from "react";

function Game(){
    return(
        <div>
            <h3 className="header__title"> Games </h3>
            <p style={{textAlign:"center"}}> Wanna play some Games.
                <br/>
                Try out below.
            </p>
            <div style={{display:"flex", flexDirection:"column", textAlign:"center"}}>
                <div> <a href=""> Sudoku           </a> </div>
                <div> <a href=""> Tic Tac Toe      </a> </div>
                <div> <a href=""> Snake and Ladder </a> </div>
                <div> <a href=""> Car Race         </a> </div>
            </div>
        </div>
    )
}

export default Game;