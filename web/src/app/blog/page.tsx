import { useState, useEffect } from 'react';

async function getData() {
    const res = await fetch('http://localhost:3030/test');

    if (!res.ok) {
        throw new Error('failed to fetch data');
    }

    return res.json();
}

export default async function Page() {
    const data = await getData();
    console.log(data);
    return (
        <div className="
            p-6
            mx-auto
            page
            max-w-6xl
            print:max-w-letter
            md:max-w-letter md:h-letter
            xsm:p-8
            sm:p-9
            md:p-16
            bg-white
            text-sm
          "
        >
            Under construction
        </div>
    );
}
