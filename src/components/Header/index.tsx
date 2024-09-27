import { FC } from 'react';
import NavLink from './NavLink';

const Index: FC = () => {
    return (
            <header className='absolute top-0 left-0 w-[calc(100%-160px)] py-6 px-20 z-[2]'>
              <nav className='flex justify-between text-lg font-normal'>
                <div>
                  @Ayush Barnwal
                </div>
                <div className='flex gap-10'>
                  <NavLink href="/public" text="About" />
                  <NavLink href="#work" text="Work" />
                  <NavLink href="/ContactUs" text="Contact" />
                </div>
              </nav>
            </header>
      );
}

export default Index;