
window.onload = () => {

    let places = staticLoadPlaces();
    console.log(places);
    return renderPlaces(places);
};




function staticLoadPlaces() {
    return [
        {
            name: "tap hoa",
            location: {
                lat: 10.987029, // change here latitude if using static data
                lng: 106.716481, // change here longitude if using static data
            }
        },

        {
            name: 'ban bun',
            location: {
                lat: 10.987121,
                lng: 106.716604,
            }
        },

        {
            name: 'Bus',
            location: {
                lat: 10.987185,
                lng: 106.716261,
            }
        },
        {
            name: 'nha',
            location: {
                lat: 10.987490,
                lng: 106.716461,
            }
        },
        {
            name: 'san truong',
            location: {
                lat: 10.990250364684542,
                lng: 106.66447880389927,
            }
        },
    ];
}



function renderPlaces(places) {
    let scene = document.querySelector('a-scene');

    places.forEach((place) => {
        let latitude = place.location.lat;
        let longitude = place.location.lng;

        // add place name
        let text = document.createElement('a-link');
        text.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
        text.setAttribute('title', place.name);
        text.setAttribute('scale', '10 10 10');


        // add place icon
        const icon = document.createElement('a-image');
        icon.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude}`);
        icon.setAttribute('name', place.name);
        icon.setAttribute('src', './map-marker.png');


        icon.setAttribute('scale', '30, 30, 30');

        icon.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        });



        text.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        });

//         scene.appendChild(text);
        scene.appendChild(icon);
    });
}
