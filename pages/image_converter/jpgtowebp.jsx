import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
// import Axios from "axios";
import Image from "next/image";
import { useBeforeunload } from "react-beforeunload";
// import Spinner from "react-bootstrap/Spinner";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Head from "next/head";
// import FileDownload from "js-file-download";


const jpgtowebp = () => {
  // const [file, setFile] = useState({
  //   avatar: "",
  // });

  const [loader, setLoader] = useState(false);
  // const [Exist, setExist] = useState('');
  const [percentage, setPercentage] = useState(0);

  // const imageHandler = (e) => {
  //   // console.log(e.target.files[0]);

  //   let selectedfile = e.target.files[0];
  //   if (selectedfile) {
  //     setExist(selectedfile.name)
  //   }

  //   setFile(e.target.files[0]);


  // };

  // useBeforeunload(() => {
  //   if (loader == true) {
  //     del();
  //   }
  //   setPercentage(0);
  //   alert("are u sure");
  //   del();
  // });

  // const URL = "http://localhost:5000";

  // //func to delete file
  // const del = async () => {
  //   await axios.get(`${URL}/delFile`).then((res) => {
  //     console.log(res.data);
  //   });
  // };

  // const recievedata = async () => {
  //   await Axios({
  //     url: `${URL}/getfile`,
  //     method: "GET",
  //     responseType: "blob",
  //   })
  //     .then((res) => {
  //       FileDownload(res.data, "downloaded.pdf");
  //       setTimeout(() => {
  //         del();
  //       }, 5000);
  //       setExist('')
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       setExist('')
  //     });
  // };

  // const sendData = async (e) => {
  //   e.preventDefault();
  //   if (!Exist) {
  //     alert('select file first ')
  //    }
  //   setLoader(true);
  //   const interval = setInterval(() => {
  //     setPercentage(percentage => percentage + 1)
  //   }, 500);
  //   try {
  //     const formData = new FormData();
  //     formData.append("avatar", file);

  //     await axios.post(`http://localhost:5000/upload`, formData).then((res) => {
  //       if (res.data.status === 200) {
  //         console.log(res.data.data);
  //         recievedata();
  //       }

  //       if (res.data.status === 500) {
  //         console.log(res.data.data);
  //       }
  //       setLoader(false);
  //       setFile({ avatar: "" });
  //       clearInterval(interval);
  //       setPercentage(0)
  //       //  setTimeout(()=>{
  //       //   del();
  //       // },3000)
  //     });
  //   } catch (e) {
  //     console.log(e);
  //     setLoader(false);
  //     setFile({ avatar: "" });
  //     clearInterval(interval);
  //     setPercentage(0)
  //     // alert(e);
  //   }
  // };








  // ali,s code////////////////////////////////////////////////////////////////////////////





  // ali,s code////////////////////////////////////////////////////////////////////////////
  const url = `http://localhost:5000`


  const [image, setImage] = useState(null);

  const handleFileUpload = (event) => {
    setLoader(true);
    const interval = setInterval(() => {
      setPercentage(percentage => percentage + 1)
    }, 500);
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('image', file);

    axios.post(`${url}/convertwebp`, formData, {
      responseType: 'blob',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((response) => {
        console.log(response.data)
        setImage(URL.createObjectURL(response.data));
        setLoader(false);
        setPercentage(0)
        clearInterval(interval);
        smoothScrollTo(400, 1000);
      })
      .catch((error) => {
        console.error(error);
        setLoader(false);
        setPercentage(0)
        clearInterval(interval);
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
        <title>Jpeg to Webp Converter Tool| [Website Name]</title>
        <meta name="description" content="Jpeg to Webp Converter Tool" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        </Head>


      <div className="pdf-page mt-5">
        <div className="wrapper">
          <div className="pdf-header">
            <h1>JPG to WEBP</h1>
           
              <p>Convert your Jpg Image to webp</p>
            
          </div>
          {loader ? (

            <div className="progress-container">
              <CircularProgressbar value={percentage} text={`${percentage}%`} />
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
                accept='.jpg'
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
              Download To Webp
            </button>
          </>
          )}
        </div>

      </div>
    </>
  );
};

export default jpgtowebp;