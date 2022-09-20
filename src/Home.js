import React from "react";
import "./Home.css";
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import Work from "./workExperience";
import projects from "./projects";

function Home(){
    return(
        <div>
            <div className="profile__image">
                <h1>Hi, I'm Shakti Ratan. 
                    <img src="https://raw.githubusercontent.com/ABSphreak/ABSphreak/master/gifs/Hi.gif" width="30px" alt="Hi" />
                </h1>
            </div>

            <div style={{marginLeft:"9px"}}>
                🔭 I’m currently learning about Backend Development. <br/>
                🌱 I have sound knowledge in Data Structures and Algorithms, NodeJs, ReactJS, MongoDB, C++, OOP Concepts and Javascript.<br/>
                   I like working on complex problems and building scalable solutions.<br/>
                📫 How to reach me: shaktiratan.5297@gmail.com.<br/>
                My skills include :<br/>
                🔹️Programming Language: C++, JavaScript, JAVA, Python <br/>
                🔹️Problem Solving Skills: Data Structures & Algorithms ,OOP concepts <br/>
                🔹️Web Development: HTML, CSS, Javascript <br/>
                🔹️Framework & Tools : ReactJs, NodeJs, Git , VS Code <br/>
                🔹️Database : MySQL, MongoDB <br/>
                🔹️Operating System: Linux, Windows, MAC <br/>
            </div>

            <div className="header__title">
                <h4> Work Experience </h4>
                <Slider>
                    {Work.map((work,index)=> {
                        return <div key={index}>
                            <h4>{work.title}</h4>
                            <div>
                                <p>{work.work1}</p>
                                <p>{work.work2}</p>
                                <p>{work.work3}</p>
                                <p>{work.work4}</p>
                            </div>
                        </div>
                    })}
                </Slider>
            </div>

            <div className="header__title"> <h3> Projects </h3> 
                <Slider>
                {
                    projects.map((project,index) => {
                        return(
                            <div className="project__block" >
                                <h4>{project.title}</h4>
                                <p>{project.desc1}</p>
                                <p>{project.desc2}</p>
                                <p>{project.desc3}</p>
                                <p>{project.tech}</p>
                                <span>
                                    <a href={project.githubLink} target="_blank" rel="noreferrer">
                                    <img height="23px" width="23px" src="https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png" alt={project.alt}/>
                                    </a>
                                </span>
                            </div>
                        )})
                }
                </Slider>
            </div> 
            
            <div className="header__title">
                <h3 className="header__title"> Languages and Tools </h3>
                <img className="coding__div" alt="HTML5" height="30px" width="30px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" />
                <img className="coding__div" alt="CSS3" height="30px" width="30px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" />
                <img className="coding__div" alt="JavaScript" height="30px" width="30px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" />
                <img className="coding__div" alt="Java" height="30px" width="30px" src="https://raw.githubusercontent.com/github/explore/main/topics/java/java.png"/>
                <img className="coding__div" alt="Node.js" height="30px" width="30px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" />
                <img className="coding__div" alt="Express" height="30px" width="30px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7S33Oq2FeRbyBBA6l1q8PwLVa3SzaONO-9Q&usqp=CAU" />
                <img className="coding__div" alt="MongoDB" height="30px" width="30px" src="https://raw.githubusercontent.com/mongodb/mongo/master/docs/leaf.svg" />
                <img className="coding__div" alt="SQL" height="30px" width="30px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sql/sql.png" />
                <img className="coding__div" alt="MySQL" height="30px" width="30px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mysql/mysql.png" />
                <img className="coding__div" alt="Git" height="30px" width="30px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png" />
                <img className="coding__div" alt="GitHub" height="30px" width="30px" src="https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png" />
                <img className="coding__div" alt="Terminal" height="30px" width="30px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/terminal/terminal.png" />
                <img className="coding__div" alt="Linux" height="30px" width="30px" src="https://raw.githubusercontent.com/github/explore/main/topics/linux/linux.png" />
            </div>
        </div>
    )
}

export default Home;