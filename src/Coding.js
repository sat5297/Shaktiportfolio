import React from "react";
import "./Home.css";

function Coding(){
    return(
        <div>
            <h4 className="header__title"> Coding Profiles </h4>
            
            <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>

                <div className="coding__div"> <a href="https://leetcode.com/user4789b/" target="_blank" rel="noreferrer"> LeetCode </a> </div>
                
                <div className="coding__div"> <a href="https://www.codechef.com/users/shakti5297" target="_blank" rel="noreferrer"> CodeChef </a> </div>
                
                {/* <div> <a href=""> Codeforces </a> </div> */}

                <div className="coding__div"> <a href="https://auth.geeksforgeeks.org/user/shaktiratan/practice/"> Geeks for Geeks </a> </div>
                
                <div className="coding__div"> <a href="https://www.hackerrank.com/shaktiratan_5297" target="_blank" rel="noreferrer"> HackerRank </a> </div>
                
                <div className="coding__div"> <a href="https://www.hackerearth.com/@shakti58" target="_blank" rel="noreferrer"> HackerEarth </a> </div>
            
            </div>

            <h4 className="header__title"> LinkedIn, GitHub and Stack Overflow </h4>

            <div  style={{display:"flex", flexDirection:"row", justifyContent: "center"}}>
                
                <div className="coding__div"> <a href="https://www.linkedin.com/in/shakti-r-037b1a163/" target="_blank" rel="noreferrer"> LinkedIn </a> </div>
                
                <div className="coding__div"> <a href="https://github.com/sat5297" target="_blank" rel="noreferrer"> GitHub</a> </div>
                
                <div className="coding__div"> <a href="https://stackoverflow.com/users/12053291/shakti-ratan" target="_blank" rel="noreferrer"> Stack Overflow </a> </div>
            
            </div>
        </div>
    )
}

export default Coding;