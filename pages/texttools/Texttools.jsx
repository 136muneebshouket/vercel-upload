import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

const Texttool = () => {
  return (
    <>

      <Head>
      <title>Text Tools</title>
      <meta name="description" content="Easily manipulate and analyze your text with our powerful online text tools - improve your writing, SEO, and productivity!" />
      
      </Head>

    <div className="cnvrtrpage_body">
      <div className="cnvrtrpage_header"><h1>Text Tools</h1> </div>
      <div className="cnvrtrpage_catogeries">
        <div className="catg_div">
          <div className="head"> Text Tools</div>
          <div className="catogeries">
            <Link href='/texttools/Wordcounter' className="innr_ctgry">
              <p>Word and character counter</p>
             <Image src="/fast-forward.gif" alt="loading.." width={35} height={35} />
            </Link>
            <Link href='/texttools/Wordfrequency' className="innr_ctgry">
              <p>Word frequency counter</p>
             <Image src="/fast-forward.gif" alt="loading.." width={35} height={35} />
            </Link>
           
          
          </div>
        </div>
      
     
     
      </div>
    </div>
  </>
  )
}

export default Texttool