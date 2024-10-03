import React from 'react';
import Image from 'next/image';

export default function Venue({ venue }) {
    return (
        <div className="Venue">
            <div className="Venue__Image-Container">
                {venue.image && (
                    <Image
                        src={venue.image}
                        width={100}
                        height={100}
                        alt="Venue__Image"
                    />
                )}
            </div>
            <div className="Venue__Content">
                <p className="Venue__Name">
                    Venue: {venue && venue.name ? venue.name : 'N/A'}
                </p>
                <p className="Venue__Capacity">
                    Capacity:{' '}
                    {venue && venue.capactiy
                        ? venue.capactiy.toLocaleString()
                        : 'N/A'}
                </p>
                <p className="Venue__Address">
                    Address:{' '}
                    {venue && venue.address
                        ? venue.address + ', ' + venue.city
                        : 'N/A'}
                </p>
                <p className="Venue__Surface">
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
