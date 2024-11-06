import { html, css, LitElement } from 'lit';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

export class MyMap extends LitElement {
    static styles = css`
        #map {
            width: 100%;
            height: 400px;
        }
    `;

    render() {
        return html`<div id="map"></div>`;
    }

    firstUpdated() {
        const map = L.map(this.shadowRoot.getElementById('map')).setView([51.505, -0.09], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
        }).addTo(map);

        L.marker([51.505, -0.09]).addTo(map)
            .bindPopup('A pretty marker.<br> Easily customizable.')
            .openPopup();
    }
}

customElements.define('my-map', MyMap);
