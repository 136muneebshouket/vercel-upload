import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

const Image_coverters = () => {
  return (
    <>
     <Head>
      <title>Image Converters Tools</title>
      <meta name="description" content="Convert your images to any format with ease using our online image converter tool. No installation required. Fast, free, and secure!" />
      
      </Head>

    <div className="cnvrtrpage_body">
      <div className="cnvrtrpage_header"> <h1> Image_coverters</h1></div>
      <div className="cnvrtrpage_catogeries">
        <div className="catg_div">
          <div className="head">Image_coverters</div>
          <div className="catogeries">
            <Link href='/image_converter/jpgtowebp' className="innr_ctgry">
              <p>jpg to webp</p>
             <Image src="/fast-forward.gif" alt="loading.." width={35} height={35} />
            </Link>
            <Link href='/image_converter/Pngtowebp' className="innr_ctgry">
              <p>Png to webp</p>
             <Image src="/fast-forward.gif" alt="loading.." width={35} height={35} />
            </Link>
            <Link href='/image_converter/Webptopng' className="innr_ctgry">
              <p>webp to Png</p>
             <Image src="/fast-forward.gif" alt="loading.." width={35} height={35} />
            </Link>
            <Link href='/image_converter/Webptojpg' className="innr_ctgry">
              <p>webp to Jpg</p>
             <Image src="/fast-forward.gif" alt="loading.." width={35} height={35} />
            </Link>
            <Link href='/image_converter/Imagetopdf/Imagestopdf' className="innr_ctgry">
              <p>Images to Pdf</p>
             <Image src="/fast-forward.gif" alt="loading.." width={35} height={35} />
            </Link>
            <Link href='/image_converter/Imagecompressor' className="innr_ctgry">
              <p>Image compressor</p>
             <Image src="/fast-forward.gif" alt="loading.." width={35} height={35} />
            </Link>
          
           
          
          </div>
        </div>
      
     
     
      </div>
    </div>
  </>
  )
}

export default Image_coverters