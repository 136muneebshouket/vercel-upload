import React, { useState, useEffect } from 'react'
import Head from 'next/head';
// import numberOfWords from "word-frequency-basic";



const Wordfrequency = () => {

    const [text, settext] = useState("");
    // const [Show, setShow] = useState({});




    function handlechange(event) {
        let newtext = event.target.value;
        settext(newtext);
    }
    // useEffect(() => {
    //     setShow(numberOfWords(text))
    // }, [text])
    


    const Text = text.toLowerCase();
    const Text2 = Text.replaceAll(".","");
    
    const textArr = Text2.split(" ");
    
    const obj = {};
    function giveFreq() {
        for (let i = 0; i <= textArr.length; i++) {
            obj[textArr[i]] = 0;
        }
        for (let i = 0; i <= textArr.length; i++) {
            obj[textArr[i]]++;
        }
        return obj;
    }
    const newObj = giveFreq();
    let keys = Object.keys(newObj);
    keys = keys.slice(0, keys.length - 2);
    return (
        <>
            <Head>
        <title> Word Frequency counter of Pragraph | [Website Name]</title>
        <meta name="description" content="Word Frequency counter of Pragraph  " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      


            <div class="finance calulator">
                <div class="finance-calculator" style={{ maxWidth: '750px' }}>
                    <h2>Word frequency counter</h2>
                    <div>
                        <label>Enter the text</label>
                        <textarea style={{ textAlign: 'left', fontSize: '16px' }} placeholder='enter text'
                            onChange={handlechange}
                            name="text" id="" cols="50" rows="10"></textarea>
                    </div>
                    <div className="res-section">
                        {/* {Object.keys(Show).map((key, index) => (
                            <div className="grid-item" key={index}>
                              <div style={{justifyContent:'center',display:'space-around'}}>{key}:{Show[key]}</div> 
                            </div>
                        ))} */}
                        {keys.map((ele) => (
                         <div className="grid-item">
                            <div style={{justifyContent:'space-around',display:'flex'}}>{ele} : {newObj[ele]}</div>
                           </div>
                            ))}
                       
                    </div>

                </div>
            </div>
        </>
    )
}

export default Wordfrequency