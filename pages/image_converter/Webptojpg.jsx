import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
// import Axios from "axios";
import Image from "next/image";
// import { useBeforeunload } from "react-beforeunload";
// import Spinner from "react-bootstrap/Spinner";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Head from "next/head";
// import FileDownload from "js-file-download";


const ProgressBar = ({ progress }) => (
  <div className="progress">
    <div className="progress-bar" role="progressbar" style={{ width: `${progress}%` }} aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100"></div>
  </div>
);


const Webptojpg = () => {


  const [loader, setLoader] = useState(false);
  // const [Exist, setExist] = useState('');
  const [uploadProgress, setUploadProgress] = useState(0);

  // ali,s code////////////////////////////////////////////////////////////////////////////
  const url = `http://localhost:5000`


  const [image, setImage] = useState(null);

  const handleFileUpload = (event) => {
    setLoader(true);
    // const interval = setInterval(() => {
    //   setPercentage(percentage => percentage + 1)
    // }, 500);
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('image', file);

    axios.post(`${url}/convert`, formData, {
      responseType: 'blob',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress: (progressEvent) => {
        const progress = parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total));
        setUploadProgress(progress);
      }
    })
      .then((response) => {
        console.log(response.data)
        setImage(URL.createObjectURL(response.data));
        setLoader(false);
        setUploadProgress(0)
      
        smoothScrollTo(400, 1000);
      })
      .catch((error) => {
        console.error(error);
        setLoader(false);
        setUploadProgress(0)
        
      });
  };

  const handleDownload = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = image;
    downloadLink.download = 'converted.webp';
    downloadLink.click();
  };


  //  smooth scroll function
  function smoothScrollTo(targetPosition, duration) {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const startTime = performance.now();
    const easing = function(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    };
  
    function step() {
      const currentTime = performance.now() - startTime;
      const progress = Math.min(currentTime / duration, 1);
      const scrollTop = Math.round(startPosition + distance * easing(progress));
      window.scrollTo(0, scrollTop);
      if (currentTime < duration) {
        window.requestAnimationFrame(step);
      }
    }
  
    window.requestAnimationFrame(step);
  }
 
  
  // ali,s code////////////////////////////////////////////////////////////////////////////



  return (
    <>
       <Head>
        <title>WEBP to JPG Converter Tool| [Website Name]</title>
        <meta name="description" content="WEBP to JPG Converter Tool" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
     
      <div className="pdf-page mt-5">
        <div className="wrapper">
          <div className="pdf-header">
            <h1>WEBP to JPG </h1>
            <p>Convert your Webp Image to jpg</p>
          </div>
          {loader ? (<div className="progressdiv">
         
            <ProgressBar progress={uploadProgress} />
            <p>{uploadProgress} Uploading...</p>  
                  </div>
                    
          ) : image ? (
            <>
              <div className="toolsimg">
             
                <Image width="400" height="300" src={image} alt="" className='img-fluid' /> 
                <button className='image-button' onClick={() => setImage(null)}>
                  <i className="fa-regular fa-circle-xmark"></i>
                </button>
              </div>

            </>
          ) : (<>

            <button className="btn-warnings">
              <input
                className="file-input"
                type="file"
                name="file"
                // value={file.avatar}
                accept='.webp'
                onChange={handleFileUpload}
              />
              <i className="fas fa-cloud-upload-alt"></i>
            </button>
            <div className="btndetail">
              <p>Click the above icon to browse your image</p>
            </div>
          </>
          )
          }
          {image && (<>
            <button className="formbold-btn w-full" type="button" onClick={handleDownload}>
              Download To jpg
            </button>
          </>
          )}
        </div>

      </div>
    </>
  );
};

export default Webptojpg;