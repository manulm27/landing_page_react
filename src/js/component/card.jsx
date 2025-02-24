import React from "react"

const styles = {
    width: "18rem",
    margin: "22px"
}

const Card = (props)=>{
    return (
        
        <div className="card" style={styles}>
            <img className="card-img-top" src={props.imgUrl} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
        </div>
    )
} 

export default Card