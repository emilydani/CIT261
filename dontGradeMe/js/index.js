//import {
//getJSON, getLocation 
//} from 'utilities.js';
//const baseUrl ='https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-03-02';

import QuakesController from './QuakesController.js';
import buildNavigation from './routing.js';

const navElement = document.getElementById('mainNav');
buildNavigation(navElement);