import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

const Financeconverterpage = () => {
  return (
    <>

       <Head>
      <title>Finanace Calculators</title>
      <meta name="description" content="Convert Financial or Accounts terms between different formats effortlessly with our versatile Finanace calculators tools." />
      
      </Head>

    <div className="cnvrtrpage_body">
      <div className="cnvrtrpage_header"><h1> Finance Converters</h1></div>
      <div className="cnvrtrpage_catogeries">
        <div className="catg_div">
          <div className="head"> Finance</div>
          <div className="catogeries">
            <Link href='/finance/GST' className="innr_ctgry">
              <p>GST Calculator</p>
             <Image src="/fast-forward.gif" alt="loading.." width={35} height={35} />
            </Link>
            <Link href='/finance/VAT' className="innr_ctgry">
              <p>VAT Calculator</p>
             <Image src="/fast-forward.gif" alt="loading.." width={35} height={35} />
            </Link>
            <Link href='/finance/Simpleinterest' className="innr_ctgry">
              <p>Simple interest rate calc </p>
             <Image src="/fast-forward.gif" alt="loading.." width={35} height={35} />
            </Link>
          
            <Link href='/finance/Percentage' className="innr_ctgry">
              <p>Percentage calculator </p>
             <Image src="/fast-forward.gif" alt="loading.." width={35} height={35} />
            </Link>
            <Link href='/finance/Percentageincrease' className="innr_ctgry">
              <p>Percentage increase calculator </p>
             <Image src="/fast-forward.gif" alt="loading.." width={35} height={35} />
            </Link>
            <Link href='/finance/mortgage/Mortgage' className="innr_ctgry">
              <p>Mortgage calculator </p>
             <Image src="/fast-forward.gif" alt="loading.." width={35} height={35} />
            </Link>
            <Link href='/finance/Compinterest' className="innr_ctgry">
              <p>Compound interest calculator </p>
             <Image src="/fast-forward.gif" alt="loading.." width={35} height={35} />
            </Link>
          
          </div>
        </div>
      
     
     
      </div>
    </div>
  </>
  )
}

export default Financeconverterpage