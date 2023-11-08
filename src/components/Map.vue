<template>
    <v-container class="fill-height">
        <v-responsive class="align-center text-right fill-height">
            <v-row>
                <v-col>
                    <v-chip variant="outlined" v-for="l in legend" :key="l.color" :color="l.color"
                        class="mb-2 ml-1 font-weight-bold colored-chip">
                        {{ l.zip }}
                    </v-chip>
                    <v-card>
                        <div id="map" :style="$vuetify.display.xlAndUp ? 'height: 600px;' : 'height: 300px;'"></div>
                    </v-card>
                </v-col>
            </v-row>
        </v-responsive>
    </v-container>
</template>
  
<script>
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import GeoJSON from 'ol/format/GeoJSON';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import StadiaMaps from 'ol/source/StadiaMaps.js';
import VectorSource from 'ol/source/Vector';
import { fromLonLat } from 'ol/proj';
import { Fill, Stroke, Style, Text } from 'ol/style.js';

export default {
    data() {
        return {
            legend: [
                {
                    zip: '98335',
                    color: '#1F51FF'
                },
                {
                    zip: '98333',
                    color: '#BC12FE'
                },
                {
                    zip: '98332',
                    color: '#39FF14'
                },
                {
                    zip: '98329',
                    color: '#FF5E00'
                },
            ],
            map: null,
        };
    },
    mounted() {
        this.initMap();
        this.addGeoJSONLayer();
    },
    methods: {
        initMap() {
            this.map = new Map({
                target: 'map',
                layers: [
                    new TileLayer({
                        source: new StadiaMaps({
                            layer: 'alidade_smooth_dark',
                            retina: true,
                        }),
                    }),
                ],
                view: new View({
                    center: fromLonLat([-122.64, 47.3065]),
                    zoom: 11.5,
                    minZoom: 11,
                    maxZoom: 16
                }),
            });
        },

        addGeoJSONLayer() {
            const geoJSONData = { "features": [{ "geometry": { "coordinates": [[[-122.630639, 47.403378], [-122.632628, 47.395046], [-122.62857, 47.382117], [-122.637972, 47.372804], [-122.658896, 47.360881], [-122.683844, 47.351418], [-122.687544, 47.334318], [-122.667243, 47.335318], [-122.658092, 47.330534], [-122.628551, 47.332286], [-122.618181, 47.329926], [-122.582063, 47.330716], [-122.576048, 47.325774], [-122.57134, 47.327219], [-122.55584, 47.347519], [-122.550964, 47.361123], [-122.538204, 47.376866], [-122.553403, 47.393882], [-122.550802, 47.403435], [-122.624701, 47.403504], [-122.630639, 47.403378]]], "type": "Polygon" }, "properties": { "FUNCSTAT20": "S", "MTFCC20": "G6350", "GEOID20": "98332", "ZCTA5CE20": "98332", "INTPTLAT20": "+47.3722340", "CLASSFP20": "B5", "ALAND20": 53523920, "AWATER20": 8890788, "INTPTLON20": "-122.5957933" }, "type": "Feature" }, { "geometry": { "coordinates": [[[-122.801199, 47.403578], [-122.801052, 47.358764], [-122.790551, 47.351097], [-122.779954, 47.351259], [-122.763259, 47.344052], [-122.748143, 47.345052], [-122.750888, 47.333502], [-122.735993, 47.332669], [-122.729623, 47.338686], [-122.706467, 47.318284], [-122.687544, 47.334318], [-122.683844, 47.351418], [-122.658896, 47.360881], [-122.637972, 47.372804], [-122.62857, 47.382117], [-122.632628, 47.395046], [-122.630639, 47.403378], [-122.653093, 47.403091], [-122.801199, 47.403578]]], "type": "Polygon" }, "properties": { "FUNCSTAT20": "S", "MTFCC20": "G6350", "GEOID20": "98329", "ZCTA5CE20": "98329", "INTPTLAT20": "+47.3608083", "CLASSFP20": "B5", "ALAND20": 67337732, "AWATER20": 14518362, "INTPTLON20": "-122.7441392" }, "type": "Feature" }, { "geometry": { "coordinates": [[[-122.681141, 47.271318], [-122.675341, 47.251319], [-122.622139, 47.209219], [-122.600538, 47.209719], [-122.582113, 47.224312], [-122.575538, 47.22952], [-122.565437, 47.24682], [-122.563107, 47.250568], [-122.591298, 47.252501], [-122.608351, 47.256969], [-122.626185, 47.271879], [-122.668541, 47.281018], [-122.681141, 47.271318]]], "type": "Polygon" }, "properties": { "FUNCSTAT20": "S", "MTFCC20": "G6350", "GEOID20": "98333", "ZCTA5CE20": "98333", "INTPTLAT20": "+47.2576862", "CLASSFP20": "B5", "ALAND20": 13451582, "AWATER20": 24995658, "INTPTLON20": "-122.6465524" }, "type": "Feature" }, { "geometry": { "coordinates": [[[-122.706467, 47.318284], [-122.719043, 47.286318], [-122.710643, 47.278618], [-122.681141, 47.271318], [-122.668541, 47.281018], [-122.626185, 47.271879], [-122.608351, 47.256969], [-122.591298, 47.252501], [-122.563107, 47.250568], [-122.551841, 47.268672], [-122.543263, 47.281112], [-122.541238, 47.29372], [-122.560339, 47.316119], [-122.572264, 47.31625], [-122.576048, 47.325774], [-122.582063, 47.330716], [-122.618181, 47.329926], [-122.628551, 47.332286], [-122.658092, 47.330534], [-122.667243, 47.335318], [-122.687544, 47.334318], [-122.706467, 47.318284]]], "type": "Polygon" }, "properties": { "FUNCSTAT20": "S", "MTFCC20": "G6350", "GEOID20": "98335", "ZCTA5CE20": "98335", "INTPTLAT20": "+47.2969474", "CLASSFP20": "B5", "ALAND20": 57355613, "AWATER20": 27470843, "INTPTLON20": "-122.6236610" }, "type": "Feature" }], "type": "FeatureCollection" };

            const vectorSource = new VectorSource({
                features: new GeoJSON().readFeatures(geoJSONData, { featureProjection: 'EPSG:3857' }),
            });

            const vectorLayer = new VectorLayer({
                source: vectorSource,
                style: this.styleFunction
            });

            this.map.addLayer(vectorLayer);
        },

        styleFunction(feature) {
            const zip = feature.getProperties().GEOID20

            switch (zip) {
                case '98335': return new Style({
                    stroke: new Stroke({
                        color: '#1F51FF',
                        width: 1,
                    }),
                    fill: new Fill({
                        color: 'rgba(31, 81, 255, 0.3)'
                    }),
                });

                case '98333': return new Style({
                    stroke: new Stroke({
                        color: '#BC12FE',
                        width: 1,
                    }),
                    fill: new Fill({
                        color: 'rgba(188, 18, 254, 0.3)'
                    }),
                });

                case '98332': return new Style({
                    stroke: new Stroke({
                        color: '#39FF14',
                        width: 1,
                    }),
                    fill: new Fill({
                        color: 'rgba(57, 255, 20, 0.3)'
                    }),
                });

                case '98329': return new Style({
                    stroke: new Stroke({
                        color: '#FF5E00',
                        width: 1,
                    }),
                    fill: new Fill({
                        color: 'rgba(255, 94, 0, 0.3)'
                    }),
                });
            }
        },
    },
};
</script>