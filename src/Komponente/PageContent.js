import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import KomponentaSchoolWords from './HomePage/KomponentaSchoolWords';
import ONama from './ONama/ONama';
import Aktuelnosti from './Aktuelnosti/Aktuelnosti';
import Casovi from './Casovi/Casovi';
import Galerija from './Galerija/Galerija';
import Kontakti from './Kontakti/Kontakti';


const PageContent= ()=> (
  <Switch>
    <Route exact path='/' render={(props) => <KomponentaSchoolWords />}
    />
    <Route exact path='/Pocetna' render={(props) => <KomponentaSchoolWords />}
    />
    <Route exact path='/ONama' render={(props) => <ONama />}
    />
    <Route exact path='/Aktuelnosti' render={(props) => <Aktuelnosti />}
    />
    <Route exact path='/Casovi' render={(props) => <Casovi />}
    />
    <Route exact path='/Galerija' render={(props) => <Galerija />}
    />
    <Route exact path='/Kontakti' render={(props) => <Kontakti />}
    />
    </Switch>
  )
  export default PageContent
