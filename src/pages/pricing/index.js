import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

const BuyNow = dynamic(() => import('../../components/Shopify/shopifyBuyButton'), {
  ssr: false,
})

const Pricing = () => {

  const router = useRouter()

  const handleBuy = (cardId) => {
    
    if (cardId) {
      document
        .getElementById(cardId)
        .querySelector('iframe')
        .contentDocument
        .querySelector('.shopify-buy__btn')
        .click()
    }
  }

  return (
    <>
      <Head>
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name="title" content="Tangem Wallet — hardware wallet for your crypto" />
        <meta name="description" content="Tangem Wallet lets you store your crypto assets secure and easily accessible while keeping private keys contained in your card." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tangem.com" />
        <meta property="og:title" content="Tangem Wallet — hardware wallet for your crypto" />
        <meta property="og:description" content="Tangem Wallet lets you store your crypto assets secure and easily accessible while keeping private keys contained in your card." />
        <meta property="og:image" content="https://tangem-staging.netlify.app/img/hero/hero-phone-1x.png" />
        <title>Tangem Wallet — hardware wallet for your crypto</title>
        <link rel='shortcut icon' href='/img/favicon/favicon.png' />
        <link rel='apple-touch-icon' href='/img/favicon/favicon_180.png' />
      </Head>
      <div
        className={`fixed flex items-center justify-center overflow-auto z-50 bg-[#F8F9F9] left-0 right-0 top-0 bottom-0 w-full h-full`}
      >
        <div
          className={`bg-[#F8F9F9] w-full h-full lg:container lg:mx-auto relative`}
        >
          <img
            src='./img/common/close.png'
            onClick={() => router.push('/')}
            className='absolute top-0 right-1.5 max-w-[36px] cursor-pointer'
          />
          <div className="text-[#090E13] text-32px text-center font-semibold mt-[40px] mb-32px lg:mb-10">Pricing</div>
          <div className="flex flex-col md:grid md:grid-cols-2 md:gap-x-7 px-4 lg:px-0">
            <div className="flex flex-col items-center bg-[#090E13] rounded-20px p-8 mb-[1.875rem] md:mb-[50px] lg:mb-0 shadow-[0_30px_100px_-15px_rgba(0,0,0,0.15)]">
              <div className='max-h-60'>
                <img src='./img/buy/3_cards.png' alt='3 pack wallet tangem' className='h-[171px] md:h-full text-center mx-auto' />
              </div>
              <div className="text-white text-3xl font-semibold lg:text-[2.5rem]">Pack of <span className='text-emerald-400'>3 Cards</span></div>
              <div className='mt-3 mb-[2.375rem] lg:mb-14 text-[1.063rem] lg:text-2xl text-center text-white opacity-50 lg:max-w-[437px]'>For the best security, there are 3 Tangem cards to one wallet with ultimate backup.</div>
              <a href="#" onClick={() => handleBuy('buy-now-6677839577154')} className='block w-full bg-white text-[#090E13] text-[1.375rem] lg:text-lg font-semibold rounded-[1.125rem] py-3 lg:py-4 text-center max-w-[277px]'>Buy now $69.90</a>
              <div className='text-[#DD1919] text-[1.063rem] lg:text-lg font-semibold mt-6 lg:mt-[1.125rem]'>50% OFF <span className='text-[#757575] line-through'>$148.49</span></div>
              <BuyNow iframeId="pack-3" id='6677839577154' />
            </div>
            <div className="flex flex-col items-center bg-white rounded-20px p-8 mb-24 md:mb-[50px] lg:mb-0 shadow-[0_30px_100px_-15px_rgba(0,0,0,0.15)]">
              <div className='max-h-60'>
                <img src='./img/buy/2_cards.png' alt='2 pack wallet tangem' className='h-[171px] md:h-full text-center mx-auto' />
              </div>
              <div className="text-[#0C1116] text-3xl font-semibold lg:text-[2.5rem]">Pack of <span className='text-[#A6A9AD]'>2 Cards</span></div>
              <div className='mt-3 mb-[2.375rem] lg:mb-14 text-[1.063rem] lg:text-2xl text-center text-[#A6AAAD] lg:max-w-[377px]'>2 Tangem cards to one wallet with  ultimate backup.</div>
              <a href="#" onClick={() => handleBuy('buy-now-6677836693570')} className='block w-full bg-[#ECEDED] text-[#090E13] text-[1.375rem] lg:text-lg font-semibold rounded-[1.125rem] py-3 lg:py-4 text-center max-w-[277px]'>Buy now $54.90</a>
              <div className='text-[#DD1919] text-[1.063rem] lg:text-lg font-semibold mt-6 lg:mt-[1.125rem]'>50% OFF <span className='text-[#757575] line-through'>$104.99</span></div>
              <BuyNow iframeID="pack-2" id="6677836693570" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Pricing
