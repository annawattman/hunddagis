import './welcome.css'
import { useEffect } from "react";
import { Link } from "react-router-dom";
import dogLogo from '/assets/img/dog-logo.png'

const Welcome = (props) => {

    useEffect(() => {
        props.setHeaderTitle();
    }, []);


    return (

        <div className="welcome">
            <div className="container">
                <img className="dog-logo" src={dogLogo} width="800px" height="300px" alt="" />
                <h1>Välkommen!</h1>
                <p className="info">Hej och välkommen till Håriga Hundar Hunddagis! <br />
                    Vi finns strax utanför Norrtälje, cirka 15 minuter från centrum.<br />
                    Här finns just nu 14 olika hundar. <br />
                    Vi tar emot alla hundar och har olika avdelningar beroende på socialt behov, storlek och andra aspekter. <br />
                    <b>VIKTIGT!</b> Alla hundar måste vara vaccinerade för att få vara på vårt hunddagis.<br />
                    Alla som jobbar på Håriga Hundar är utbildade inom djur. Vi besitter en bred kunskap och år av erfarenhet. <br />
                    Vi har ett nära samarbete med Kattiga Katter Katthem. <br />
                    Ni når oss på 0767-676676 eller harigahundar@hunddagis.se<br />
                    Varmt välkomna!<br />
                </p>

                <Link to="/dogs">
                    <button>Se inskrivna hundar</button>
                </Link>

            </div>
        </div>

    );
}

export default Welcome;