import React from 'react';
import Image from 'next/image';

export default function Venue({ venue }) {
    return (
        <div className="Team__Venue">
            <div className="Team__VenueImageContainer">
                {venue.image && (
                    <Image
                        src={venue.image}
                        width={175}
                        height={175}
                        alt="Venue Image"
                    />
                )}
            </div>
            <div className="Team__Venue-Content">
                <p className="Team__Venue-Name">
                    Venue: {venue && venue.name ? venue.name : 'N/A'}
                </p>
                <p className="Team__Venue-Capacity">
                    Capacity:{' '}
                    {venue && venue.capactiy
                        ? venue.capactiy.toLocaleString()
                        : 'N/A'}
                </p>
                <p className="Team__Venue-Address">
                    Address:{' '}
                    {venue && venue.address
                        ? venue.address + ', ' + venue.city
                        : 'N/A'}
                </p>
                <p className="Team__Content-Surface">
                    Surface:{' '}
                    {/* Convert first letter of string to upper case */}
                    {venue && venue.surface
                        ? venue.surface.charAt(0).toUpperCase() +
                          venue.surface.slice(1)
                        : 'N/A'}
                </p>
            </div>
        </div>
    );
}
