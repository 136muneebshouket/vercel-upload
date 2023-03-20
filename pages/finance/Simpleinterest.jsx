import React,{useState} from 'react'
import Head from 'next/head';

const Simpleinterest = () => {
  
     const [Amount, setAmount] = useState();
     const [Interestrate, setInterestrate] = useState('');
     const [Period, setPeriod] = useState('Year');
     const [Duration, setDuration] = useState('');
     const [Interest, setInterest] = useState();
     const [Totalamount, setTotalamount] = useState();

    const calulateinterestrate = (e) => {
        e.preventDefault();
        let interest = (Interestrate/100) * Amount;
       
        if(Period == 'Months'){
            let interestmonthly = (interest/12) * Duration;
            setInterest(Math.round(interestmonthly) );
            setTotalamount(parseInt(Amount)  + parseInt(interestmonthly))
        }else{
            let interestyearly = interest * Duration;
            setInterest(Math.round(interestyearly));
            setTotalamount(parseInt(Amount)  + parseInt(interestyearly))
        }
        
    }


    return (
        <>
         <Head>
        <title>Simple Interest Calculator tools| [Website Name]</title>
        <meta name="description" content="Simple Interest Calculator tools" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
            <div class="finance calulator">
                <div class="finance-calculator">
                    <h1>Simple interest rate calculator</h1>
                    <div>
                        <label>Principal amount</label>
                        <input class="input" value={Amount} type="number"
                            onChange={(e) => { setAmount(e.target.value) }}
                            placeholder="Principal amount" />
                    </div>
                    <div>
                        <label>Annual interest rate: %</label>
                        <input class="input" value={Interestrate} type="number"
                            onChange={(e) => { setInterestrate(e.target.value) }}
                            placeholder="Annual interest rate" />
                    </div>
                    <div>
                        <label>Period:</label>
                        <input class="input" value={Duration} type="number"
                            onChange={(e) => { setDuration(e.target.value) }}
                            placeholder="Duration" />
                        <select name="catogery"  onChange={(e) => { setPeriod(e.target.value) }} id="cars">
                        <option value="Year">Year</option>
                            <option value="Months">Months</option>
                        </select>
                    </div>
                    <button
                        onClick={calulateinterestrate}
                        className='calculator-button' >Calculate</button>
                    <div>
                        <label>Net Interest</label>
                        <input class="input" value={Interest} type="number" disabled />
                    </div>
                    <div>
                        <label>Total amount:</label>
                        <input class="input" value={Totalamount} type="number" disabled />
                    </div>
                  

                </div>
            </div>
        </>
    )
}

export default Simpleinterest