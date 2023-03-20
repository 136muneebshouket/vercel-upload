import React from "react";
import { useState } from "react";
import axios from "axios";
import Axios from "axios";
import { useBeforeunload } from "react-beforeunload";
// import Spinner from "react-bootstrap/Spinner";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import FileDownload from "js-file-download";



const Ppttopdf = () => {
  const [file, setFile] = useState({
    avatar: "",
  });
  // const inputhandler = (e) =>{
  //   setInput({...input,[e.target.name]:e.target.value})
  // };
  const [loader, setLoader] = useState(false);
  const [Exist, setExist] = useState('');
  const [percentage, setPercentage] = useState(0);

  const imageHandler = (e) => {
    // console.log(e.target.files[0]);

    let selectedfile = e.target.files[0];
   
    if (selectedfile) {
      setExist(selectedfile.name)
    }

    setFile(e.target.files[0]);


  };

  useBeforeunload(() => {
    if (loader == true) {
      del();
    }
    setPercentage(0);
    alert("are u sure");
    del();
  });

  const URL = "http://localhost:5000";

  //func to delete file
  const del = async () => {
    await axios.get(`${URL}/delFile`).then((res) => {
      console.log(res.data);
    });
  };

  const recievedata = async () => {
    await Axios({
      url: `${URL}/getfile`,
      method: "GET",
      responseType: "blob",
    })
      .then((res) => {
        FileDownload(res.data, "downloaded.pdf");
        setTimeout(() => {
          del();
        }, 5000);
        setExist('')
      })
      .catch((err) => {
        console.log(err);
        setExist('')
      });
  };

  const sendData = async (e) => {
    e.preventDefault();
    if (!Exist) {
      alert('select file first ')
     }
    setLoader(true);
    const interval = setInterval(() => {
      setPercentage(percentage => percentage + 1)
    }, 500);
    try {
      const formData = new FormData();
      formData.append("avatar", file);

      await axios.post(`http://localhost:5000/upload`, formData).then((res) => {
        if (res.data.status === 200) {
          console.log(res.data.data);
          recievedata();
        }

        if (res.data.status === 500) {
          console.log(res.data.data);
        }
        setLoader(false);
        setFile({ avatar: "" });
        clearInterval(interval);
        setPercentage(0)
        //  setTimeout(()=>{
        //   del();
        // },3000)
      });
    } catch (e) {
      console.log(e);
      setLoader(false);
      setFile({ avatar: "" });
      clearInterval(interval);
      setPercentage(0)
      // alert(e);
    }
  };

  return (
    <>
      <div className="pdf-page mt-5">
        <div className="wrapper">
          <div className="pdf-header">
            <h1 > Powerpoint to Pdf</h1>
            <style jsx>{`
      
      h1 {
          color: #437fee;
        }
      `}</style>
          </div>
         

            {loader ? (
              // <Spinner animation="border" role="status">
              //   <span className="visually-hidden">Loading...</span>
              // </Spinner>
              <div className="progress-container">
                <CircularProgressbar value={percentage} text={`${percentage}%`} />
              </div>
            ) :
            <form action="#" onSubmit={sendData} method="POST">
            <button className="btn-warnings">
              <input
                className="file-input"
                type="file"
                name="avatar"
                value={file.avatar}
                accept=".pptx"
                onChange={imageHandler}
              />
              <i className="fas fa-cloud-upload-alt"></i>


            </button>
             {Exist ? <p>{Exist} </p> : <p>Browse File to Upload</p>}
             <div className="submit-div">
               {loader ? <p>loading...</p> : <button type="submit" className="btn-submit btn-primary mx-5">
                 Submit
               </button>}
             </div>
           </form>
            }
            


        </div>
        {/* <div>
          {loader ? (
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            ) : (
              <button >getpdf</button>
            )}
          </div> */}
      </div>
    </>
  );
};

export default Ppttopdf;