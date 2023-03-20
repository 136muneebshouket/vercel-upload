import React from "react";
import { useState } from "react";
import axios from "axios";
import Axios from "axios";
import { useBeforeunload } from "react-beforeunload";
// import Spinner from "react-bootstrap/Spinner";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import FileDownload from "js-file-download";
const Wordtopdf = () => {
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

      await axios.post(`${URL}/upload`, formData).then((res) => {
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
            <h1>Word to Pdf</h1>
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
                accept=".docx"
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
        
      </div>
     <div className="wordtopdfcontent p-5 container">
       <h2>Converting a word document to pdf </h2>
       <p>Easiest way of converting a word document to pdf. Firstly you should select the document you need to convert. Now you have to do nothing. Our converter word to pdf will copy your word text and convert to pdf automatically.  By following these steps you can easily change your document.</p>
       <ul>
        <li>Open your file in word </li>
        <li>now click the save as button.</li>
        <li>your next step is to save as type</li>
        <li>Select pdf</li>
        
       </ul>
       <p>Now, by opening the pdf file with adobe reader you can check your file.
By these easy steps you can see your word document into a pdf.
</p>
<h3>Searching for a word in a pdf.</h3>
<p>When you opened a pdf in an acrobat reader, instead of browser. It is possible that search window pane may or may not display. So you have to use the “Ctrl+f” for display. It is very effective key for searching a file that converted to pdf.</p>
<h3>Online resources of converting word to pdf</h3>
<p>There are many resources of converting word file to pdf. But our convert word to pdf is totally free and manageable. It is very easy to handle. U can just open your file that you want to convert; our convert word to pdf tool will convert your file. There are seven best ways to convert file <br />
Adobe's Online PDF Converter is mostly used to convert word to pdf. <br />
More are, Nitro online Word to PDF Converter. <br />
WPS online PDF Converter. <br />
Wondershare PDFelement. <br />
WPS Office. <br />
Soda PDF software for Windows. <br />
Smallpdf desktop and mobile. <br />
</p>
<h3>Use of pdf to ms word converter. But why? The question raises.</h3>
<p>It is very necessary to convert pdf in a format, firstly convert in Microsoft word document because pdf does not allow the document to be editing. If we convert a pdf in a format that compatible with Microsoft word, then word allows us to changing and formatting to our document.</p>
<h3>word to pdf converter is totally free.</h3>
<p>Our convert word to pdf tool is totally free and easy to use. Your converted document word to pdf is same as the original pdf file. There is no size limit and no watermarks. There is no need of email. You can use our word to pdf converter free without email.</p>
<h3>Easily you can use word to pdf converter offline.</h3>
<p>Yes you can, by using easy simple steps you can convert offline without any problem. </p>
<h3>Introduction my playstore app</h3>
<p>Play store app is already installed on mobile for supporting Google play store and can be downloaded on some chrome books. It is the android market where you can get android applications and other digital data like games, movies, media and whatever you want. Love pdf app is one of the best app you can use on your mobile freely.</p>
<h3>Insert a pdf into a word.</h3>
<p>You can easily convert your word to pdf file in our love pdf app. I will tell you some easy steps, by follow these you can achieve your desire file
First of all open the pdf file that you have to converted
It is very easy for you to convert to pdf to word by using online editor.
</p>
     </div>
    </>
  );
};

export default Wordtopdf;