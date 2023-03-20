
import React,{useState} from 'react'
import Head from 'next/head';

const GST = () => {
     const [Netamount, setNetamount] = useState('');
     const [GST, setGST] = useState('');
     const [GSTamount, setGSTamount] = useState('');
     const [Grossamount, setGrossamount] = useState('');
    
      const calculateGST= (e)=>{
      e.preventDefault();
        let gstamount = (Netamount/100)*GST;
        setGSTamount(gstamount);

        
        let grossamount = Netamount * (1 + (GST/100))
         setGrossamount(grossamount);
      }


  return (
    <>
        <Head>
        <title>Value Added Tax Calculator Tool| [Website Name]</title>
        <meta name="description" content="Value Added Tax Calculator Tool" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        </Head>

    <div class="finance calulator">
        <div class="finance-calculator">
            <h1>Value added tax calculator</h1>
            <div>
            <label>Type initial amount</label>
                <input class="input" value={Netamount} type="number" 
                onChange={(e) => { setNetamount(e.target.value) }}
                 placeholder="Type initial amount" />
            </div>
            <div>
            <label>Type VAT Rate</label>
                <input class="input" value={GST} type="number" 
                onChange={(e) => { setGST(e.target.value) }}
                 placeholder="Type GST Rate" />
            </div>
            <button 
            onClick={calculateGST} 
            className='calculator-button' >Calculate</button>
              <div>
            <label>Net amount</label>
                <input class="input" value={Netamount} type="text"  disabled/>
            </div>
              <div>
            <label>VAT amount</label>
                <input class="input" value={GSTamount} type="text"  disabled/>
            </div>
              <div>
            <label>Gross amount</label>
                <input class="input" value={Grossamount} type="text"  disabled/>
            </div>
          
        </div>
    </div>
</>
  )
}

export default GST