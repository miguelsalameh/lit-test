import { html, css, LitElement } from 'lit';
import 'leaflet/dist/leaflet.js';

class Map extends LitElement{

  static get styles() {
    return [css`
              :host {
                display:block;
                height: 600px;
                width: 600px;
              }
              
            `];
  }

  constructor() {
    super();
  }
  firstUpdated() {
    const mapEl = this.shadowRoot.querySelector('#mapid');
    let map = L.map(mapEl).setView([51.505, -0.09], 13);

    let urlTemplate = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png';
    map.addLayer(L.tileLayer(urlTemplate, {minZoom: 4}));
  }

  render() {
    return html`
                <link rel="stylesheet" href="https://cdn.skypack.dev/leaflet/dist/leaflet.css">
                <div id="mapid" style="height: 100%"></div>

            `;
  }
}

customElements.define("my-map", Map);