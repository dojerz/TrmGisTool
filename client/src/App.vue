<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>

<template>
    <div class="menurow">
        <div class="col1" id="mapView"></div>
        <div class="nopad col2">
            <div class="fullHeight">
                <MainMenuComponent />
            </div>
        </div>

    </div>
    <ModalsContainer />
</template>

<script setup>
    import { ref, onMounted } from 'vue'
    import { ModalsContainer} from 'vue-final-modal'
    import MainMenuComponent from './components/MainMenuComponent.vue'

    const msg = ref('Pina és fasz!Welcome to Your Vue.js Faszfasz')
    let count = ref(0);

    onMounted(() => {
        init();
    })

    function init() {
        map = L.map('mapView', {
            center: new L.LatLng(48, 22),
            zoom: 12,
            unloadInvisibleTiles: true,
            updateWhenIdle: true,
            reuseTiles: true,
            preferCanvas: true
        });

        let gRoads = L.gridLayer.googleMutant({
            type: 'roadmap'
        });
        let osm = new L.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
        map.addControl(new L.Control.Layers({ 'OSM': osm, 'Google ROAD': gRoads }));
        map.addLayer(osm);
    }
</script>
