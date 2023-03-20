import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

const Unitconvertion = () => {
  return (<>
     
     <Head>
      <title>Unit(Prefixes) Conversion tools</title>
      <meta name="description" content="Easily manipulate and convert your unit values with our powerful online unit convertion tools!" />
      
      </Head>

    <div className="cnvrtrpage_body">
    <div className="cnvrtrpage_header"><h1>Unit conversion</h1></div>
    <div className="cnvrtrpage_catogeries">
      <div className="catg_div">
        <div className="head">Unit conversion</div>
        <div className="catogeries">
          <Link href='/Unitconversion/Chargeconversion' className="innr_ctgry">
            <p>Electrical charge conversion</p>
            <Image src="/fast-forward.gif" alt="loading.." width={35} height={35} />
          </Link>
        </div>
      </div>
    
   
   
    </div>
  </div>
</>
  )
}

export default Unitconvertion