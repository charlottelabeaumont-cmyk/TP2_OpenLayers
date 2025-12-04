// Import toujours en premier 
import './style.css';
import {Map, View} from 'ol';
import { ImageWMS } from 'ol/source';
import TileLayer from 'ol/layer/Tile';
import ImageLayer from 'ol/layer/Image';
import OSM from 'ol/source/OSM';


// Difference entre const/var/let : 
//const = immuable dans le sens de l'objet qu'elle rpz (mais on peut changer les params)
// var = varibale changeable 


// Création 
const couche_osm = new TileLayer({ source: new OSM() });

// Création d'une image WMS 
const ma_source = new ImageWMS({
  url: 'https://ahocevar.com/geoserver/wms',
  params: { 'LAYERS' : 'topp:states' },
  serverType: 'geoserver',
});

// Création d'une couche à partir de l'image WMS 
const ma_couche = new ImageLayer({
  source: ma_source,
});
// Création d'une MAP 
const map = new Map({
  target: 'map',
  layers: [ couche_osm, ma_couche ],
  view: new View({
    center: [0, 0],
    zoom: 2
  })
});