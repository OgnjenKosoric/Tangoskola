import React from 'react';
import './Kontakti.css';


export default class Kontakti extends React.Component{
  render(){
    return(
      <div className="kontakti_main_div">
        <div className="div_up">
          <div className="kontakt_div">
            <p className="kontakt_p">Broj telefona:</p>
            <p className="kontakt_p">0641234567</p>
          </div>
          <div className="kontakt_div">
            <p className="kontakt_p">Broj telefona:</p>
            <p className="kontakt_p">0641234567</p>
          </div>
          <div className="kontakt_div">
            <p className="kontakt_p">Mail adresa:</p>
            <p className="kontakt_p">Tangoskola@gmail.com</p>
          </div>
        </div>
        <div className="div_down">
          <div className="adresa_div">
          <p className="kontakt_p">Adresa Skole :</p>
          <p className="kontakt_p">Mise mungosa 5.</p>
          </div>
          <div className="google_map_div">
          
          </div>
        </div>
      </div>
    )
  }
}
