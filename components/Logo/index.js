import Image from 'next/image';

//Assets
import LogoImage from '../../assets/logo-light.svg';

export default function Logo() {
    return (
        <Image src={LogoImage} alt="Logo"/>
    )
}