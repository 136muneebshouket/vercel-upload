import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import Head from 'next/head';

const Hexatoascii = () => {

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
      return obj.topic !== 'Hexadecimal-to-ascii ';

    })
    setDisplay(newarr);

  }, [])


  const [hex, setHex] = useState('');
  const [result, setResult] = useState('');


  console.log(hex);


  const hexaToasciiconvert = (e) => {
    e.preventDefault();

    var hexRegex = /[0-9A-Fa-f]/g;
    if (hex.match(hexRegex) && hex.length > 0) {

      var hexa = hex.toString().split(" ").join("");
      var str = '';
      for (var n = 0; n < hexa.length; n += 2) {
        str += String.fromCharCode(parseInt(hexa.substr(n, 2), 16));
      }
      setResult(str);
    } else {
      // return 'Invalid Hexadecimal';
      let value = 'Invalid Hexadecimal';
      setResult(value);
    }
    // }

  }
  return (
    <>
        <Head>
        <title> Decimal to Ascii(Text) converter | [Website Name]</title>
        <meta name="description" content=" Decimal to Ascii(Text) converter " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        </Head>

      <div class="container calulator">
        <div class="rounding-calculator">
          <h1>Hexa To Ascii</h1>
          <div>
            <label>Type Hexadecimal Number</label>
            <input class="input" id="ti1" name='binary_text' onChange={(e) => { setHex(e.target.value) }} type="text" />
          </div>
          <button className='calculator-button' onClick={hexaToasciiconvert}>Convert</button>

          <div>
            {result}
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

export default Hexatoascii