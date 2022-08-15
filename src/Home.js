import React from "react";
import "./Home.css";

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
                <h3 className="header__title"> Languages and Tools </h3>
                <img className="coding__div" alt="HTML5" width="40px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" />
                <img className="coding__div" alt="CSS3" width="40px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" />
                <img className="coding__div" alt="JavaScript" width="40px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" />
                <img className="coding__div" alt="Java" width="40px" src="https://raw.githubusercontent.com/github/explore/main/topics/java/java.png"/>
                <img className="coding__div" alt="Node.js" width="40px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" />
                <img className="coding__div" alt="Express" width="40px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7S33Oq2FeRbyBBA6l1q8PwLVa3SzaONO-9Q&usqp=CAU" />
                <img className="coding__div" alt="MongoDB" width="40px" src="https://github.com/mongodb/mongo/blob/master/docs/leaf.svg" />
                <img className="coding__div" alt="SQL" width="40px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sql/sql.png" />
                <img className="coding__div" alt="MySQL" width="40px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mysql/mysql.png" />
                <img className="coding__div" alt="Git" width="40px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png" />
                <img className="coding__div" alt="GitHub" width="40px" src="https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png" />
                <img className="coding__div" alt="Terminal" width="40px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/terminal/terminal.png" />
                <img className="coding__div" alt="Linux" width="40px" src="https://raw.githubusercontent.com/github/explore/main/topics/linux/linux.png" />
            </div>

            <div> <h3 className="header__title"> Projects </h3> </div>  

            <div style={{display: "flex", flexDirection: "row", margin:"10px"}}>                  
                <div className="project__block">
                    <h4> Flight Booking System</h4>
                    <p> The user can book flight seat using this application.
                        <br/>
                        The flight details are stored in the format of files and multiple files 
                        are created using the same rule.    
                    </p>
                    <span>
                        <a href="https://github.com/sat5297/Airlines-Management" target="_blank" rel="noreferrer">

                        <img width="20px" src="https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png"/>
                        </a>
                    </span>
                </div>

                <div className="project__block">
                    <h4> Amazon Clone </h4>
                    <p> This an ecommerce application. The user can buy products and search for products. 
                        <br/>
                        The user can make payments using STRIPE payment Gateway.
                        <br/>
                        The order details are stored in the Database.
                    </p>
                    <span>
                        <a href="https://github.com/sat5297/amazon-clone" target="_blank" rel="noreferrer">

                        <img width="20px" src="https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png"/>
                        </a>
                    </span>
                </div>

                <div className="project__block">
                    <h4> Employee Management System </h4>
                    <p> The tech stack includes NodeJs, ReactJS and MongoDB Atlas.<br/>
                        It uses MVC Design pattern along with Layered architecture.<br/>
                        Backend consists of microservices for various functionalities.<br/>
                        Employee can login, check personal info and apply leave. <br/>
                        The manager can see employees under him and create employee. <br/>
                        It has also feature to search employees in organisation.<br/>
                    </p>
                    <span>
                        <a href="https://github.com/sat5297/frontendManagementSystem" target="_blank" rel="noreferrer">

                        <img width="20px" src="https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png"/>
                        </a>
                    </span>
                </div>
            </div>

            <div className="header__title">
                <div> <h4> Work Experience </h4> </div>
                <div className="work__block">
                    <h4> Project Engineer @ Wipro Limited </h4>
                    <p> Lead the product and performed upgradation of the product. <br/>
                        Worked on technologies including ReactJS, Javascript and
                        confD for RPC calls. <br/>
                        Performed Json RPC API testing using Postman and
                        integrated them in the UI. <br/>
                        Performed RCA for some of the issues and resolved them. <br/>
                    </p>    
                </div>

                <div className="work__block">
                    <h4> Software Developer Intern @ Get Me Roof</h4>
                    <p> Worked on a project to use the images of real-estate
                        property to make videos from them using FFmpeg library. <br/>
                        The details of the property were added as subtitles.  <br/>
                        The videos were used to help users get a better understanding
                        of the property. <br/>
                        Worked on a project to analyze and scrape real estate data
                        from different websites on real time basis. <br/> Used puppeteer
                        tool, javascript libraries and stored the data in database at
                        backend. <br/> </p>
                </div>
            </div>
            
            
        </div>
    )
}

export default Home;