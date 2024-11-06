import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import 'leaflet/dist/leaflet.css';
import * as L from 'leaflet';

@customElement('my-map')
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

    // Lifecycle method to initialize the map after the component is rendered
    firstUpdated() {
        const map = L.map(this.shadowRoot!.getElementById('map') as HTMLElement).setView([51.505, -0.09], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
        }).addTo(map);

        L.marker([51.505, -0.09]).addTo(map)
            .bindPopup('A pretty marker.<br> Easily customizable.')
            .openPopup();
    }
}
