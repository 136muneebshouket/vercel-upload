import React,{useState} from 'react'
import Head from 'next/head';

const Compinterest = () => {
    const [Amount, setAmount] = useState();
    const [Interestrate, setInterestrate] = useState('');
    const [Period, setPeriod] = useState('Year');
    const [Duration, setDuration] = useState('');
    const [Yearlyormonthly, setYearlyormonthly] = useState('Yearly');
    const [Futurevalue, setFuturevalue] = useState();
    const [Totalamount, setTotalamount] = useState();
    const [Totalinterest, setTotalinterest] = useState();


     const calulateCompound=()=>{
        let m = 1;
        let n = Duration;
       if(Yearlyormonthly=='Monthly'){
        m = 12;
       }
       if(Period=='Month'){
        n = Duration / 12;
       }
         
         let power = m * n;
        let r = Interestrate/100;
        
        let A = (Amount * (Math.pow((1 + (r/m)),power))).toFixed(2)
        setFuturevalue(A);
        setTotalamount(Amount);
        setTotalinterest((A - Amount).toFixed(2))
     }


    return (
        <>
            <Head>
        <title>Compound Interest Calculator| [Website Name]</title>
        <meta name="description" content="Compound Interest Calculator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        </Head>

            <div class="finance calulator">
                <div class="finance-calculator">
                    <h1>Compound interest rate calculator</h1>
                    <div>
                        <label>Present value</label>
                        <input class="input" value={Amount} type="number"
                            onChange={(e) => { setAmount(e.target.value) }} />
                    </div>
                    <div>
                        <label>Annual interest rate: %</label>
                        <input class="input" value={Interestrate} type="number"
                            onChange={(e) => { setInterestrate(e.target.value) }}
                            placeholder="Annual interest rate" />
                        <select name="catogery" onChange={(e) => {   setYearlyormonthly(e.target.value) }} id="cars">
                            <option value="Yearly">Compound Yearly</option>
                            <option value="Monthly">Compound Monthly</option>
                        </select>
                    </div>
                    <div>
                        <label>Period:</label>
                        <input class="input" value={Duration} type="number"
                            onChange={(e) => { setDuration(e.target.value) }}
                            placeholder="Duration" />
                        <select name="catogery" onChange={(e) => { setPeriod(e.target.value) }} id="cars">
                            <option value="Year">Year</option>
                            <option value="Months">Months</option>
                        </select>
                    </div>
                    <button
                        onClick={calulateCompound}
                        className='calculator-button' >Calculate</button>
                    <div>
                        <label>Future value</label>
                        <input class="input" value={Futurevalue} type="number" disabled />
                    </div>
                    <div>
                        <label>Total amount:</label>
                        <input class="input" value={Totalamount} type="number" disabled />
                    </div>
                    <div>
                        <label>Total interest:</label>
                        <input class="input" value={Totalinterest} type="number" disabled />
                    </div>


                </div>
            </div>
        </>
    )
}

export default Compinterest