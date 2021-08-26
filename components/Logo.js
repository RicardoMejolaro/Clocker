import Image from 'next/image';

import LogoImage from './../assets/logo-light.svg';

export default function Logo() {
    return (
        <Image src={LogoImage} alt="Logo"/>
    )
}