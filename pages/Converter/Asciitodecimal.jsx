import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'

const Asciitodecimal = () => {

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
            topic: 'Ascii(Text)-to-decimal converter',
            topiclink: '/Converter/Asciitodecimal'
        },
        {
            topic: 'decimal-to-Hexadecimal ',
            topiclink: '/Converter/Decimaltohexa'
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
            return obj.topic !== 'Ascii(Text)-to-decimal converter';

        })
        setDisplay(newarr);

    }, [])



    const [Ascii, setAscii] = useState('');
    const [result, setResult] = useState('');

    const asciitodecimalconvert = (e) => {
        e.preventDefault();

        var result = '';
        for (var i = 0; i < Ascii.length; i++) {
            let decimal = Ascii.charCodeAt(i);
            result += decimal + ' ';
        }
        setResult(result);
    }
    return (
        <>
         <Head>
        <title> Ascii(text) to Decimal number converter | [Website Name]</title>
        <meta name="description" content="Ascii(text) to Decimal number converter" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
         


            <div class="container calulator" >
                <div class="rounding-calculator" style={{height:"70vh"}}>
                    <h1>Ascii text to decimal converter</h1>
                    <div>
                        <label>Type Ascii (Text)</label>
                        <input class="input" value={Ascii} type="text" onChange={(e) => { setAscii(e.target.value) }} placeholder="Enter Ascii (Text) " />
                    </div>
                    <button onClick={asciitodecimalconvert} className='calculator-button' >Convert</button>

                    <div>
                        <h3>
                            {result}
                        </h3>

                    </div>
                </div>
                <div className="content_sec">
                    
                    <div className="related_topics" >
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

export default Asciitodecimal