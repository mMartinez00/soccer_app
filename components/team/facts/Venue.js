import React from 'react';
import Image from 'next/image';

export default function Venue({ venue }) {
    return (
        <div className="Venue">
            <div className="Venue_Image_Container">
                {venue.image && (
                    <Image
                        src={venue.image}
                        width={100}
                        height={100}
                        alt="venue"
                    />
                )}
            </div>
            <div className="Content">
                <p className="Venue_Name">
                    Venue: {venue && venue.name ? venue.name : 'N/A'}
                </p>
                <p className="Venue_Capacity">
                    Capacity:{' '}
                    {venue && venue.capactiy
                        ? venue.capactiy.toLocaleString()
                        : 'N/A'}
                </p>
                <p className="Venue_Address">
                    Address:{' '}
                    {venue && venue.address
                        ? venue.address + ', ' + venue.city
                        : 'N/A'}
                </p>
                <p className="Venue_Surface">
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
