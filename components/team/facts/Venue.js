import React from 'react';
import Image from 'next/image';

export default function Venue({ venue }) {
    return (
        <>
            <p className="venueName">
                Venue: {venue.name}
                <Image src={venue.image} width={100} height={100} alt="venue" />
            </p>
            <p className="venueCapacity">
                Capacity: {venue.capacity.toLocaleString()}
            </p>
            <p className="venueAddress">
                Address: {venue.address}, {venue.city}
            </p>
            <p className="venueSurface">
                Surface: {/* Convert first letter of string to upper case */}
                {venue.surface.charAt(0).toUpperCase() + venue.surface.slice(1)}
            </p>
        </>
    );
}
