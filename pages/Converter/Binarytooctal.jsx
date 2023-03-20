import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import Head from 'next/head'

const Binarytooctal = () => {


  const relatedconverter = [
    {
      topic: 'binary-to-decimal ',
      topiclink: '/Converter/Binary'
    },
    {
      topic: 'binary-to-ascii ',
      topiclink: '/Converter/Binarytoascii'
    },
    {
      topic: 'binary-to-Octal ',
      topiclink: '/Converter/Binarytooctal'
    },
    {
      topic: 'binary-to-hexadecimal ',
      topiclink: '/Converter/Binarytohex'
    },
    {
      topic: 'Hexadecimal-to-Binary ',
      topiclink: '/Converter/Hexatobinary'
    },
    {
      topic: 'Hexadecimal-to-decimal ',
      topiclink: '/Converter/Hexatodecimal'
    },
    {
      topic: 'Hexadecimal-to-ascii ',
      topiclink: '/Converter/Hexatoascii'
    },
    {
      topic: 'Ascii(Text)-to-Binary ',
      topiclink: '/Converter/TextBinary'
    },
    {
      topic: 'Ascii(Text)-to-Hexadecimal ',
      topiclink: '/Converter/Asciitodecimal'
    },
    {
      topic: 'decimal-to-Hexadecimal ',
      topiclink: '/Converter/Decimaltohexa'
    },
    {
      topic: 'Ascii(Text)-to-decimal converter',
      topiclink: '/Converter/Asciitodecimal'
    },
    {
      topic: 'decimal-to-Octal ',
      topiclink: '/Converter/Decimaltooctal'
    },
    {
      topic: 'decimal-to-binary ',
      topiclink: '/Converter/Decimaltobinary'
    },

  ]

  const [display, setDisplay] = useState([])


  useEffect(() => {
    const newarr = relatedconverter.filter((obj) => {
      return obj.topic !== 'binary-to-Octal';

    })
    setDisplay(newarr);

  }, [])


  const [binary, setBinary] = useState('');
  const [hex, setHex] = useState('');

  const handleChange = (event) => {
    const binaryValue = event.target.value;
    const hexValue = parseInt(binaryValue, 2).toString(8);
    setBinary(binaryValue);
    setHex(hexValue);
  }


  return (
    <>
     <Head>
        <title> Binary to Octal number converter | [Website Name]</title>
        <meta name="description" content=" Binary to Octal number converter " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
    



      <div class="container calulator">
        <div class="rounding-calculator">
          <h1>Hexa To Binary</h1>
          <div>
            <label>Type Binary Number</label>
            <input class="input" type="Number" value={binary} onChange={handleChange} placeholder="Enter Binary Number" />
          </div>
          <button className='calculator-button' >Convert</button>

          <div>
            <h3>
              {hex}
            </h3>

          </div>
        </div>
        <div className="content_sec">
          
          <div className="related_topics">
            <div className="tableofcontent">
              <div className="heading">Table of Content</div>
              <div className="topicnames">binary</div>
            </div>
            <div className="tableofcontent">
              <div className="heading">Related Converters</div>
              {
                display.map((obj) => {
                  return (
                    <div className="topicnames"><Link href={obj.topiclink}>{obj.topic}</Link></div>
                  )
                })
              }

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Binarytooctal