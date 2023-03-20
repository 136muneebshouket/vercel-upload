import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'

const Asciitohexa = () => {


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
            return obj.topic !== 'Ascii(Text)-to-Hexadecimal';

        })
        setDisplay(newarr);

    }, [])

    const [Ascii, setAscii] = useState('');
    const [result, setResult] = useState('');

    const asciitohexaconvert = (e) => {
        e.preventDefault();
        let hex = '';
        let tASCII, Hex;
        Ascii.split('').map(i => {
            tASCII = i.charCodeAt(0)
            Hex = tASCII.toString(16);
            hex = hex + Hex + ' ';
        });
        hex = hex.trim();
        console.log(hex);
        setResult(hex)
    }

    return (
        <>
           <Head>
        <title> Ascii(text) to Hexadecimal number converter | [Website Name]</title>
        <meta name="description" content="Ascii(text) to Hexadecimal number converter" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        </Head>


            <div class="container calulator">
                <div class="rounding-calculator" style={{height:"70vh"}}>
                    <h1>Ascii text to hexadecimal converter</h1>
                    <div>
                        <label>Type Ascii (Text)</label>
                        <input class="input" value={Ascii} type="text" onChange={(e) => { setAscii(e.target.value) }} placeholder="Enter Ascii (Text) " />
                    </div>
                    <button onClick={asciitohexaconvert} className='calculator-button' >Convert</button>

                    <div>
                        <h3>
                            {result}
                        </h3>

                    </div>
                </div>
                <div className="content_sec">
                    <div className="content">


                        <p><strong><span style={{ textDecoration: "underline" }}>What is ascii and hex?. Ascii to hex format. Introduction.</span></strong></p>
                        <p>American standard code for information interchange(ascii) is most commonly used for changing format for text data in computers and on the internet. It is also called an 8 bit code system. Eight bit is also called a <strong>byte</strong>. In computers it is known as byte.&nbsp; It consists of 128 alphabets, numeric and special characters and control codes. There are two types of ascii codes: standard<strong> ascii codes</strong> and <strong>extended ascii codes</strong>. Hex is a system of numbering that is represented by base 16. In mathematics, it is a positional numerals system that represents numbers using radix. Hexadecimal uses 16 symbols from 0 to 9 and A to F. It is used for presenting a large number with fewer digits. <strong>Ascii to hex</strong> is a system of converting <strong>ascii format to hex format</strong>. It is a technical work. Simply ascii lie 00 to FF in hexadecimal. <strong>Ascii_hex format</strong> supports 32 bit addresses. If you subtract 30 hex from ascii values. It will be automatically converted to hexadecimal values 00 to FF.</p>
                        <p><strong><span style={{ textDecoration: "underline" }}>What is ascii converter? Lovepdf.co</span></strong>.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                        <p><strong>Ascii converter</strong> is a process of converting ascii codes to desired values. <strong>Lovepdf.co</strong> is a website of tools that provide all the tools of converting. By using tools you can easily convert your document. You can do <strong>ascii to text, ascii to decimal, ascii to hex, ascii to binary</strong> also vice versa. It is an online free tool web. By using tools you can save your time. It is easy to use. You just need to put values in the given menu. Your values will automatically convert into desired values.</p>
                        <p><strong><span style={{ textDecoration: "underline" }}>How to do ascii decoder.&nbsp; Method of conversion</span></strong>.</p>
                        <p>&nbsp;Ascii is a basic encoding format that is used for electronic communication between computers.&nbsp; <strong>The Ascii table chart</strong> is a collection of 128 alphabets, numeric and special characters, and control codes. <strong>Ascii conversion or decoding</strong> process is a method of decoding ascii values. You can do it with the ascii<strong> conversion table</strong> that is available in the website <strong>lovepdf.co</strong>.&nbsp; briefly <strong>ascii decoding</strong> is a system in which you can translate every value of decimal, binary, hexadecimal&nbsp; and octal with the communicating character in the <strong>ascii table</strong>. You can format ascii translating values into binary digits 0 and 1, decimal values 0 to 9 octal values 0 to 7 and hexadecimal values 0 to 9 and A to F.</p>
                        <p><strong><span style={{ textDecoration: "underline" }}>What is ascii code translator? Best translator. Lovepdf.co</span></strong></p>
                        <p><strong>Ascii code translator</strong> is an online tool introduced by the lovepdf.co website. Just writing the ascii code in the drop down menu and clicking on the convert button, you can get the result.&nbsp; With the tool <strong>ascii code translator</strong> you can easily convert ascii codes to decimal, binary, hex and octal code.</p>
                        <p><strong><span style={{ textDecoration: "underline" }}>How you do convert ascii ( text ) to hex online?</span></strong></p>
                        <p><strong>Ascii to hex</strong> conversion is a process of converting ascii codes or values to hex values. Ascii is a basic encoding format that is used for electronic communication between computers.&nbsp; <strong>The Ascii table</strong> chart is a collection of 128 alphabets, numeric and special characters, and control codes. That is used in computers during working. 7 bits are enough to show a character in ascii, but most computers used 8 bits for ascii characters. It is also called an 8 bit code system. Each eight bit is known as a byte. You can do it by using the tool <strong>ascii to hex online</strong>. It is free of cost. You can also do it by using a table that is available in this website ascii table. You can also do it by hand. Follow these steps:</p>
                        <p>● Write character</p>
                        <p>● See the decimal code of the character from the <strong>ascii table</strong></p>
                        <p>● Now, convert decimal to hex byte</p>
                        <p>● Repeat the above process with the next character.</p>
                        <p><strong><span style={{ textDecoration: "underline" }}>Ascii Text To Hexadecimal Converter.</span></strong></p>
                        <p>The hexadecimal number system is identified with the binary and decimal systems. But it uses base 16 instead of base 10 and 2. Every hex digit represents four binary digits. That means hexadecimal is used to represent binary digits with fewer digits. ascii is most commonly used for changing format for text data in computers and on the internet. <strong>Ascii text to hexadecimal</strong> means converting ascii codes or plain text into hexadecimal values. You can do it by using the tool <strong>ascii text to hexadecimal</strong> provided by <strong>lovepdf.co</strong> website. You can use it online for free. It is a user-friendly website. you can also install <strong>lovepdf.co app</strong> in your android mobile. You can also convert by using the ascii<strong> table</strong>.</p>
                        <p><strong><span style={{ textDecoration: "underline" }}>Ascii to hex table</span></strong>.</p>
                       
                    </div>
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

export default Asciitohexa