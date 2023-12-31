import React from 'react';
import logo from './logo.svg';
import './App.css';
import moment from 'moment';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeClient from './pages/client/home';
import './styles/main.scss'
import Details from './pages/client/details';
import Home from './pages/admin/pages/Home';
import NewAdmin from './pages/admin/pages/NewAdmin';
import User from './pages/admin/pages/User';
import Actualite from './pages/admin/pages/Actualite';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';


moment.locale('fr', {
  months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
  monthsShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
  monthsParseExact: true,
  weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
  weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
  weekdaysMin: 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
  weekdaysParseExact: true,
  longDateFormat: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd D MMMM YYYY HH:mm'
  },
  calendar: {
    sameDay: '[Aujourd’hui à] LT',
    nextDay: '[Demain à] LT',
    nextWeek: 'dddd [à] LT',
    lastDay: '[Hier à] LT',
    lastWeek: 'dddd [dernier à] LT',
    sameElse: 'L'
  },
  relativeTime: {
    future: 'dans %s',
    past: 'il y a %s',
    s: 'quelques secondes',
    m: 'une minute',
    mm: '%d minutes',
    h: 'une heure',
    hh: '%d heures',
    d: 'un jour',
    dd: '%d jours',
    M: 'un mois',
    MM: '%d mois',
    y: 'un an',
    yy: '%d ans'
  },
  dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
  ordinal: function (number) {
    return number + (number === 1 ? 'er' : 'e');
  },
  meridiemParse: /PD|MD/,
  isPM: function (input) {
    return input.charAt(0) === 'M';
  },
  meridiem: function (hours, minutes, isLower) {
    return hours < 12 ? 'PD' : 'MD';
  },
  week: {
    dow: 1,
    doy: 4
  }
});

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path='/' element={<HomeClient />} />
          <Route path='/details' element={<Details />} />

          {/*Admin*/}

          <Route path='/home' element={<Home />} />
          <Route path='/addNewAdmin' element={<NewAdmin />} />

          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login   />} />
          <Route path='/users' element={<User />} />
          <Route path='/actualites' element={<Actualite />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
