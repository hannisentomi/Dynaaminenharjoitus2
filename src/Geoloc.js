import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';


//Alunperin oli tarkotus lähteä tekemään geolokaatiota mutta päädyinkin tekemään vähän relevantimman auringon nousu ja lasku ajan.
export default function Geoloc() {
  const [nousu, setNousu] = useState('')
  const [lasku, setLasku] = useState('')
  const URL2 = 'https://api.open-meteo.com/v1/forecast?latitude=65.52&longitude=25.41&timezone=GMT&daily=sunrise&daily=sunset'


  useEffect(() => {
    axios.get(URL2)
      .then((response) => {
        setNousu("Aurinko Nousee " + response.data.daily.sunrise[0].substring(11, 16));
        setLasku("Aurinko Laskee " + response.data.daily.sunset[0].substring(11, 16));

        console.log(response)
      }).catch(error => {
        alert(error);
      });
  }, [])



  return (
    <div>
      <p>{nousu}</p>
      <p>{lasku}</p>
    </div>
  )
}
