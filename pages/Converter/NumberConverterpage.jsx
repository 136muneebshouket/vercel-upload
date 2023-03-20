import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

const NumberConverterpage = () => {
  return (
  <>
      <Head>
      <title>Number Converters</title>
      <meta name="description" content="Convert numbers between different formats effortlessly with our versatile number converter tool - the ultimate solution for all your numerical conversion needs." />
      
      </Head>
 
 
    <div className="cnvrtrpage_body">
      <div className="cnvrtrpage_header"><h1> Numbers Converters </h1></div>
      <div className="cnvrtrpage_catogeries">
        <div className="catg_div">
          <div className="head">  binary converter</div>
          <div className="catogeries">
            <Link href='/Converter/Binary' className="innr_ctgry">
              <p>binary-to-decimal converter</p>
              <Image src="/fast-forward.gif" alt="loading.." width={35} height={35} />
            </Link>
            <Link href='/Converter/Binarytoascii' className="innr_ctgry">
              <p>binary-to-ascii converter</p>
             <Image src="/fast-forward.gif" alt="loading.." width={35} height={35} />
            </Link>
            <Link href='/Converter/Binarytooctal' className="innr_ctgry">
              <p>binary-to-Octal converter</p>
             <Image src="/fast-forward.gif" alt="loading.." width={35} height={35} />
            </Link>
            <Link href='/Converter/Binarytohex' className="innr_ctgry">
              <p>binary-to-hexadecimal converter</p>
             <Image src="/fast-forward.gif" alt="loading.." width={35} height={35} />
            </Link>
          </div>
        </div>
        <div className="catg_div">
          <div className="head">Hexadecimal converter</div>
          <div className="catogeries">
            <Link href='/Converter/Hexatobinary' className="innr_ctgry">
              <p>Hexadecimal-to-Binary converter</p>
             <Image src="/fast-forward.gif" alt="loading.." width={35} height={35} />
            </Link>
            <Link href='/Converter/Hexatodecimal' className="innr_ctgry">
              <p>Hexadecimal-to-decimal converter</p>
             <Image src="/fast-forward.gif" alt="loading.." width={35} height={35} />
            </Link>
            <Link href='/Converter/Hexatoascii' className="innr_ctgry">
              <p>Hexadecimal-to-ascii converter</p>
             <Image src="/fast-forward.gif" alt="loading.." width={35} height={35} />
            </Link>

          </div>
        </div>
        <div className="catg_div">
          <div className="head">Ascii(Text) converter</div>
          <div className="catogeries">
            <Link href='/Converter/TextBinary' className="innr_ctgry">
              <p>Ascii(Text)-to-Binary converter</p>
             <Image src="/fast-forward.gif" alt="loading.." width={35} height={35} />
            </Link>
            <Link href='/Converter/Asciitohexa' className="innr_ctgry">
              <p>Ascii(Text)-to-Hexadecimal converter</p>
             <Image src="/fast-forward.gif" alt="loading.." width={35} height={35} />
            </Link>
            <Link href='/Converter/Asciitodecimal' className="innr_ctgry">
              <p>Ascii(Text)-to-decimal converter</p>
             <Image src="/fast-forward.gif" alt="loading.." width={35} height={35} />
            </Link>


          </div>
        </div>
        <div className="catg_div">
          <div className="head">Decimal converter</div>
          <div className="catogeries">
            <Link href='/Converter/Decimaltohexa' className="innr_ctgry">
              <p>decimal-to-Hexadecimal converter</p>
             <Image src="/fast-forward.gif" alt="loading.." width={35} height={35} />
            </Link>
            <Link href='/Converter/Decimaltooctal' className="innr_ctgry">
              <p>decimal-to-Octal converter</p>
             <Image src="/fast-forward.gif" alt="loading.." width={35} height={35} />
            </Link>
            <Link href='/Converter/Decimaltobinary' className="innr_ctgry">
              <p>decimal-to-binary converter</p>
             <Image src="/fast-forward.gif" alt="loading.." width={35} height={35} />
            </Link>



          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default NumberConverterpage