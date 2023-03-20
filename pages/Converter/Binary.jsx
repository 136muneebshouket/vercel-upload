import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import Head from 'next/head'
import AnimatedNumber from "animated-number-react";
const Binary = () => {

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
      return obj.topic !== 'binary-to-decimal';

    })
    setDisplay(newarr);

  }, [])



  let convertedArr = [];
  let value;
  let conversion;

  const [dec, setDec] = useState("");

  const convertToDec = (bin) => {
    let length = bin.length;
    let pos = length - 1;

    for (let i = 0; i <= length - 1; i++) {
      if (parseInt(bin.charAt(i)) !== 0 && parseInt(bin.charAt(i)) !== 1) {
        alert("Por favor, digite apenas 0 e 1.");
        return;
      } else {
        value = parseInt(bin.charAt(i)) * Math.pow(2, pos);
        convertedArr.push(value);
        pos -= 1;
        conversion = convertedArr.reduce((acc, curr) => {
          return acc + curr;
        }, 0);
      }
    }
    return conversion;
  };

  const onChange = (e) => {
    convertToDec(e.target.value);
    setDec(conversion);
  };
  return (
    <>
    <Head>
        <title> Binary to Decimal numbers converter | [Website Name]</title>
        <meta name="description" content=" Binary to Decimal numbers converter" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        </Head>

      <div class="container calulator">
        <div class="rounding-calculator">
          <h1>Binary To Decimal</h1>
          <div>
            <label>Type Binary Number</label>
            <input name="input" type="text" onChange={onChange} />
          </div>
          {/* <button className='calculator-button' onClick={convert}>Convert</button> */}

          <div>
            <AnimatedNumber
              className="numbers"
              value={dec}
              duration={1000}
              formatValue={(v) => v.toFixed(0)}
              frameStyle={(perc) => ({ opacity: perc / 100 })}
            />
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

export default Binary