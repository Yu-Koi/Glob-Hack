import React, { Fragment } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'


const MapContainer = (props) => {

    const UrlMap = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"


    return (
        <Fragment>
            <Map
                center={props.center}
                zoom={props.zoom}
            >
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url={UrlMap}
                />

                <Marker position={props.center}>
                    <Popup>
                        Esta es mi ubicación actual
                    </Popup>
                </Marker>

                {
                    props.medicalStaff.map(item => {
                        return (
                            <div key={item.key}>
                                <Marker position={item.position}>
                                    <Popup>{item.title} <br/> {item.content}</Popup>
                                </Marker>
                            </div>
                        )
                    })
                }
            </Map>

        </Fragment>
    )
}

export default MapContainer
