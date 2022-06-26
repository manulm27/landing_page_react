import React from "react"
import Jumbotron from "./jumbotron.jsx"
import Card from "./card.jsx"
import Footer from "./footer.jsx"
import PropTypes from "prop-types";

const Content = () => { 

    Card.propTypes = {
        imgUrl: PropTypes.string
    }

    return (
        <div className="container-fluid content">
            <div className="row d-flex justify-content-center">
                <Jumbotron className="w-100" />
            </div>
            <div className="row d-flex justify-content-center">
                <Card imgUrl="https://us.123rf.com/450wm/scyther5/scyther51610/scyther5161000165/64977785-fotograf%C3%ADa-fot%C3%B3grafo-lente-vista-de-la-c%C3%A1mara-de-v%C3%ADdeo-o-foto-lente-de-enfoque-borrosa-paisaje-cielo.jpg?ver=6" />
                <Card imgUrl="https://us.123rf.com/450wm/scyther5/scyther51610/scyther5161000165/64977785-fotograf%C3%ADa-fot%C3%B3grafo-lente-vista-de-la-c%C3%A1mara-de-v%C3%ADdeo-o-foto-lente-de-enfoque-borrosa-paisaje-cielo.jpg?ver=6" />
                <Card imgUrl="https://us.123rf.com/450wm/scyther5/scyther51610/scyther5161000165/64977785-fotograf%C3%ADa-fot%C3%B3grafo-lente-vista-de-la-c%C3%A1mara-de-v%C3%ADdeo-o-foto-lente-de-enfoque-borrosa-paisaje-cielo.jpg?ver=6" />
                <Card imgUrl="https://us.123rf.com/450wm/scyther5/scyther51610/scyther5161000165/64977785-fotograf%C3%ADa-fot%C3%B3grafo-lente-vista-de-la-c%C3%A1mara-de-v%C3%ADdeo-o-foto-lente-de-enfoque-borrosa-paisaje-cielo.jpg?ver=6" />
            </div>
            <div className="row bg-dark footer">
                <Footer/>
            </div>

        </div>
    )
}

export default Content