
import Footer from './Footer'
import NavBar from './NavBar'

const Layout = ({children}) => {


  return (
    <>
    <NavBar></NavBar>
    {children}

    <Footer></Footer>
    </>
  )
}

export default Layout


// export async function getServerSideProps(context) {
//   return {
//     props: {some:'muneeb'}, // will be passed to the page component as props
//   }
// }