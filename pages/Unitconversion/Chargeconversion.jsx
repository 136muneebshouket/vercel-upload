import React,{useState,useEffect} from 'react';
import Link from 'next/link';
import Head from 'next/head';
// import {
//     atan2, chain, derivative, e, evaluate, log, pi, pow, round, sqrt
//   } from 'mathjs';

const Chargeconversion = () => {
    
    const arr=[
        {
        heading:'Coulombs to pico Coulombs conversion',
        label1:'Enter coulombs',
        label2:'pico Coulombs',
        number:'12',
        method:'',
    },
        {
        heading:'Coulombs to nanocoulombs conversion',
        label1:'Enter charge in coulombs',
        label2:'Nanocoulombs result:(nC)',
        number:'9',
        method:'',
    },
        {
        heading:'Coulombs to microcoulombs conversion',
        label1:'Enter charge in coulombs',
        label2:'Microcoulombs result:(μC)',
        number:'6',
        method:'',
    },
        {
        heading:'Coulombs to millicoulombs conversion',
        label1:'Enter charge in coulombs',
        label2:'Millicoulombs result:(mC)',
        number:'3',
        method:'',
    },
        {
        heading:'Coulombs to electron charge conversion',
        label1:'Enter charge in coulombs',
        label2:'Electron charge result:(e)',
        number:6.24150975e+18,
        method:'different',
    },
        {
        heading:'Coulombs to ampere-hours calculator',
        label1:'Enter charge in coulombs',
        label2:'Ampere-hours result:(Ah)',
        number:3600,
        method:'division',
    },
        {
        heading:'Picocoulombs to coulombs conversion',
        label1:'Enter charge in picocoulombs',
        label2:'Coulombs result:(C)',
        number: 10e+11 ,
        method:'division',
    },
        {
        heading:'Nanocoulombs to coulombs conversion',
        label1:'Enter charge in nanocoulombs',
        label2:'Coulombs result:(C)',
        number: 10e+8 ,
        method:'division',
    },
        {
        heading:'Microcoulombs to coulombs conversion',
        label1:'Enter charge in microcoulombs',
        label2:'Coulombs result:(C)',
        number: 1000000 ,
        method:'division',
    },
        {
        heading:'Millicoulombs to coulombs calculator',
        label1:'Enter charge in millicoulombs',
        label2:'Coulombs result:(C)',
        number: 1000 ,
        method:'division',
    },
        {
        heading:'Electron charge to coulombs conversion',
        label1:'Enter charge in electron charge',
        label2:'Coulombs result:(C)',
        number: 1.60217646e-19 ,
        method:'different',
    },
        {
        heading:'Ampere-hours to coulombs conversion',
        label1:'Enter charge in ampere-hours',
        label2:'Coulombs result:(C)',
        number: 3600 ,
        method:'different',
    },
        {
        heading:'Ampere-hours to milliampere-hours calculator',
        label1:'Enter charge in ampere-hours',
        label2:'Milliampere-hours result:mAh',
        number: 1000 ,
        method:'different',
    },
        {
        heading:'Milliampere-hours to ampere-hours calculator',
        label1:'Enter charge in milliampere-hours',
        label2:'Ampere-hours result:Ah',
        number: 1000 ,
        method:'division',
    },
]


   
    const [Content, setContent] = useState({
        heading:'',
        label1:'',
        label2:'',
        number:0,
        method:'',
    });
    const [Value1, setValue1] = useState('');
    const [Value2, setValue2] = useState(0);


 const setvalues=(obj)=>{
    setContent({...Content,
         heading:obj.heading,
         label1:obj.label1,
         label2:obj.label2,
         number:obj.number,
         method:obj.method,
    })

 }
 const calculate=()=>{
    if(Content.method =='different'){
        let result= Value1 * Content.number
     setValue2(result.toExponential(5))
    }else if(Content.method =='division'){
        let result= Value1 / Content.number
     setValue2(result.toExponential(5))
    }
    else{
        let result= Value1 * (Math.pow(10,parseInt(Content.number)))
     setValue2(result.toExponential(3))
    }
    
 }
    
 const simplify=()=>{
    let result=  Number(Value2).toLocaleString('fullwide', { useGrouping: false });
     setValue2(result)
 }
    
     // 5 inch




  return (
    <>
  <Head>
        <title>Charge Conversion Tools| [Website Name]</title>
        <meta name="description" content="Charge Conversion Tools" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>





    <div class="finance ">
        <div class="finance-calculator">
            <h2>{Content.heading}</h2>
            <div>
            <label>{Content.label1}</label>
                <input class="input" 
                value={Value1}
                 type="number" 
                onChange={(e) => { setValue1(e.target.value) }}
                  />
            </div>
           
            <button 
            onClick={calculate} 
            className='calculator-button' >Calculate</button>
              <div>
            <label>{Content.label2}</label>
                <input class="input"
                 value={Value2} 
                 type="number"  disabled/>
            </div>
            <button 
            onClick={simplify} 
            className='calculator-button' >simplify</button>
              
          
        </div>
            <div className='moretools'>
            <h2>More tools</h2>
           <div className="more_tools">
            {arr.map((obj)=>{
                return <>
                <button className='btn btn-primary' onClick={()=>{setvalues(obj)}}> <div className='link'>{obj.heading}</div><img src="/fast-forward.gif" alt="" /></button>
               
                </>
            })}
            </div>
            
            </div> 
        </div>
    
   
    
       
</>
  )
}

export default Chargeconversion