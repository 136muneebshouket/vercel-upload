import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Head from "next/head";
const Blogs = () => {
  return (
   <>
     <Head>
    <title>Blogs| [Website Name]</title>
    <meta name="description" content="Blogs" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
     </Head>


   <div className="about-section">
        <h1>Blogs </h1>
      
      </div>
    <div className="blogs-grid mb-5">
      <div className="blog">
            <Image className="blog-img" width="200" height="70" src="/blog-img.jpg" alt="" />
        
        <p className="text-gray">Thu Dec 22, 2022</p>
        <h2 className="blog-title">Universities in Birmingham</h2>
        <p className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, nobis ipsum fugit iure illum voluptatem enim officiis quis dolore voluptatum.
            </p>
        <Link className='blog-atag text-yellow' href=""> Read More  </Link>
      </div>
      <div className="blog">
      <Image className="blog-img" width="200" height="70" src="/blog-img.jpg" alt="" />
        <p className="text-gray">Thu Dec 22, 2022</p>
        <h2 className="blog-title">Universities in Birmingham</h2>
        <p className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, nobis ipsum fugit iure illum voluptatem enim officiis quis dolore voluptatum.
            </p>
            <Link className='blog-atag text-yellow' href=""> Read More  </Link>
      </div>
      <div className="blog">
      <Image className="blog-img" width="200" height="70" src="/blog-img.jpg" alt="" />
        <p className="text-gray">Thu Dec 22, 2022</p>
        <h2 className="blog-title">Universities in Birmingham</h2>
        <p className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, nobis ipsum fugit iure illum voluptatem enim officiis quis dolore voluptatum.
            </p>
        <Link className='blog-atag text-yellow ' href=""> Read More  </Link>
      </div>


      <div className="blog">
            <Image className="blog-img" width="200" height="70" src="/blog-img.jpg" alt="" />
        
        <p className="text-gray">Thu Dec 22, 2022</p>
        <h2 className="blog-title">Universities in Birmingham</h2>
        <p className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, nobis ipsum fugit iure illum voluptatem enim officiis quis dolore voluptatum.
            </p>
        <Link className='blog-atag text-yellow' href=""> Read More  </Link>
      </div>
      <div className="blog">
            <Image className="blog-img" width="200" height="70" src="/blog-img.jpg" alt="" />
        
        <p className="text-gray">Thu Dec 22, 2022</p>
        <h2 className="blog-title">Universities in Birmingham</h2>
        <p className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, nobis ipsum fugit iure illum voluptatem enim officiis quis dolore voluptatum.
            </p>
        <Link className='blog-atag text-yellow' href=""> Read More  </Link>
      </div>
      <div className="blog">
            <Image className="blog-img" width="200" height="70" src="/blog-img.jpg" alt="" />
        
        <p className="text-gray">Thu Dec 22, 2022</p>
        <h2 className="blog-title">Universities in Birmingham</h2>
        <p className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, nobis ipsum fugit iure illum voluptatem enim officiis quis dolore voluptatum.
            </p>
        <Link className='blog-atag text-yellow' href=""> Read More  </Link>
      </div>

      
    </div>
   </>
  )
}

export default Blogs