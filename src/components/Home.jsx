import React from 'react'
import vg from "../assets/2.webp"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"


const Home = () => {
  return (
    <>

    <div className='home'>
        <main>
            <h1>TechStar</h1>
            <p>Solutions to all your problems</p>
        </main>
    </div>

    <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo repellat nisi recusandae sunt. Praesentium ad deserunt cumque. Atque perferendis animi quisquam sequi laborum, error esse dolores mollitia eius obcaecati praesentium! Fugit nihil temporibus amet. Sunt, vitae. Error nemo molestias, quos minus facere dolorem repellat architecto amet, debitis reiciendis consectetur exercitationem.
            </p>
        </div>
    </div>

    <div className="home3" id="#about">
        <div>
            <h1>Who we Are?</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dolores officia iure incidunt assumenda. 
                
                Earum commodi sequi expedita porro, esse beatae, a eaque repudiandae dolore eligendi autem fugit, vel soluta voluptas aliquam atque iure consectetur ipsa iusto totam veniam accusamus deleniti ab sit. 
                
                Unde autem cumque fugit eaque ab dolore dolorem suscipit enim excepturi quos quisquam voluptas, minus velit exercitationem perspiciatis, provident vel labore? Perspiciatis ipsam illum reiciendis ad eum ex tempora natus harum praesentium odit qui nulla excepturi quis quidem magnam earum, minus laudantium perferendis velit dolores. 
                
                Nesciunt cum in alias exercitationem corrupti a esse fugit suscipit ipsam ad.
            </p>
        </div>
    </div>

    <div className="home4">
        <div>
            <h1>Brands</h1>
            <article>
                <div style={{animationDelay:"0.5s"}}>
                    <AiFillGoogleCircle/>
                    <p>Google</p>
                </div>  
                <div style={{animationDelay:"0.5s"}}>
                    <AiFillAmazonCircle/>
                    <p>Amazon</p>
                </div>
                <div style={{animationDelay:"0.7s"}}>
                    <AiFillYoutube/>
                    <p>Youtube</p>
                </div>
                <div style={{animationDelay:"1s"}}>
                    <AiFillInstagram/>
                    <p>Instagram</p>
                </div>
            </article>
        </div>
    </div>
    
    </>
  )
}

export default Home