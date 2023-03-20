import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import NavBar from "../components/NavBar";

export default function Home() {
  const data = [
    {
      Heading_Number: "01",
      Title: "Number Converters",
      Connect: "/Converter/NumberConverterpage",
      // p:"Binary converter helps to convert the values of binary to decimal ",

    },
    {
      Heading_Number: "02",
      Title: "Finance Converters",
      Connect: "/finance/Financecalculators",
      // p:"Text To Binary Converter convert the text into binary numbers.| binary translator and binary calculator.",


    },
    {
      Heading_Number: "02",
      Title: "Text tools Converters",
      Connect: "/texttools/Texttools",
      // p:"Text To Binary Converter convert the text into binary numbers.| binary translator and binary calculator.",

    },
    {
      Heading_Number: "02",
      Title: "Unit conversion",
      Connect: "/Unitconversion/Unitconvertion",
      // p:"Text To Binary Converter convert the text into binary numbers.| binary translator and binary calculator.",

    },
    {
      Heading_Number: "02",
      Title: "Image converter",
      Connect: "/image_converter/Image_coverters",
      // p:"Text To Binary Converter convert the text into binary numbers.| binary translator and binary calculator.",

    },
    {
      Heading_Number: "02",
      Title: "QR Code Generator",
      Connect: "/QRcode/QRcodegenrator",
      // p:"Text To Binary Converter convert the text into binary numbers.| binary translator and binary calculator.",

    },



  ];
  return (
    <>

      <Head>
      <title>Love pdf</title>
      <meta name="description" content="LovePDF releases all-in-one set of powerful yet easy-to-use PDF tools" />
      <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="row-heading">
        <div className="col-12 main-headings">

          <h1 className="pdf-heding p-5" >LovePDF releases all-in-one set of powerful yet easy-to-use PDF tools.</h1>
        </div>
      </div>

      <div className="card-div  mx-5 pt-5">
        <div className="card-container">

          {data.map((value, index) => {
            return (
              <>
                <Link href={value.Connect} className="card card-main" style={{ width: "17rem", height: "16rem" }} key={index}  >
                  <div className="border-gradient justify-content-center" style={{ width: "16rem", height: "204px" }}>
                    <div className="card-body">
                      <h4 className="card-title">{value.Title}</h4>

                      {/* <p className="card-text pt-3">
                           {value.p}
                          </p> */}

                      <div >
                        <div className="circle-div ">
                          <div className="circle-chiled">

                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </Link>

              </>
            );
          })}
        </div>

        <div class="astrodivider"><div class="astrodividermask"></div><span><i>&#10038;</i></span></div>

        <div className="app-section">
          <div className="app-pic">
            <Image className="img-fluid app-img " width={400} height={400} src='/apppic.webp' alt="loading..." />
          </div>
          <div className="app-content">
            <h2>Looking for another solution ?</h2>
            <h3>Love Pdf Mobile</h3>
            <p>LovePDF is introducing the new suite of mobile PDF tools. The app, which is available on both Android and iOS, provides users with a variety of features to make working with PDFs easier. LovePDF is committed to providing users with the best possible experience when working with PDFs and the new mobile app is just another step in that direction.   </p>
            <h4>Download Mobile App</h4>
            <Link href="">
              <Image className="mt-3 mb-2" width="200" height="70" src="/google_play.svg" alt="loading..." />
              <h5>Love Pdf Mobile</h5>
            </Link>
          </div>
        </div>

      </div>

    </>
  );
}
