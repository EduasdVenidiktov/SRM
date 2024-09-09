import React from 'react';
import MagicButton from "@/app/components/magic-button";

export interface PageProps {
}

export default function Page({}: PageProps) {
    return (
        <>
            <h1 className="text-xl">Dashboard / New companies</h1>
            <div>Some additional info</div>
        </>
    );
}