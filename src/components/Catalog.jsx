import './catalog.css' 
import { useState, useEffect } from "react"; 
import hundar from "/assets/img/hund1.jpg" 
import dogLogo from "/assets/img/dog-logo.png" 

const Catalog = (props) => { // Skapa en funktionell komponent som heter Catalog och tar emot props

  //Skapar mina konstanter för de olika "knapparna"
  
  const showAllDogs = "Visa alla hundar"; 
  const showPresentDogs = "Visa inskrivna hundar"; 
  const showAbsentDogs = "Visa utskrivna hundar"; 

  const [displayedDogs, setDisplayedDogs] = useState([]); // Skapar en state-variabel med en tom array
  const [filterOption, setFilterOption] = useState(showAllDogs); // Skapar en state-variabel med texten i showAllDogs

  useEffect(() => { // Använder useEffect för att köra en funktion varje gång filterOption uppdateras
    const dogs = JSON.parse(localStorage.getItem('dogs')); // Hämtar data från localStorage och sparar det i variabeln dogs

    if (dogs) { // Kollar om det finns data i localStorage och olika alternativen under
      if (filterOption === showPresentDogs) { 
        setDisplayedDogs(dogs.record.filter((dog) => dog.present)); // ...sätt setDisplayedDogs till en array med endast de hundar som är inskrivna
      } else if (filterOption === showAbsentDogs) { // ...eller om filterOption är lika med showAbsentDogs...
        setDisplayedDogs(dogs.record.filter((dog) => !dog.present)); // ...sätt setDisplayedDogs till en array med endast de hundar som är utskrivna
      } else { // ...annars, om filterOption är lika med showAllDogs...
        setDisplayedDogs(dogs.record); // ...sätt setDisplayedDogs till en array med alla hundar
      }
    }
  }, [filterOption]); // Lägg till filterOption som beroende för att useEffect ska köras vid uppdateringar av filterOption

  const handleDogClick = (dog) => { // Skapa en funktion som tar emot en hund och anropar en funktion som finns i props
    props.setSelectedDog(dog); // Använd funktionen setSelected
  };

  const handleDecided = (option) => {
    setFilterOption(option);
  };

  const options = [showAllDogs, showPresentDogs, showAbsentDogs].map(
    (option, i) => (
      <p className="option" key={i}>
        <label>
          <input
            type="radio"
            name="option"
            defaultChecked={option === showAllDogs}
            onClick={() => handleDecided(option)}
          />{" "}
          {option}
        </label>
      </p>
    )
  );
// const dogItems = displayedDogs && displayedDogs.map((dog, i) => (
  


  const dogItems = displayedDogs?.map((dog, i) => (

    <section key={i} className={`dog-section`} 
    onClick={() => handleDogClick(dog)}>
      <div className="dog-img"><img  src={hundar} alt={`A pic of ${dog.name}`} /></div>
      
      <div className="dog-card-info-container">
        <p><b>Name:</b> {dog.name}</p>
        <p><b>Breed:</b> {dog.breed}</p>
        <p><b>Owner:</b> {dog.owner.name} {dog.owner.lastName}</p>
        
      </div>
    </section>
  )); 


  return (
    <div className="catalog">
    <img className="dog-logo" src={dogLogo} width="800px" height="300px" alt="" />

      <section className="options">{options}</section>
      <div className="dogs-container">{dogItems}</div>
    </div>
  );
};

export default Catalog;