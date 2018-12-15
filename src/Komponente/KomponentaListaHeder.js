import React from 'react';
import './ListaHeder.css';

export default class KomponentaListaHeder extends React.Component {
  render(){
    return(
      <div className="lista_heder_div">
        <ul className="heder_ul">
          <a className ="heder_a Pocetna" href="/Pocetna">
            <div className="heder_li_div cursor_pointer">
              <li className="heder_li">
              <p className="name_li_p">POČETNA</p>
              </li>
            </div>
          </a>
          <a className ="heder_a ONama" href="/Onama">
          <div className="heder_li_div cursor_pointer">
            <li className="heder_li">
            <p className="name_li_p">O NAMA</p>
            </li>
          </div>
          </a>
          <a className ="heder_a" href="/Aktuelnosti">
          <div className="heder_li_div cursor_pointer">
            <li className="heder_li">
            <p className="name_li_p">AKTUELNOSTI</p>
            </li>
          </div>
          </a>
          <a className ="heder_a" href="/Casovi">
          <div className="heder_li_div cursor_pointer">
            <li className="heder_li">
            <p className="name_li_p">ČASOVI</p>
            </li>
          </div>
          </a>
          <a className ="heder_a" href="/Galerija">
          <div className="heder_li_div cursor_pointer">
            <li className="heder_li">
            <p className="name_li_p">GALERIJA</p>
            </li>
          </div>
          </a>
          <a className ="heder_a" href="/Kontakti">
          <div className="heder_li_div cursor_pointer">
            <li className="heder_li">
            <p className="name_li_p">KONTAKTI</p>
            </li>
          </div>
          </a>
        </ul>
      </div>
  )
  }
}
