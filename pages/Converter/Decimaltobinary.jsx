import React,{useState,useEffect} from 'react'
import Head from 'next/head'
import Link from 'next/link'

const Decimaltobinary = () => {
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
            return obj.topic !== 'decimal-to-binary';

        })
        setDisplay(newarr);

    }, [])
  
    const [Decimal, setDecimal] = useState('');
    const [result, setResult] = useState('');

    const decimaltobinaryconvert = (e) => {
        e.preventDefault();
        let number = parseInt(Decimal);
        let hexStr = number.toString(2).toUpperCase();
        setResult(hexStr);
    }
    return (
        <>
         <Head>
        <title> Decimal to Binary number converter | [Website Name]</title>
        <meta name="description" content=" Decimal to Binary number converter " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        </Head>

            <div class="container calulator">
                <div class="rounding-calculator">
                    <h1>Decimal to binary</h1>
                    <div>
                        <label>Type decimal Number</label>
                        <input class="input" type="Number" value={Decimal} onChange={(e) => { setDecimal(e.target.value) }} placeholder="Enter decimal Number" />
                    </div>
                    <button onClick={decimaltobinaryconvert} className='calculator-button' >Convert</button>

                    <div>
                        <h3>
                            {result}
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

export default Decimaltobinary