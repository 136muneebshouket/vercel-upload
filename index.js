
require('dotenv').config();
const express = require('express');
const path = require('path');
// const mongoose = require("mongoose")
const cors = require('cors')
const multer = require('multer')
// const libre = require('libreoffice-convert');
const async = require('async');

var fs = require('fs').promises;
const toPdf = require('mso-pdf');
const PDFGenerator = require('pdfkit');
const imagesToPdf = require("images-to-pdf");
// const rimraf=require('rimraf')
// var findRemoveSync = require('find-remove');
const app = express();



app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use(cors())





const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'files')
  },
  filename: function (req, file, cb) {
    // var ext = path.extname(file.originalname)
    // if (ext !== ".docx" && ext !== ".txt" && ext !== ".pptx" && ext !== ".xls") {
    //   return cb('this file forma is not supported')
    // }
    // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, Math.round(Math.random() * 1E9) + path.extname(file.originalname))
    // cb(null, true)

  }
})


var upload = multer({ storage: storage })

// libre.convertAsync = require('util').promisify(libre.convert);


var pdf;
var filepath;
var loading = false;
// var deletepdf = false;
var stop = false;

app.post("/upload", upload.single('avatar'), async (req, res) => {



  if (req.file) {

    filepath = req.file.filename;
    loading = true;
    //check filetype
   if(req.file.filename.includes('.txt')){
    
    var fs = require('fs');

    fs.readFile(`./files/${req.file.filename}`, 'utf-8', async(err, data) => {
      if (err) { console.log(err)
        res.json({status:500,data:'there is some error'});
      }else{
        let theOutput = new PDFGenerator
           // pipe to a writable stream which would save the result into the same directory
          theOutput.pipe(fs.createWriteStream(`./pdf/${req.file.filename}.pdf`))
    
          // write out file
          if(stop == false){

            let p1 = new Promise((resolve, reject) => {
               theOutput.text(data);
                theOutput.end();
                resolve(true);
            });
            
             let pdf_done= await p1;

                if(pdf_done){        
                   pdf = req.file.filename;
                  loading = false;
                  
                //   res.json({status:200,data:'file is ready'});
                  console.log('file is ready');
                  res.download(`./pdf/${pdf}.pdf`);
                  stop = false;
                }else{
                  loading = false;
                  console.log('tehere is some error');
                   res.json({status:500,data:'there is some error'});
                   stop = false;
                }
               
         }
         else {
             stop = false;
             loading = false;
             res.json({status:500,data:'please choosefile again'});
        
             return;
         }
      }
     
          

     })

   }else if(req.file.filename.includes('.png') || req.file.filename.includes('.jpg')){
    // let source = path.join(__dirname, req.file.path);
    // let destination = path.join(__dirname, `./pdfs/${req.file.filename}.pdf`);
     if(stop == false){

      let img_done = await imagesToPdf([`./files/${req.file.filename}`], `./pdf/${req.file.filename}.pdf`)
      if(img_done){
        pdf = req.file.filename;
        loading = false;
        console.log('file is ready');
        res.download(`./pdf/${pdf}.pdf`);
        // res.json({status:200,data:'file is ready'});
        stop = false;
      }else{
        loading = false;
        console.log('there is some error');
         res.json({status:500,data:'there is some error'});
         stop = false;
      }
     
    }else{
      stop = false;
      loading = false;
       res.json({status:500,data:'please choosefile again'});
  
       return;
    }
     

   }else{
      let source = path.join(__dirname, req.file.path);
      // console.log(req.file.filename)
    
      //  var outputpath = path.join(__dirname, `/files/${req.file.filename}${ext}`);
      let destination = path.join(__dirname, `./pdf/${req.file.filename}.pdf`);
         
       if (stop == false) {

        let p2 = new Promise((resolve, reject) => {
          toPdf.convert(source,destination, function (errors){
            if(errors) {
              reject(errors)
            }
            resolve(true)
             })   
             
          
          });
             let done= await p2;
             if(done){
              p2.then(()=>{
                pdf = req.file.filename
                loading = false;
                console.log('file is ready');
                res.download(destination);
                // res.json({status:200,data:'file is ready'});
                stop = false;
              }).catch(()=>{
                stop = false;
                loading = false;
                console.log('there is some error');
                res.json({status:500,data:'there is some error'});
              })
               
             }
               
             
          } else {
                  stop = false;
              loading = false;
              res.json({status:500,data:'please choosefile again'});
     
              return;
          }

     }

    
  
    
  }
})


//  const func=()=>{
//   findRemoveSync(__dirname + '/files', { age: { seconds: 10 },
//       extensions: ['.docx', '.pptx','.txt','.xlsx','png','.jpg','.pdf']})
  
//  }

// func();


// app.get("/delFile", (req, resp) => {

//   try {
//      if(loading == false){
      
//     checkFileExists(filepath)
//     function checkFileExists(file) {
//       return fs.access(`./files/${file}`, fs.constants.F_OK)
//         .then(() => {
//           // console.log('exist')
//           fs.unlink(`./files/${file}`)
//         })
//         .catch(() => console.log('notexist'))
//     }


//     checkpdfExists(pdf)
//     function checkpdfExists(file) {
//       return fs.access(`./files/${file}.pdf`, fs.constants.F_OK)
//         .then(() => {
//           // console.log('exist')
//           fs.unlink(`./files/${file}.pdf`)
//         })
//         .catch(() =>
//          console.log('notexist')
//          )
//     }

//   }

//     if (loading == true) {
//       stop = true;
//     }
    
//    resp.json('file deleted')


   

//   } catch (error) {
//     resp.json(error)
//   }

// })


//download file
// app.get('/getfile', async (req, res) => {
//   try {
//     checkpdfExists(pdf)
//     function checkpdfExists(file) {
//       return fs.access(`./files/${file}.pdf`, fs.constants.F_OK)
//         .then(() => {
//           //  console.log('exist')
//           res.download(`./files/${file}.pdf`);
//            //deleting files 
      
//         })
//         .catch(() => res.json('file deleted again choose file'))
//     }
   
   
//   } catch (error) {
//     res.json(error)
//   }
// })


const staticpath =path.join(__dirname+'/website/converter.html')


app.get("/",(req,res)=>{
    res.sendFile(staticpath);
   })
   
//   app.use(express.static(path.join(__dirname, "./client/build")));
  
//   app.get("*", function (_, res) {
//     res.sendFile(
//       path.join(__dirname, "./client/build/index.html"),
//       function (err) {
//         if (err) {
//           res.status(500).send(err);
//         }
//       }
//     );
//   });

// const DB = process.env.DATABASE;
// mongoose.connect(DB,{ useUnifiedTopology: true ,  useNewUrlParser: true})


const PORT = 5000

const port = PORT ;
app.listen(port, () => {
  console.log(`server is running perfectly on port ${port}`)
})










  // if (req.file) {

  //   let inputPath = path.join(__dirname,req.file.path);
  //   const file = await fs.readFile(inputPath);
  //  let outputfilepath = Date.now() + 'output.pdf'
  //   await libre.convertAsync(file, '.pdf', undefined, (err, done) => {
  //     if (err) {
  //       fs.unlink(req.file.path)
  //       fs.unlink(outputfilepath)
  //       res.send("some error occured")
  //     }

  //     // console.log(outputfilepath)
  //     fs.writeFile(outputfilepath, done);

  //     res.download(outputfilepath, (err) => {
  //       if (err) {
  //         fs.unlink(req.file.path)
  //         fs.unlink(outputfilepath)
  //         res.send("some error occured")
  //       }
  //       fs.unlink(req.file.path)
  //       fs.unlink(outputfilepath)
  //     })
  //   });

  // } 






// // const libre = require('libreoffice-convert');
// // libre.convertAsync = require('util').promisify(libre.convert);

// // async function main() {
// //   const ext = '.pdf'
// //   const inputPath = path.join(__dirname, '61++UoG4k8L._UL1241_.jpg');
// //   console.log(inputPath)

// //   const outputPath = path.join(__dirname, `example${ext}`);

// //   // Read file
// //   const docxBuf = await fs.readFile(inputPath);

// //   // Convert it to pdf format with undefined filter (see Libreoffice docs about filter)
// //   let pdfBuf = await libre.convertAsync(docxBuf, ext, undefined);
// //   console.log(pdfBuf)

// //   // Here in done you have pdf file which you can save or transfer in another stream
// //   await fs.writeFile(outputPath, pdfBuf);
// // }

// // main().catch(function (err) {
// //   console.log(`Error converting file: ${err}`);
// // });




// // var tmp = require('temporary')
// // var fs = require('fs')
// // var path = require('path');
// // var exec = require('child_process').exec;

// // module.exports = (buffer) => {

// //   return new Promise(function(resolve, reject) {

// //     var file = new tmp.File()
// //     var outdir = new tmp.Dir()
// //     file.writeFile(buffer, (err) => {

// //       if(err) reject(err)

// //       var cmd = 'soffice --headless --convert-to pdf ' + file.path + ' --outdir ' + outdir.path;

// //       exec(cmd, function(error, stdout, stderr) {
// //         if(error) {
// //           reject(error)
// //         } else {
// // 	  fs.readFile(path.join(outdir.path, path.basename(file.path, path.extname(path.basename(file.path)))+".pdf"), (err, buffer) => {
// // 	    if(err) reject(err)
// // 	    resolve(buffer)
// // 	  })
// //         }
// //       });
// //     })
// //   });

// // }

// // var docxconverter=require('docx-pdf');

// // docxconverter("test.doc","output.pdf",(err,result)=>{
// //  if(err){
// //     console.log(err);
// //  }
// //  console.log(result)


// // })



   // if (deletefile == true) {
    //   // console.log(filepath)
    //   fs.unlink(`./files/${filepath}`)
    //   deletefile = false;
    // }

 // if (deletepdf == true) {
    //   // console.log(pdf);
    //   fs.unlink(`./${pdf}.pdf`)
    //   deletepdf = false;
    //   resp.send("File Deleted")
    // }

// 

// let file = './files/Job Letter.docx'

// try {
//   if (fs.existsSync(paath)) {
//     console.log('The file exists.')
//   } else {
//     console.log('The file does not exist.')
//   }
// } catch (err) {
//   console.error(err)
// }
// function checkFileExists(file) {
//   return fs.access(file, fs.constants.F_OK)
//     .then(() => {
//       console.log('exist')
//       fs.unlink(file)
//     })
//     .catch(() => console.log('notexist'))
// }
// checkFileExists(file)
