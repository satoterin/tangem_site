import React from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import styles from './community.module.scss'
// import { useProgressiveImg } from '../../../hooks/useProgressiveImage'

import TwitterIcon from '../../../../public/svg/twitter.svg'
import FacebookIcon from '../../../../public/svg/fb.svg'
import InstaIcon from '../../../../public/svg/insta.svg'
import GithubIcon from '../../../../public/svg/github.svg'
import YoutubeIcon from '../../../../public/svg/youtube.svg'
import LinkedinIcon from '../../../../public/svg/linkedin.svg'

const SectionCommunity = () => {

  // const [src, { blur }] = useProgressiveImg('./img/community/community-placeholder.png', './img/community/community-2x.png')

  return (
    <div className={classNames('md:container mt-14 mb-14 md:mx-[26px] md:mb-24 xl:mx-auto 2xl:max-w-[1300px]', styles['community'])}>
      <div className='pt-8 px-4 md:p-8 lg:pt-8 lg:pb-0 lg:px-0 xl:pt-24'>
        <h2 className='text-[46px] leading-[46px] md:text-2xl xl:text-6xl font-semibold text-white md:text-center'>Join the Global Community <br /> of <span className='text-emerald-400'>Tangem Users</span></h2>
        <p className='text-xl md:text-base xl:text-2xl text-neutral-400 md:text-center my-7 md:mb-6 lg:mb-12 max-w-[840px] mx-auto font-light'>Tangem is trusted by clients and leading market players from all around the globe today. We have established presence in 108 countries on 5 continents, except Antarctica.</p>
        <div className='flex justify-between md:justify-evenly lg:justify-center'>
          <Link href="https://twitter.com/tangem">
            <a className='lg:mr-[60px]'>
              <TwitterIcon />
            </a>
          </Link>
          <Link href="https://m.facebook.com/TangemCards/">
            <a className='lg:mr-[60px]'>
              <FacebookIcon />
            </a>
          </Link>
          <Link href="https://instagram.com/tangemcards">
            <a className='lg:mr-[60px]'>
              <InstaIcon />
            </a>
          </Link>
          <Link href="https://github.com/tangem">
            <a className='lg:mr-[60px]'>
              <GithubIcon />
            </a>
          </Link>
          <Link href="https://youtube.com/channel/UCFGwLS7yggzVkP6ozte0m1w">
            <a className='lg:mr-[60px]'>
              <YoutubeIcon />
            </a>
          </Link>
          <Link href="https://www.linkedin.com/company/tangem">
            <a className='lg:mr-[60px]'>
              <LinkedinIcon />
            </a>
          </Link>
        </div>
      </div>
    </div>
    // <div className='container mt-14 mx-auto md:px-12 xl:px-0 mb-14 md:mb-24'>
    //   <div className='relative'>
    //     <picture>
    //       <source media='(max-width: 767px)' srcSet='./img/community/community-1x.png' />
    //       <source media='(min-width: 768px)' srcSet='./img/community/community-2x.png' />
    //       <img
    //         src={src}
    //         alt='Tangem Global Community image'
    //         className='w-full'
    //         loading='lazy'
    //         decoding='async'
    //         style={{
    //           width: '1280px',
    //           filter: blur ? 'blur(20px)' : 'none',
    //           transition: blur ? 'none' : 'filter 0.3s ease-out',
    //         }}
    //       />
    //     </picture>
    //     <div className="absolute left-0 top-0 lg:left-1/2 lg:translate-x-[-50%] lg:w-9/12">
    //       <div className='pt-8 px-4 md:p-8 lg:pt-8 lg:pb-0 lg:px-0 xl:pt-24'>
    //         <h2 className='text-5xl md:text-2xl xl:text-6xl font-semibold text-white md:text-center'>Join the Global Community <br /> of <span className='text-emerald-400'>Tangem Users</span></h2>
    //         <p className='text-xl md:text-base xl:text-2xl text-neutral-400 md:text-center my-7 md:mb-6 lg:mb-12 max-w-3xl mx-auto'>Tangem is trusted by clients and leading market players from all around the globe today. We have established presence in 108 countries on 5 continents, except Antarctica.</p>
    //         <div className='flex justify-between'>
    //           <Link href="https://twitter.com/tangem">
    //             <a>
    //               <TwitterIcon />
    //             </a>
    //           </Link>
    //           <Link href="https://m.facebook.com/TangemCards/">
    //             <a>
    //               <FacebookIcon />
    //             </a>
    //           </Link>
    //           <Link href="https://instagram.com/tangemcards">
    //             <a>
    //               <InstaIcon />
    //             </a>
    //           </Link>
    //           <Link href="https://github.com/tangem">
    //             <a>
    //               <GithubIcon />
    //             </a>
    //           </Link>
    //           <Link href="https://youtube.com/channel/UCFGwLS7yggzVkP6ozte0m1w">
    //             <a>
    //               <YoutubeIcon />
    //             </a>
    //           </Link>
    //           <Link href="https://www.linkedin.com/company/tangem">
    //             <a>
    //               <LinkedinIcon />
    //             </a>
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default SectionCommunity
