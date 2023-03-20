import React, { useState,useEffect } from 'react'
import Head from 'next/head';

const Wordcounter = () => {
    const [Input, setInput] = useState('');
    const [Word, setWord] = useState();
    const [Char, setChar] = useState();

    const onchangehandler = (event) => {
        setInput(event.target.value);
        
    }
    useEffect(() => {
        console.log(Input);
        let content = Input.toString();
        console.log(content.length)
        setChar(content.length)
         
        content.trim();
        let wordList = content.split(/\s/);
        // Remove spaces from between words 
        let words = wordList.filter(function (element) {
            return element != "";
        });
        setWord(words.length)
        console.log(words.length)
    }, [Input])
    
    
   
   

    return (
        <>
        <Head>
        <title> Word Counter of Pragraph | [Website Name]</title>
        <meta name="description" content=" Word Counter of Pragraph " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

            <div class="finance calulator">
                <div class="finance-calculator" style={{ maxWidth: '750px' }}>
                    <h2>Word and character counter</h2>
                    <div>
                        <label>Enter the text</label>
                        <textarea style={{ textAlign: 'left',fontSize:'16px' }} onChange={onchangehandler} name="text" id="" cols="50" rows="10"></textarea>
                    </div>
                    <div>
                        <label>Words</label>
                        <input class="input" value={Word} type="number" disabled />
                    </div>
                    <div>
                        <label>Characters</label>
                        <input class="input" value={Char} type="number" disabled />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Wordcounter