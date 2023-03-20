import React,{useState} from 'react'
import Head from 'next/head'

const Percentage = () => {
     const [first, setFirst] = useState({
        percentage :'',
        value :'',
        result :'',
     })
     const [first2, setFirst2] = useState({
        percentage :'',
        value1 :'',
        value2 :'',
     })
     const [first3, setFirst3] = useState({
        percentage :'',
        value :'',
        result :'',
     })
     const [pchange, setPchange] = useState({
        percentage :'',
        value1 :'',
        value2 :'',
     })
      const onchnangefirst=(e)=>{
        setFirst((s)=>({ ...s,[e.target.name]:e.target.value}))
      }
      const onchnangefirst2=(e)=>{
        setFirst2((s)=>({ ...s,[e.target.name]:e.target.value}))
      }
      const onchnangefirst3=(e)=>{
        setFirst3((s)=>({ ...s,[e.target.name]:e.target.value}))
      }
      const onchnangeP=(e)=>{
        setPchange((s)=>({ ...s,[e.target.name]:e.target.value}))
      }
      const calulatevalue=(e)=>{
        e.preventDefault();
       let Result= ((first.percentage/100) * first.value).toFixed(3);
       setFirst({...first , result: Result})
      }
      const calulatepercentage=(e)=>{
        e.preventDefault();
       let Result= ((first2.value1/first2.value2) * 100).toFixed(3);
       setFirst2({...first2 , percentage: Result})
      }
      const calulatefirst3=(e)=>{
        e.preventDefault();
       let Result= ((first3.value/first3.percentage) * 100).toFixed(3);
       setFirst3({...first3 , result: Result})
      }
      const calulatepchange=(e)=>{
        e.preventDefault();
       let Result= (((pchange.value2 - pchange.value1 )/pchange.value1) * 100).toFixed(3);
       setPchange({...pchange , percentage: Result})
      }



    return (
          <>
           <Head>
        <title>Percentage Calculator tools| [Website Name]</title>
        <meta name="description" content="Percentage Calculator tools" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
 

            <div class="finance calulator">
                <div class="finance-calculator" 
                    style={{ maxWidth: '790px' }}>
                    <h1>Percentage calculator</h1>
                    <div style={{ display: 'block' }}>
                    What is
                        <input class="input"
                        name='percentage'
                            value={first.percentage} 
                            style={{ maxWidth: '150px', margin:'5px' }}
                            type="number"
                            onChange={onchnangefirst}
                        />% of <input class="input"
                        name='value'
                        value={first.value} 
                            style={{ maxWidth: '150px', margin:'5px' }}
                            type="number"
                            onChange={onchnangefirst}
                        />?
                        <button 
                         style={{ margin:'5px' }}
                            onClick={calulatevalue}
                            className='calculator-button' >Calculate</button>

                            <input class="input"
                            name='result'
                            value={first.result} 
                            style={{ maxWidth: '150px', margin:'5px' }}
                            type="number"
                          disabled />
                    </div>

                    {/* ........................................................ */}
                    <div style={{ display: 'block' }}>
                 
                        <input class="input"
                        name='value1'
                            value={first2.value1} 
                            style={{ maxWidth: '150px', margin:'5px' }}
                            type="number"
                            onChange={onchnangefirst2}
                        /> is what % of  <input class="input"
                        name='value2'
                        value={first2.value2} 
                            style={{ maxWidth: '150px', margin:'5px' }}
                            type="number"
                            onChange={onchnangefirst2}
                        />?
                        <button 
                         style={{ margin:'5px' }}
                            onClick={calulatepercentage}
                            className='calculator-button' >Calculate</button>
                            <input class="input"
                            name='result'
                            value={first2.percentage} 
                            style={{ maxWidth: '150px', margin:'5px' }}
                            type="number"
                          disabled />%
                    </div>
                    {/* .................................................................. */}
                    <div style={{ display: 'block' }}>
                 
                 <input class="input"
                 name='value'
                     value={first3.value} 
                     style={{ maxWidth: '150px', margin:'5px' }}
                     type="number"
                     onChange={onchnangefirst3}
                 /> is what % of  <input class="input"
                 name='percentage'
                 value={first3.percentage} 
                     style={{ maxWidth: '150px', margin:'5px' }}
                     type="number"
                     onChange={onchnangefirst3}
                 />?
                 <button 
                  style={{ margin:'5px' }}
                     onClick={calulatefirst3}
                     className='calculator-button' >Calculate</button>
                     <input class="input"
                     name='result'
                     value={first3.result} 
                     style={{ maxWidth: '150px', margin:'5px' }}
                     type="number"
                   disabled />
             </div>
               {/* ........................................................ */}
               <div style={{ display: 'block' }}>
                 
                 from<input class="input"
                 name='value1'
                     value={pchange.value1} 
                     style={{ maxWidth: '150px', margin:'5px' }}
                     type="number"
                     onChange={onchnangeP}
                 /> to  <input class="input"
                 name='value2'
                 value={pchange.value2} 
                     style={{ maxWidth: '150px', margin:'5px' }}
                     type="number"
                     onChange={onchnangeP}
                 />?
                 <button 
                  style={{ margin:'5px' }}
                     onClick={calulatepchange}
                     className='calculator-button' >Calculate</button>
                     <input class="input"
                     name='result'
                     value={pchange.percentage} 
                     style={{ maxWidth: '150px', margin:'5px' }}
                     type="number"
                   disabled />%
             </div>
                


                </div>
            </div>
        </>
    )
}

export default Percentage