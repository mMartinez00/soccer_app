import React from 'react';
import Image from 'next/image';

export default function Venue({ venue }) {
    return (
        <div className="Venue">
            <p className="venueName">
                Venue: {venue.name ? venue.name : 'N/A'}
                <span
                    className="venueImage"
                    style={{
                        display: 'inline-block',
                        width: '100px',
                        height: '100px',
                    }}
                >
                    {venue.image && (
                        <Image
                            src={venue.image}
                            width={100}
                            height={100}
                            alt="venue"
                        />
                    )}
                </span>
            </p>
            <p className="venueCapacity">
                Capacity:{' '}
                {venue.capactiy ? venue.capactiy.toLocaleString() : 'N/A'}
            </p>
            <p className="venueAddress">
                Address:{' '}
                {venue.address ? venue.address + ', ' + venue.city : 'N/A'}
            </p>
            <p className="venueSurface">
                Surface: {/* Convert first letter of string to upper case */}
                {venue.surface
                    ? venue.surface.charAt(0).toUpperCase() +
                      venue.surface.slice(1)
                    : 'N/A'}
            </p>
        </div>
    );
}
