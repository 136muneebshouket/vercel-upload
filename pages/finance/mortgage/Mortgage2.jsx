import React,{useState} from 'react'

const Mortgage2 = () => {

  const [Amount, setAmount] = useState();
  const [Interestrate, setInterestrate] = useState();
  const [Period, setPeriod] = useState('Year');
  const [Duration, setDuration] = useState();
  const [Totalmonths, setTotalmonths] = useState();
  const [Totalpay, setTotalpay] = useState();
  const [Monthlypay, setMonthlypay] = useState();



  const calulateAmount = (e) => {
    e.preventDefault();
    let r = (Interestrate / 100) / 12;
    // console.log(r,r * Math.pow(1 + r, ))

    if (Period == 'Months') {
      let n = Duration;
      setTotalmonths(n)
      let M = Monthlypay / ((r * Math.pow(1 + r, n)) / ((Math.pow(1 + r, n)) - 1))
      setAmount(M.toFixed(2));
      setTotalpay(Math.round(n * Monthlypay))

    } else {
      let n = Duration * 12;
      setTotalmonths(n)
      let M = Monthlypay / ((r * Math.pow(1 + r, n)) / ((Math.pow(1 + r, n)) - 1))
      setAmount(M.toFixed(2));
      setTotalpay(Math.round(n * Monthlypay))
    }

  }

  return (
    <>
      <div>
        <label>Monthly payment</label>
        <input class="input" value={Monthlypay} type="number"
          onChange={(e) => { setMonthlypay(e.target.value) }}
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
        onClick={calulateAmount}
        className='calculator-button' >Calculate</button>
      <div>
        <label>Loan amount:</label>
        <input class="input" value={Amount} type="number" disabled />
      </div>
      <div>
        <label>Loan term in months:</label>
        <input class="input" value={Totalmonths} type="number" disabled />
      </div>
      <div>
        <label>Total payments:</label>
        <input class="input" value={Totalpay} type="number" disabled />
      </div>
    </>
  )
}

export default Mortgage2