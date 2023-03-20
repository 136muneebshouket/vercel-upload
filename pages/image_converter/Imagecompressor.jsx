import React, { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Head from 'next/head';


const ProgressBar = ({ progress }) => (
  <div className="progress">
    <div className="progress-bar" role="progressbar" style={{ width: `${progress}%` }} aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100"></div>
  </div>
);



const Imagecompressor = () => {
  const [file, setFile] = useState(null);
  const [compressedImage, setCompressedImage] = useState(null);
  const [exist, setExist] = useState('')
  const [loader, setLoader] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0);
  const handleFileChange = (event) => {
    let selectedfile = event.target.files[0]
    setFile(event.target.files[0]);
    setExist(selectedfile?.name)
  };
  const deletfile = () => {
    setExist('')
    setFile(null)
    setCompressedImage(null)
  }
 
  const url = `http://localhost:5000`

  const handleCompress = async () => {

    try {
      const formData = new FormData();
      formData.append('image', file);
      setLoader(true)

      const response = await axios.post(`${url}/compress`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        responseType: 'arraybuffer',
        onUploadProgress: (progressEvent) => {
          const progress = parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total));
          setUploadProgress(progress);
        },

      });

      setCompressedImage(new Blob([response.data], { type: file.type }));
      setLoader(false)

      setUploadProgress(0)
    } catch (error) {
      console.error(error);
      setLoader(false)
      setUploadProgress(0)

    }

  };


  return (
    <>
      <Head>
        <title>Image Compressor Tool| [Website Name]</title>
        <meta name="description" content="Image Compressor Tool" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        </Head>


      <div className="pdf-page mt-5">

        <div className="wrapper">



          <div className="tools-headings mb-6 pt-4">
            <h1>Image Compressor</h1>
            <label className="formbold-form-label formbold-form-label-2">
              Upload File
            </label>

            <div className="formbold-mb-5 formbold-file-input">
              {compressedImage ? (
                <>
                  <div className='toolsimg'>
                    <p>Your Upload Image Size is {parseInt((file?.size) / 1000)} .Kb </p>
                    <p>Your Download Image Size is {parseInt((compressedImage?.size) / 1000)} .Kb</p>
                    <Image width="400" height="300" src={URL.createObjectURL(compressedImage)} alt="" className='img-fluid' />
                    <button className='image-button' onClick={deletfile}>
                      <i className="fa-regular fa-circle-xmark"></i>
                    </button>
                  </div>
                </>
              ) :loader ? (<>
                <div className='progress-div'>
                <ProgressBar progress={uploadProgress} />
                <p>{uploadProgress}% Compressed</p>
                </div>
              </>) :
               (<>
                <input type="file" name="file" onChange={handleFileChange} id="file"
                style={{display:'none'}} />
                <label htmlFor="file">
                  <div className='btn-warnings'>
                    {file ? (<>
                      <button className='image-button' onClick={deletfile}>
                      <i className="fa-regular fa-circle-xmark"></i>
                    </button>
                      <p className="formbold-drop-file"> {exist} </p>
                    </>) :  (<>
                      <span className="formbold-drop-file"> Drop files here </span>
                      <span className="formbold-or"> Or </span>
                      <span className="formbold-browse"><i className="fa-solid fa-upload"></i></span>
                    </>)}
                  </div>
                </label>
              </>)}

            </div>
          </div>
          <div>
            <button className="formbold-btn w-full" onClick={handleCompress}>Compress</button>
            {compressedImage && (
              <div className='download-button'>
                <a className="formbold-btns formbold-btn w-fulls" download="compressed.png" href={URL.createObjectURL(compressedImage)}>
                Download
              </a>
              </div>
               
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Imagecompressor