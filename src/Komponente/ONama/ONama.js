import React from 'react';
import './ONama.css';

export default class ONama extends React.Component {
  render(){
    return(
        <div className="o_nama_div_container">
          <h2 className="o_nama_h2">O NAMA</h2>
          <p className="o_nama_p1 p_o_nama">
            Ukoliko ste zainteresovani da naučite najsenzualniji od svih
            plesova na pravom ste mestu! Argentinski tango se u Beogradu pleše
            oko 16 godina i beogradska tango scena je svakim danom sve veća.
          </p>

          <p className="o_nama_p1 p_o_nama">
            Naš instruktorski par su Vlada i Milica. Vlada se tangom bavi 12
            godina, a Milica 6. U zagrljaju su skoro 6 godina.
          </p>

          <p className="o_nama_p1 p_o_nama">
              Argentinski tango ima više stilova koje povezuje zajdeniička plesna
              tehnika. Časovi su koncipirani tako da se podjednako obraća pažnja na
              nekoliko suštinskih elemenata: plesnu tehniku, plesni zagrljaj,
              kombinacije pokreta i koraka u plesnoj figuri, sugestiju slušanja i
              tumačenja tango plesne muzike pri stvaranju pokreta. Sinergija svih
              gore pomenutih elemenata za cilj ima razvijanje sopstvenog stila
              improvizacije i naravno uživanje u plesu.
          </p>

        </div>
  )
  }
}
