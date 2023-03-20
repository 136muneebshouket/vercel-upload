import React,{useState} from 'react'
import jsPDF from "jspdf";


const ImagetoPDF = () => {
    
     const [images, setImages] = useState([]);


   const handlechange=(e)=>{
    const files = e.target.files;
    setImages(files)
    convertImagesToPdf(images)
   }
   console.log(images)




  



    function convertImagesToPdf(imageFiles) {
        const doc = new jsPDF();
        let y = 10;
        // doc.deletePage(1);
        imageFiles.forEach((file, index) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => {
            doc.addImage(reader.result, 'JPEG', 10, y, 180, 150);
            y += 150;
            if (index !== imageFiles.length - 1) {
              doc.addPage();
            }
          };
        });
        const pdfURL = doc.output("bloburl");
           window.open(pdfURL, "_blank");
      }

    
  return (
    <>
   <div className="imagestopdf">
      <h1>Convert images to PDFs</h1>

      {/* Overview of uploaded images */}
      {/* <div className="images-container">
        {uploadedImages.length > 0 ? (
          uploadedImages.map((image) => (
            <img key={image.src} src={image.src} className="uploaded-image" />
          ))
        ) : (
          <p>Upload some images...</p>
        )}
      </div> */}

      {/* Buttons for uploading images and generating a PDF */}
      <div className="buttons-container">
        {/* Uploads images */}
        <label htmlFor="file-input">
          <span className="button">Upload images</span>
          <input
            id="file-input"
            type="file"
            accept="image/*"
            onChange={handlechange }
            // Native file input is hidden only for styling purposes
            // style={{ display: "none" }}
            multiple
          />
        </label>

        {/* Generates PDF */}
        <button
        //   onClick={handleGeneratePdfFromImages}
          className="button"
        //   disabled={uploadedImages.length === 0}
        >
          Generate PDF
        </button>
      </div>
      </div> 
    </>
  )
}

export default ImagetoPDF
