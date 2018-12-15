import React from 'react';
import './Casovi.css';
import Youtubevideo from "./Youtubevideo";

export default class Casovi extends React.Component{
  render(){
    return(
      <div className="casovi_main_div">

        <div className="casovi_raspored_div">
          <h2>Termini</h2>
          <div className="vreme_casova_div">
            <div className="">
              <p className="vreme_casova_p">Ponedeljak</p>
              <p className="vreme_casova_p">18:30</p>
            </div>
            <div className="">
              <p className="vreme_casova_p">Sreda</p>
              <p className="vreme_casova_p">18:30</p>
              </div>
            <div className="">
              <p className="vreme_casova_p">Petak</p>
              <p className="vreme_casova_p">18:30</p>
              </div>
            <div className="">
              <p className="vreme_casova_p">Subota</p>
              <p className="vreme_casova_p">18:30</p>
            </div>
          </div>
        </div>

        <div className="casovi_video_div">
          <Youtubevideo />
        </div>

      </div>
    )
  }
}
