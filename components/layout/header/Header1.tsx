'use client';
import CurrencyDropdown from '@/components/elements/CurrencyDropdown';
import LanguageDropdown from '@/components/elements/LanguageDropdown';
import dynamic from 'next/dynamic';
import Link from 'next/link';
const ThemeSwitch = dynamic(() => import('@/components/elements/ThemeSwitch'), {
  ssr: false,
});
export default function Header1({
  scroll,
  handleLogin,
  handleMobileMenu,
  handleRegister,
  handleSidebar,
}: any) {
  return (
    <>
      <header className={`header sticky-bar ${scroll ? 'stick' : ''}`}>
        <div
          className='top-bar'
          style={{
            background: 'linear-gradient(90deg, #64a25f 0%, #979311 100%)',
          }}
        >
          <div className='container-fluid'>
            <div className='text-header'>
              <div className='text-unlock text-sm-bold'>
                Discover Sri Lanka Your Way with Adventure LK – Scenic Routes,
                Local Gems & Unmatched Experiences!
              </div>
              <Link className='' href='/contact' style={{ color: 'white' }}>
                Contact Now !
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width={16}
                  height={16}
                  viewBox='0 0 16 16'
                >
                  <path
                    d='M7.99992 12.6666L12.6666 7.99992L7.99992 3.33325M12.6666 7.99992L3.33325 7.99992'
                    stroke='white'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div
          className='container-fluid background-body custom-orange-bg'
          // style={{ backgroundColor: '#fd7f2a' }}
        >
          <div className='main-header'>
            {/* Desktop Navigation */}
            <div className='header-desktop d-none d-lg-flex'>
              <div className='header-left'>
                <div className='header-logo responsive-logo-margin'>
                  <Link className='d-flex' href='/'>
                    <img
                      className='light-mode'
                      alt='tours trails logo'
                      src='/assets/imgs/logo/adventure.lk.png'
                      style={{ width: '350px', height: 'auto' }}
                    />

                    <img
                      className='dark-mode'
                      alt='Tours Trails'
                      src='/assets/imgs/logo/godare_final_TR.png'
                      style={{ width: '200px', height: 'auto' }}
                    />
                  </Link>
                </div>
                <div className='header-nav ml-90'>
                  <nav className='nav-main-menu'>
                    <ul className='main-menu'>
                      <li className='mega-li has-children'>
                        <Link className='active' href='/'>
                          Home
                        </Link>
                      </li>
                      <li className='mega-li-small has-children'>
                        <Link href='/tours'>Tours</Link>
                      </li>
                      <li className='mega-li-small has-children'>
                        <Link href='/destination'>Destinations</Link>
                      </li>
                      <li className='mega-li has-children'>
                        <Link className='active' href='/blog'>
                          Blogs
                        </Link>
                      </li>
                      <li className='mega-li has-children'>
                        <Link className='active' href='/activities'>
                          Activities
                        </Link>
                      </li>
                      <li className='has-children'>
                        <Link href='/gallery'>Gallery</Link>
                      </li>
                      <li className='has-children'>
                        <Link href='/about'>About</Link>
                      </li>
                      <li>
                        <Link href='/contact'>Contact</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className='header-right'>
                <div
                  className='d-none d-xxl-inline-block align-middle mr-15'
                  style={{ marginLeft: '220px' }}
                >
                  {/* <ThemeSwitch /> */}
                </div>
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className='header-mobile d-flex d-lg-none'>
              <div className='mobile-header-logo'>
                <Link className='d-flex' href='/'>
                  <img
                    className='light-mode'
                    alt='tours trails logo'
                    src='/assets/imgs/logo/adventure.lk.png'
                    style={{ width: '200px', height: 'auto' }}
                  />
                  <img
                    className='dark-mode'
                    alt='Tours Trails'
                    src='/assets/imgs/logo/godare_final_TR.png'
                    style={{ width: '150px', height: 'auto' }}
                  />
                </Link>
              </div>
              <div className='mobile-header-burger'>
                <div
                  className='burger-icon burger-icon-white'
                  onClick={handleMobileMenu}
                >
                  <span className='burger-icon-top' />
                  <span className='burger-icon-mid' />
                  <span className='burger-icon-bottom' />
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .responsive-logo-margin {
            margin-left: 50px;
          }

          @media (min-width: 768px) {
            .responsive-logo-margin {
              margin-left: 150px;
            }
          }

          /* Mobile Header Styles */
          .header-mobile {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            padding: 10px 15px;
          }

          .mobile-header-logo {
            flex: 1;
          }

          .mobile-header-burger {
            flex-shrink: 0;
          }

          .mobile-header-logo img {
            max-height: 40px;
            width: auto;
          }

          /* Ensure burger icon is properly sized on mobile */
          .mobile-header-burger .burger-icon {
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          /* Hide desktop navigation on mobile */
          @media (max-width: 991px) {
            .header-desktop {
              display: none !important;
            }
          }

          /* Show mobile navigation on mobile */
          @media (max-width: 991px) {
            .header-mobile {
              display: flex !important;
            }
          }
        `}</style>
      </header>
    </>
  );
}
