import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Geoloc from './Geoloc.js';



const URL = 'https://api.open-meteo.com/v1/forecast?latitude=65.52&longitude=25.41&hourly=temperature_2m&hourly=cloudcover'


//Tähän on laitettu kaikki yön tunnit jolloin on sen verran pimeää että voi tähtiä kuvata
function App() {
  const [Aika, setAika] = useState('')
  const [lampotila, setLampotila] = useState('')
  const [selkeaa, setSelkeaa] = useState('')
  const [kahdeksan, setKahdeksan] = useState('')
  const [yhdeksan, setYhdeksan] = useState('')
  const [kymmenen, setKymmenen] = useState('')
  const [yksitoista, setYksitoista] = useState('')
  const [kaksitoista, setKaksitoista] = useState('')
  const [yksi, setYksi] = useState('')
  const [kaksi, setKaksi] = useState('')
  const [kolme, setKolme] = useState('')
  const [nelja, setNelja] = useState('')
  const [viisi, setViisi] = useState('')


  //
  useEffect(() => {
    axios.get(URL)
      .then((response) => {
        setAika("Päivämäärä on " + response.data.hourly.time[0].substring(0, 10));
        setLampotila("Lämpötila on " + response.data.hourly.temperature_2m[0] + "C");
        if (response.data.hourly.cloudcover[20] < 20) { setKahdeksan("Kello " + response.data.hourly.time[20].substring(11, 16) + " Pilvipeite " + response.data.hourly.cloudcover[20] + "%" + " Eli hyvä sää kuvata tähän aikaan") }
        else { setKahdeksan("Kello " + response.data.hourly.time[20].substring(11, 16) + " Pilvipeite " + response.data.hourly.cloudcover[20] + "%") }
        if (response.data.hourly.cloudcover[21] < 20) { setYhdeksan("Kello " + response.data.hourly.time[21].substring(11, 16) + " Pilvipeite " + response.data.hourly.cloudcover[21] + "%" + " Eli hyvä sää kuvata tähän aikaan") }
        else { setYhdeksan("Kello " + response.data.hourly.time[21].substring(11, 16) + " Pilvipeite " + response.data.hourly.cloudcover[21] + "%") }
        if (response.data.hourly.cloudcover[22] < 20) { setKymmenen("Kello " + response.data.hourly.time[22].substring(11, 16) + " Pilvipeite " + response.data.hourly.cloudcover[22] + "%" + " Eli hyvä sää kuvata tähän aikaan") }
        else { setKymmenen("Kello " + response.data.hourly.time[22].substring(11, 16) + " Pilvipeite " + response.data.hourly.cloudcover[22] + "%") }
        if (response.data.hourly.cloudcover[23] < 20) { setYksitoista("Kello " + response.data.hourly.time[23].substring(11, 16) + " Pilvipeite " + response.data.hourly.cloudcover[23] + "%" + " Eli hyvä sää kuvata tähän aikaan") }
        else { setYksitoista("Kello " + response.data.hourly.time[23].substring(11, 16) + " Pilvipeite " + response.data.hourly.cloudcover[23] + "%") }
        if (response.data.hourly.cloudcover[24] < 20) { setKaksitoista("Kello " + response.data.hourly.time[24].substring(11, 16) + " Pilvipeite " + response.data.hourly.cloudcover[24] + "%" + " Eli hyvä sää kuvata tähän aikaan") }
        else { setKaksitoista("Kello " + response.data.hourly.time[24].substring(11, 16) + " Pilvipeite " + response.data.hourly.cloudcover[24] + "%") }
        if (response.data.hourly.cloudcover[25] < 20) { setYksi("Kello " + response.data.hourly.time[25].substring(11, 16) + " Pilvipeite " + response.data.hourly.cloudcover[25] + "%" + " Eli hyvä sää kuvata tähän aikaan") }
        else { setYksi("Kello " + response.data.hourly.time[25].substring(11, 16) + " Pilvipeite " + response.data.hourly.cloudcover[25] + "%") }
        if (response.data.hourly.cloudcover[26] < 20) { setKaksi("Kello " + response.data.hourly.time[26].substring(11, 16) + " Pilvipeite " + response.data.hourly.cloudcover[26] + "%" + " Eli hyvä sää kuvata tähän aikaan") }
        else { setKaksi("Kello " + response.data.hourly.time[26].substring(11, 16) + " Pilvipeite " + response.data.hourly.cloudcover[26] + "%") }
        if (response.data.hourly.cloudcover[27] < 20) { setKolme("Kello " + response.data.hourly.time[27].substring(11, 16) + " Pilvipeite " + response.data.hourly.cloudcover[27] + "%" + " Eli hyvä sää kuvata tähän aikaan") }
        else { setKolme("Kello " + response.data.hourly.time[27].substring(11, 16) + " Pilvipeite " + response.data.hourly.cloudcover[27] + "%") }
        if (response.data.hourly.cloudcover[28] < 20) { setNelja("Kello " + response.data.hourly.time[28].substring(11, 16) + " Pilvipeite " + response.data.hourly.cloudcover[28] + "%" + " Eli hyvä sää kuvata tähän aikaan") }
        else { setNelja("Kello " + response.data.hourly.time[28].substring(11, 16) + " Pilvipeite " + response.data.hourly.cloudcover[28] + "%") }
        if (response.data.hourly.cloudcover[29] < 20) { setViisi("Kello " + response.data.hourly.time[29].substring(11, 16) + " Pilvipeite " + response.data.hourly.cloudcover[29] + "%" + " Eli hyvä sää kuvata tähän aikaan") }
        else { setViisi("Kello " + response.data.hourly.time[29].substring(11, 16) + " Pilvipeite " + response.data.hourly.cloudcover[29] + "%") }
        console.log(response)
      }).catch(error => {
        alert(error);
      });
  }, [])


  return (
    <div className="tausta">
      <h1>Onko tänään hyvä sää kuvata tähtiä?</h1>
      <h2>{Aika}</h2>
      <h2>{lampotila}</h2>
      <p>{selkeaa}</p>
      <p>{kahdeksan}</p>
      <p>{yhdeksan}</p>
      <p>{kymmenen}</p>
      <p>{yksitoista}</p>
      <p>{kaksitoista}</p>
      <p>{yksi}</p>
      <p>{kaksi}</p>
      <p>{kolme}</p>
      <p>{nelja}</p>
      <p>{viisi}</p>
      <p>Tähtiä kuvatessa on tärkeää ettei taivaalla ole liikaa pilvipeitettä. Vähäinen määrä luo hyvää tunnelmaa kuviin. Kun pilviä on alle 20%, on erittäin hyvä sää kuvata.</p>
      <Geoloc />
    </div>
  );





}

export default App;
