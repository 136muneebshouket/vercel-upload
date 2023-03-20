import React, { useState } from 'react'
import Mortgage2 from './Mortgage2';
import Head from 'next/head';


const Mortgage = () => {

  const [State, setState] = useState('Monthly_Payment');



  const [Amount, setAmount] = useState();
  const [Interestrate, setInterestrate] = useState();
  const [Period, setPeriod] = useState('Year');
  const [Duration, setDuration] = useState();
  const [Totalmonths, setTotalmonths] = useState();
  const [Totalpay, setTotalpay] = useState();
  const [Monthlypay, setMonthlypay] = useState();

  const calulateMonthlypay = (e) => {
    e.preventDefault();
    let r = (Interestrate / 100) / 12;
    // console.log(r,r * Math.pow(1 + r, ))

    if (Period == 'Months') {
      let n = Duration;
      setTotalmonths(n)
      let A = Amount * ((r * Math.pow(1 + r, n)) / ((Math.pow(1 + r, n)) - 1))
      setMonthlypay(A.toFixed(2));
      setTotalpay(Math.round(n * A))

    } else {
      let n = Duration * 12;
      setTotalmonths(n)
      let A = Amount * ((r * Math.pow(1 + r, n)) / ((Math.pow(1 + r, n)) - 1))
      setMonthlypay(A.toFixed(2));
      setTotalpay(Math.round(n * A))
    }

  }
 

 







  return (
    <>
    <Head>
        <title> Mortgage calculator | [Website Name]</title>
        <meta name="description" content="Mortgage calculator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        </Head>


      <div class="finance calulator">
        <div class="finance-calculator">
          <h1>Mortgage calculator</h1>
          <div className="btns" style={{ display: 'flex', flexDirection: 'row',justifyContent:'center' }}>
            <div className="singlebtn">
              <button id='btn' onClick={()=>{setState('Monthly_Payment')}}>Monthly Payment</button>
            </div>
            <div className="singlebtn">
              <button onClick={()=>{setState('loan_Payment')}}>Loan Payment</button>
            </div>
            {/* <div className="singlebtn">
              <button onClick={setState('Loan_term')}>Loan term</button>
            </div> */}
          </div>
         {State.includes('Monthly_Payment') ? <>
          <div>
            <label>Loan amount</label>
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
            <label>Loan terms:</label>
            <input class="input" value={Duration} type="number"
              onChange={(e) => { setDuration(e.target.value) }}
              placeholder="Duration" />
            <select name="catogery" onChange={(e) => { setPeriod(e.target.value) }} id="cars">
              <option value="Year">Year</option>
              <option value="Months">Months</option>
            </select>
          </div>
          <button
            onClick={calulateMonthlypay}
            className='calculator-button' >Calculate</button>
          <div>
            <label>Monthly payment:</label>
            <input class="input" value={Monthlypay} type="number" disabled />
          </div>
          <div>
            <label>Loan term in months:</label>
            <input class="input" value={Totalmonths} type="number" disabled />
          </div>
          <div>
            <label>Total payments:</label>
            <input class="input" value={Totalpay} type="number" disabled />
          </div>
        </>: 
         <Mortgage2/>} 


        </div>
      </div>
    </>
  )
}

export default Mortgage