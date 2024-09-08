'use client';
import React, { useEffect } from 'react';
import Header from '@/app/components/header';
import { notFound } from 'next/navigation';

export interface PageProps {
    params: { id: string[] };
}

export default function Page({ params }: PageProps) {
    useEffect(() => {
        const id = Number.parseInt(params.id[0]); // Вибираємо перший елемент масиву
        if (Number.isNaN(id)) {
            notFound();
        }
    }, [params.id]);

    return (
        <>
            <Header>Companies ({String(params.id)})</Header>
            <p>{new Date().toTimeString()}</p>
        </>
    );
}