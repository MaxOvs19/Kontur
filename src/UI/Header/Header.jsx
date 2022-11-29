import React from 'react';
import Ecosystem from '../../components/EcosystemBusiness/Ecosystem';
import MenuBurger from '../MenuBurger/MenuBurger';
import './Header.scss';

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="wrapper">
          <div className="header__logo">
            <MenuBurger />
            <svg
              width="106"
              height="29"
              viewBox="0 0 106 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.5486 11.3411L22.6226 23.0001H18.1024L11.1507 13.0557H7.81509V23.0001H3.85603V4.57636H0.863342L2.85847 0.866699H7.81509V9.62656H11.1507L17.7595 0.866699H22.2486L14.5486 11.3411ZM21.4069 15.0196C21.4069 13.2947 21.8017 11.7879 22.5915 10.4994C23.3604 9.29396 24.4099 8.36916 25.74 7.72496C27.0701 7.08066 28.5041 6.75856 30.042 6.75856C31.6215 6.75856 33.0451 7.07026 34.3128 7.69376C35.6429 8.33796 36.6924 9.29396 37.4613 10.5618C38.2303 11.8087 38.6148 13.2947 38.6148 15.0196C38.6148 16.7654 38.2303 18.2721 37.4613 19.5398C36.6924 20.7868 35.6429 21.7532 34.3128 22.439C33.0035 23.104 31.5799 23.4365 30.042 23.4365C28.5249 23.4365 27.1013 23.104 25.7712 22.439C24.4203 21.7739 23.35 20.8075 22.5603 19.5398C21.7913 18.2513 21.4069 16.7446 21.4069 15.0196ZM88.6486 7.25736H92.1713V9.40826C92.7116 8.57696 93.4286 7.94316 94.3223 7.50666C95.2367 7.04946 96.4109 6.82086 97.8449 6.82086C99.3205 6.82086 100.63 7.15336 101.773 7.81846C102.874 8.50426 103.726 9.48106 104.329 10.7488C104.953 11.9958 105.264 13.4298 105.264 15.0508C105.264 16.6926 104.953 18.1474 104.329 19.4151C103.726 20.6621 102.874 21.6285 101.773 22.3143C101.253 22.6676 100.64 22.9274 99.9335 23.0936C99.2477 23.2807 98.5515 23.3742 97.8449 23.3742C96.6187 23.3742 95.7043 23.2807 95.1016 23.0936C93.8547 22.7195 92.9714 22.0961 92.4518 21.2232V28.5802H88.6486V7.25736ZM40.6411 7.25736H44.4131V13.2427H50.8661V7.25736H54.6069V23.0001H50.8661V16.3601H44.4131V23.0001H40.6411V7.25736ZM56.2591 7.25736H70.7549V10.25H65.393V23.0001H61.5587V10.25H56.2591V7.25736ZM75.9609 7.25736C77.3741 11.1229 78.6627 14.9469 79.8265 18.7293C80.9279 14.9884 82.1749 11.1645 83.5673 7.25736H87.3705L81.5722 23.3118C81.0942 24.6211 80.637 25.6291 80.2006 26.3357C79.7226 27.0423 79.1303 27.5722 78.4237 27.9256C77.7378 28.2996 76.8234 28.4867 75.6804 28.4867C75.0361 28.4867 74.6828 28.4763 74.6205 28.4555L73.3423 25.4628C73.7372 25.546 74.2256 25.5875 74.8075 25.5875C75.5141 25.5875 76.0856 25.4836 76.5221 25.2758C76.9169 25.1095 77.2183 24.8809 77.4261 24.59C77.6339 24.3198 77.8106 23.9769 77.956 23.5612L71.9707 7.25736H75.9609ZM25.2412 14.9884C25.2412 16.7134 25.6569 18.0331 26.4882 18.9475C27.3195 19.8412 28.4729 20.288 29.9485 20.288C31.4448 20.288 32.6086 19.8412 33.4399 18.9475C34.292 18.0331 34.7181 16.7134 34.7181 14.9884C34.7181 13.3051 34.3024 12.0373 33.4711 11.1852C32.6398 10.3124 31.4656 9.87596 29.9485 9.87596C28.4521 9.87596 27.2883 10.3124 26.457 11.1852C25.6465 12.0373 25.2412 13.3051 25.2412 14.9884ZM92.3583 15.0196C92.3999 16.5783 92.8155 17.8253 93.6053 18.7605C94.395 19.6957 95.5069 20.1633 96.9409 20.1633C98.3749 20.1633 99.4763 19.6957 100.245 18.7605C101.035 17.8253 101.44 16.5783 101.461 15.0196C101.44 13.4817 101.035 12.2555 100.245 11.3411C99.4763 10.4059 98.3749 9.93826 96.9409 9.93826C95.5069 9.93826 94.395 10.3955 93.6053 11.3099C92.8155 12.2244 92.3999 13.4609 92.3583 15.0196Z"
                fill="#222222"
              />
            </svg>
            <h2>Официальный партнер в ДНР</h2>
          </div>
          <nav className="header__nav">
            <li>071 501 53 53</li>
            <li>Где мы находимся</li>
          </nav>
        </div>
      </div>
      <Ecosystem />
    </div>
  );
};

export default Header;
