import React from "react";
import { Container ,Content,Sponsers} from "./adStyle";
export default function  Ad() {
    const sponser = [
        "./../../images/sponsers/cocacola.png",
        "./../../images/sponsers/amazon.png",
        "./../../images/sponsers/square.png",
    ]
        return(
            <>
        <Container>
            <Content>
                <h3> sponser today is zara  </h3>
                <p> met consectetur adipisicing elit. Debitis, doloribus. </p>
            </Content>
        </Container>
        <div className="container-section">
                <Sponsers>
                {sponser.map((src,i)=>{
                  return <img src={src} key={i} />
                })}
                </Sponsers>
        </div>
        </>
        )
}