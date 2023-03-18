import {useState} from 'react'
import Shedrack from '../assets/shedrack.jpeg'
import Elijah from '../assets/elijah.jpg'
import Esther from '../assets/esther.jpg'
import Helen from '../assets/helen.jpg'
import '../styles/committee.css'

function Committee() {

    const [item, setItem] = useState([
        {
            "id": 0,
            "name": "Ugong Shedrack Gogo",
            "image": Shedrack,
            "position": "President"
        },
        {
            "id": 1,
            "name": "Ebirien Esther Awor",
            "image": Esther,
            "position": "Vice President"
        },
        {
            "id": 2,
            "name": "Zaccheaus Awajiteleyem",
            "image": Shedrack,
            "position": "Secretary General"
        },
        {
            "id": 3,
            "name": "Gilbert Elijah",
            "image": Elijah,
            "position": "D.O.S"
        },
        {
            "id": 4,
            "name": "Gilbert Judith Elijah",
            "image": Shedrack,
            "position": "Financial Secretary"
        },
        {
            "id": 5,
            "name": "Egbe Helen Eneisotu",
            "image": Helen,
            "position": "Treasurer"
        },
        {
            "id": 6,
            "name": "???",
            "image": Shedrack,
            "position": "???"
        }
    ]);

    return(
        <div className='committee'>
            <h2>Our Committee</h2>
            <div className="cards">
                {item.map((data) => (
                    <div className="card" key={data.id}>
                        <img src={data.image} alt="" />
                        <div className="details">
                            <h4>{data.name}</h4>
                            <p>{data.position}</p>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}
export default Committee;