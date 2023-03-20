
// import {Link} from 'react-router-dom'
import Image from "next/image";
import Head from "next/head";

const About = () => {
  return (<>
    <Head>
    <title>About Us | [Website Name]</title>
    <meta name="description" content="About Us" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </Head>

       
    



    <div className="about-page">

      <div className="about-section">
        <h1>About Us </h1>

      </div>

      <div className="About">
        <div className="actualAbout padMain">
          <div className="innerpadmain">
            <div className="row">
              <div

                className="col-xl-6 col-md-6 col-lg-6 col-sm-12 aboutLeftContentSection"
              >
                <p className="folwh">Our Story</p>
                <h2 className="flwh">
                  The ultimate PDF solution for students
                </h2>
                <p className="flwp ">
                  LovePDF is the cloud-based PDF solution for all your document needs! Our International based team of experts are devoted to making managing documents as effortless and stress free as possible. We understand how precious time can be, that's why we've created a 'free & easy' service which has been used by people around the globe.
                </p>
              </div>
              <div

                className="col-xl-6 col-md-6 col-lg-6 col-sm-12 videoSection"
              >
                <div className="innerVideoSection">
                  <div className="overlay">
                    <button
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                      className="videoPlayBtn"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <i className="fa-solid fa-play"></i>
                    </button>
                  </div>
                </div>

                {/* <!-- Modal --> */}
                <div
                  className="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div
                      className="modal-content modalbg"
                      style={{ height: "100vh", background: "none" }}
                    >
                      <div className="modal-header" style={{ borderBottom: "none" }}>
                        <button
                          type="button"
                          className="btn-close bg-white"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body modal-dialog modal-lg">
                        <iframe className="about-vedio" src="https://www.youtube.com/embed/a1f54KO3Aso" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Modal --> */}


              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <p className="flwp text-justify mt-5">
                  At LovePDF, our goal is to make managing documents as effortless and stress free as possible. With our word to pdf, pdf to word, and excel to pdf conversion services, you can quickly convert any document into the desired format in just a few clicks - without compromising on quality!

                  Thanks to our internationally based team of experts, you can rest assured that all documents are converted quickly and accurately. This means you can access them whenever you need them without wasting precious time or energy.

                  iLovePDF helps you with all your word to pdf, pdf to word and excel to pdf needs. In just a few clicks, our free & easy service enables you to quickly convert any document into the desired format. We understand how important it is for businesses and individuals alike to be able to access their documents in a timely manner without compromising on quality. That's why our team of experts work hard to ensure that all documents are converted quickly and accurately, so you can access them whenever you need them. We want to make managing documents as simple and stress-free as possible! Try LovePDF and see just how effortless document conversion can be.

                  Follow us and join the global community of satisfied document users! Our free & easy service is trusted by people around the globe, so why not see what we can do for you? Let us help you save precious time and energy converting word to pdf, pdf to word or excel to pdf!

                  Try LovePDF today for the ultimate document conversion experience. Let us show what our free & easy service can do for you!


                  <br />
                  <br />


                </p>
              </div>
            </div>
          </div>
          <div className="team">
            <div className="row-about">
              <div className="column">
                <div className="card-about">
                  <div className="author-info">
                    <Image className="width" width="200" height="70" src="/ceoImg.png" alt="" />

                    <div className="author-links">
                      <a className='links' href="https://www.facebook.com/edifycitofficials/"><i className="fa-brands fa-facebook"></i> </a>
                      <a className='links' href="https://twitter.com/EdifyCIT"><i className="fa-brands fa-twitter"></i></a>
                      <a className='thirdlinks' href="https://www.instagram.com/edifycitofficial/"><i className="fab fa-instagram"></i> </a>
                      <a className='thirdlinks' href="https://www.youtube.com/@edifycit"><i class="fab fa-youtube"></i> </a>
                    </div>
                  </div>
                  <div style={{ margin: '20px' }} className="CEO-Message">
                    <h2>Azeem Qasim</h2>
                    <p className="title">CEO &amp; Founder</p>
                    <p style={{ textAlign: "justify" }}>“Edify group of companies is one of the leading consultancies in Pakistan because it is actively designing solutions for the world’s most ambitious change-makers who will define the future.”</p>


                    <a href="info@edify.pk">edifytech4u@gmail.com</a>

                  </div>
                </div>
              </div>




            </div>
          </div>
        </div>




        {/*====================== VideoModel=========================== */}
        <div
          className="modal fade"
          id="exampleModalCenter"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-body">
                <iframe
                  width="100%"
                  height="500px"
                  src="https://www.youtube.com/embed/dPm7vve6Q-0"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
