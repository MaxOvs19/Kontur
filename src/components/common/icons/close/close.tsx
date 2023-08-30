import React from 'react'
import { IClose } from './close.props'

const Close = ({ onClick }: IClose) => {
  return (
    <svg
      width='12'
      height='12'
      viewBox='0 0 12 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='exit'
      onClick={onClick}
    >
      <g clipPath='url(#clip0_287_155)'>
        <path
          d='M1.36812 9.41284e-05C1.61677 -0.00365622 
                1.76904 0.105104 1.91042 0.247242C3.22455 1.56474 
                4.54092 2.87999 5.85654 4.19599C5.97781 4.31725 6.09857 
                4.31737 6.21883 4.19636C7.50782 2.90699 8.79682 1.61762 
                10.0862 0.328625C10.4286 -0.0134071 10.7399 -0.0115319 
                11.089 0.331625C11.3118 0.550646 11.5353 0.768916 11.7566 0.989062C12.0776 1.30897 
                12.0795 1.64162 11.7566 1.96528C10.4459 3.2779 9.1351 4.58977 
                7.81985 5.89752C7.71222 6.00478 7.70397 6.05841 7.8176 6.1713C9.1261 
                7.46779 10.4282 8.77104 11.7322 10.072C12.0904 10.4294 12.0893 10.7392 
                11.7296 11.0993C11.5087 11.3202 11.2893 11.5422 11.0673 11.7619C10.7504 
                12.0751 10.4203 12.0751 10.1049 11.7601C8.7927 10.4493 7.4797 9.1397 6.17307 
                7.82333C6.05906 7.70857 6.00768 7.71982 5.9008 7.82783C4.60618 9.12995 3.30631 
                10.4268 2.00718 11.7248C1.64415 12.0875 1.33962 12.0882 0.979962 11.7293C0.767692 
                11.5174 0.555422 11.3055 0.343903 11.0933C-0.0082555 10.7404 -0.0105057 10.4276 
                0.337902 10.0773C1.63702 8.77217 2.9354 7.46554 4.23939 6.16492C4.3489 6.05579 
                4.35415 6.00253 4.24314 5.8919C2.91402 4.5714 1.59089 3.24527 0.26627 1.92027C-0.0862628 
                1.56774 -0.088513 1.25384 0.25877 0.906179C0.492792 0.671782 0.728314 0.43926 0.96121 
                0.204113C1.0846 0.0788515 1.23011 0.00609469 1.36812 9.41284e-05Z'
          fill='#263238'
        />
      </g>
      <defs>
        <clipPath id='clip0_287_155'>
          <rect width='12' height='11.9978' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}
export default Close