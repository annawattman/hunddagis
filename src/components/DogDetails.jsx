import './dogDetails.css';
import { useParams } from 'react-router-dom';
import hundar from '/assets/img/hund1.jpg';
import dogLogo from '/assets/img/dog-logo.png';

const DogDetails = (props) => {
  const { selectedDog, setSelectedDog } = props;
  const params = useParams();
  const dogs = JSON.parse(localStorage.getItem('dogs'));

  // Hitta indexet av den valda hunden i listan med hundar
  const currentDogIndex = dogs.record.findIndex((dog) => selectedDog.chipNumber === dog.chipNumber);

  // Kollar om indexet i url:en matchar den aktuella hunden, annars uppdatera "selectedDog" så att den matchar hunden som är efterfrågad
const index = Number(params.currentdog) - 1;
(index !== currentDogIndex) && setSelectedDog(dogs.record[index]);

  return (
    <div className="dogDetails">
      <h1>{selectedDog.name}</h1>
      <div className="container">
        <section>
          <img src={hundar} alt={`En bild  ${selectedDog.name}`} />
        </section>
        <section className="infoSection">
          <section className="dogTitle"></section>
          <p>
            <b>Namn:</b> {selectedDog.name}
          </p>
          <p>
            <b>Ålder:</b> {selectedDog.age}
          </p>
          <p>
            <b>Kön:</b> {selectedDog.sex}
          </p>
          <p>
            <b>Ras:</b> {selectedDog.breed}
          </p>
          <p>
            <b>Chip:</b> {selectedDog.chipNumber}
          </p>
          <section className="ownerTitle">
            <p>Ägare:</p>
          </section>
          <p>
            <b>Namn:</b> {selectedDog.owner.name}
          </p>
          <p>
            <b>Efternamn:</b> {selectedDog.owner.lastName}
          </p>
          <p>
            <b>Telefonnummer:</b> {selectedDog.owner.phoneNumber}
          </p>
        </section>
      </div>
    </div>
  );
};

export default DogDetails;
