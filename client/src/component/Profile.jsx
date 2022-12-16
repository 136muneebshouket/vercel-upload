import React from 'react'
import { useBeforeunload } from 'react-beforeunload';
import { useState } from 'react'
import axios from 'axios';
import Axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import FileDownload from 'js-file-download';


const Profile = () => {


  const [file, setFile] = useState({
    avatar: "",
  })
  // const inputhandler = (e) =>{
  //   setInput({...input,[e.target.name]:e.target.value})
  // };
  const [loader, setLoader] = useState(false);


  const imageHandler = (e) => {
    // console.log(e.target.files[0]);
    setFile(e.target.files[0])
  };



  useBeforeunload(() => {
    if (loader == true) {
      del();
    }
   alert('are u sure')
    del();

  });
 

  const URL="http://localhost:5000";


  //func to delete file
  const del = async () => {
    await axios.get(`${URL}/delFile`).then((res) => {
      console.log(res.data)

    });

  }




  const recievedata = async () => {
    await Axios({
      url: `${URL}/getfile`,
      method: 'GET',
      responseType: 'blob'
    }).then((res) => {

      FileDownload(res.data, "downloaded.pdf")
      setTimeout(() => {
        del();
      }, 3000)
    }).catch((err) => {
      console.log(err)
    })
  }

  const sendData = async (e) => {
    e.preventDefault()
    setLoader(true);
    try {
      const formData = new FormData();
      formData.append("avatar", file)

      await axios.post(`${URL}/upload`, formData).then((res) => {
        if (res.data.status === 200) {
          console.log(res.data.data)
          recievedata();  
        }
       
        if (res.data.status === 500) {
          console.log(res.data.data)
        }
        setLoader(false);
        //  setTimeout(()=>{
        //   del();
        // },3000)
      });


    } catch (e) {
      console.log(e);
      // alert(e);
    }

  }
  return (
    <>
      <div className="container">
        <h1 className='profilehead'>Create Your Profile</h1>
        <p className="profilepara">
          <i className="fas fa-user"></i> Let's get some information to make your
          profile stand out
        </p>
        <div>
          <form onSubmit={sendData} method="POST" >
            <p className='exampleform'>=*required field</p>
            <div className="form-control">
              <label className="form-label" for="customFile">Choose Your file</label>
              <input type="file" name='avatar' 
                 accept='.docx, .pptx, .xlsx, .png, .jpg, .txt' 
                onChange={imageHandler} className="form-control" />
              <button>submit</button>
            </div>

          </form>

        </div>
        {loader ? <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner> :

          <button >getpdf
          </button>
        }

      </div>
    </>
  )
}

export default Profile