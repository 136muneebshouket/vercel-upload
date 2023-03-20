import React,{useState} from 'react'
import Head from 'next/head'

const Percentageincrease = () => {
    const [pchange, setPchange] = useState({
        percentage :'',
        value1 :'',
        value2 :'',
        difference :'',
     })
     const [pchange2, setPchange2] = useState({
        percentage :'',
        value1 :'',
        value2 :'',
        difference :'',
     })
     const onchnangeP=(e)=>{
        setPchange((s)=>({ ...s,[e.target.name]:e.target.value}))
      }
     const onchnangeP2=(e)=>{
        setPchange2((s)=>({ ...s,[e.target.name]:e.target.value}))
      }
      const calulatepchange=(e)=>{
        e.preventDefault();
       let Result= (((pchange.value2 - pchange.value1 )/pchange.value1) * 100).toFixed(3);
    //    setPchange({...pchange , percentage: Result})
       let Difference = (pchange.value1 * Result ) / 100;
       setPchange({...pchange ,percentage: Result, difference: Difference })
    // console.log(Difference)
      }
      const calulatepchange2=(e)=>{
        e.preventDefault();
        let Difference = (pchange2.value1 * pchange2.percentage ) / 100;

       let finalvalue= parseInt(pchange2.value1 ) + parseInt(Difference);
    //    setPchange({...pchange , percentage: Result})
       
       setPchange2({...pchange2 , value2: finalvalue , difference : Difference })
    // console.log(Difference)
      }
  return (
    <>
      <Head>
        <title>Percentage Increase Calculator tools| [Website Name]</title>
        <meta name="description" content="Percentage Increase Calculator tools" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        </Head>

    <div class="finance calulator">
        <div class="finance-calculator">
            <h1>percentage increase/decrease calculator</h1>
            <div>
                <label>Initial value</label>
                <input class="input" 
                 name='value1'
                 value={pchange.value1} 
                 type="number"
                 onChange={onchnangeP}
                     />
            </div>
            <div>
                <label>final value</label>
                <input class="input" 
                value={pchange.value2} 
                name='value2'
                 type="number"
                 onChange={onchnangeP}
                    />
            </div>
           
            <button
                onClick={calulatepchange}
                className='calculator-button' >Calculate</button>
            <div>
                <label>Percentage {pchange.percentage.includes('-') ? <>decrease</> : <>increase</>} </label>
                <input class="input"
               value={pchange.percentage} 
                  type="number" disabled />
            </div>
            <div>
                <label>Difference</label>
                <input class="input"
                
                value={pchange.difference} 
                //  value={Totalamount}
                  type="number" disabled />
            </div>
          

        </div>
    </div>


    {/* final value calculator */}
    <div class="finance calulator">
        <div class="finance-calculator">
            <h2>Final value calculator</h2>
            <div>
                <label>Initial value</label>
                <input class="input" 
                 name='value1'
                 value={pchange2.value1} 
                 type="number"
                 onChange={onchnangeP2}
                     />
            </div>
            <div>
                <label>final value</label>
                <input class="input" 
                value={pchange2.percentage} 
                name='percentage'
                 type="number"
                 onChange={onchnangeP2}
                    />
            </div>
           
            <button
                onClick={calulatepchange2}
                className='calculator-button' >Calculate</button>
            <div>
                <label>Final value</label>
                <input class="input"
               value={pchange2.value2} 
                  type="number" disabled />
            </div>
            <div>
                <label>Difference</label>
                <input class="input"
                
                value={pchange2.difference} 
                //  value={Totalamount}
                  type="number" disabled />
            </div>
          

        </div>
    </div>
</>
  )
}

export default Percentageincrease