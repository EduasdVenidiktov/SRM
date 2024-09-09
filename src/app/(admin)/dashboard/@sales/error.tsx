'use client'

import React from 'react';

export interface errorComponentProps{
    error: Error;
}

export default function ErrorComponent ({}: errorComponentProps)
{
    return (
        <div>Unexpected error inside slot sales</div>
    );
}

