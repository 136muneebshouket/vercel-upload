import Head from 'next/head';
import Image from 'next/image'
import React, { useState } from 'react';



const ProgressBar = ({ progress }) => (
  <div className="progress">
    <div className="progress-bar" role="progressbar" style={{ width: `${progress}%` }} aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100"></div>
  </div>
);



const QRcodegenrator = () => {
  const [text, setText] = useState('');
  const [width, setWidth] = useState('');
  const [margin, setMargin] = useState('');
  const [qrCode, setQrCode] = useState('');
  const [loader, setLoader] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(50);

  const url = `http://localhost:5000`


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoader(true)
      const response = await fetch(`${url}/qrcode`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
       
        body: JSON.stringify({ text, width, margin }),

        onUploadProgress: (progressEvent) => {
          const progress = parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total));
          setUploadProgress(progress);
        },
      });
     
      const data = await response.json();
      setQrCode(data.qrcode);
      setLoader(false)
      setUploadProgress(0)
    } catch (error) {
      console.error(error);
      setLoader(false)
      setUploadProgress(0)
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = qrCode;
    link.download = 'qrcode.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <Head>
        <title> QR Code Generator - Create Custom QR Codes | [Website Name]</title>
        <meta name="description" content="Easily generate custom QR codes for your website, business, or personal use with our free QR Code Generator. Simply enter your information, customize the design, and download your QR code in high-resolution PNG format" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="qrcodemain">
        <div>
          <h1>Qr Code Genrator</h1>
          <h4>Please write here Below</h4>
        </div>

        <div className="qr-code-grid">
          <div className="qrform">
            <form onSubmit={handleSubmit}>
              <label htmlFor="Url">
                Enter Your text
              </label>

              <input type="text" id='Url' placeholder='Enter Your Url' value={text} onChange={(e) => setText(e.target.value)} />

              <label htmlFor="Width">
                Enter the Width You Want
              </label>

              <input type="text" id='Width' placeholder='Enter Your Width' value={width} onChange={(e) => setWidth(e.target.value)} />
              <label htmlFor="Margin">
                Enter the Margin You Want
              </label>

              <input type="text" id='Margin' placeholder='Enter Your Margin' value={margin} onChange={(e) => setMargin(e.target.value)} />
              <button type="submit" className='qrcode-submite'>Generate QR Code</button>
            </form>
          </div>
          {qrCode ? (<>
            <div>

              <img src={qrCode} alt="QR Code" className='img-fluid' />
              <br />
              <button className='qrcode-submite' onClick={handleDownload}>Download</button>
            </div>
          </>) : loader ? (<div>

            <ProgressBar progress={uploadProgress} />
            <p>{uploadProgress}% Compressed</p>
          </div>) : (<>


            <div>

              <img src={qrCode} alt="QR Code" className='img-fluid' />
              <br />
              <button className='qrcode-submite' onClick={handleDownload}>Download</button>
            </div>
          </>
          )}
        </div>
      </div>
    </>
  )
}

export default QRcodegenrator