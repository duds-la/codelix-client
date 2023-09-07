
import Image from "next/image";
import React from "react";

export const Logo = () => (
    <Image
        src="/logo-ext-netflix.png"
        alt="logo-netflix"
        width={90}
        height={90}
        className='cursor-pointer' />
);
