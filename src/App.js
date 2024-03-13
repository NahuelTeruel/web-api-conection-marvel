import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react';

//URL 
//https://gateway.marvel.com:443/v1/public/characters?apikey=8ffd1d4aac1a476a4170d1b90984553c

// public key
// 8ffd1d4aac1a476a4170d1b90984553c

//private key
//512d899a7351e871311b8bdcff2a78354c607962

//ts = 1

// 1512d899a7351e871311b8bdcff2a78354c6079628ffd1d4aac1a476a4170d1b90984553c

// Hash MD5: 0d906d50d020f6623ecc79cd8cda5337

function App() {

  const [personajes, setPersonajes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    axios.get('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=8ffd1d4aac1a476a4170d1b90984553c&hash=0d906d50d020f6623ecc79cd8cda5337').then(res=>{
    setPersonajes(res.data.data.results);
    setTimeout(() => {
      setLoading(false);
    }, 1620);
    }).catch(error=>console.log(error))
  },[setPersonajes, setLoading])

  console.log(personajes)



  return (
    <div className={`App ${loading ? 'loading' : 'loaded'}`} >
      <img className='title' src="https://i0.wp.com/www.tomosygrapas.com/wp-content/uploads/2016/07/marvelstudios-7611c.jpg" />
      <div className="card-container">
        {personajes.map(per => (
          <div className="card" key={per.id}>
            <img src={`${per.thumbnail.path}.${per.thumbnail.extension}`} className="card-img-top" alt={per.name} />
            <div className="card-body">
              <p className="card-text">{per.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
