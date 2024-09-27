import {FC} from 'react';
import HeroImg from '../../assets/imgs/profilepict.svg';
import './style.css';
import OverlayMenu from './OverlayMenu';

const Index: FC = () => {
  return (
    <div className='hero'>
      <OverlayMenu />
      <img src={HeroImg} alt="hero-image" />
    </div>
  );
}

export default Index;