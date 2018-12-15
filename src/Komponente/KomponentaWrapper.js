import React from 'react';
import './wrapper.css';
import KomponentaListaHeder from './KomponentaListaHeder';
import KomponentaHeder from './KokponentaHeder';
import PagesContainer from './PagesContainer';
import { withRouter } from 'react-router';
import classNames from "classnames";

class KomponentaWrapper extends React.Component {
  render(){
    let klasawrappera=  classNames({
      "wrapper": true,
      "wrapper1": this.props.location.pathname==="/Pocetna",
      "wrapper2": this.props.location.pathname==="/Onama",
      "wrapper3": this.props.location.pathname==="/Aktuelnosti",
      "wrapper4": this.props.location.pathname==="/Casovi",
      "wrapper5": this.props.location.pathname==="/Galerija",
      "wrapper6": this.props.location.pathname==="/Kontakti",
    });
    return(
      <div className={klasawrappera}>
        <div className="logo_div_main">
          <KomponentaHeder/>
        </div>
        <div className="main_container_div">
            <PagesContainer/>

            <KomponentaListaHeder/>

        </div>
      </div>
  )
  }
}



const KomponentaWrapperContainer= withRouter(KomponentaWrapper);
export default KomponentaWrapperContainer
