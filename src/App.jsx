import Header from './assets/pages/header/index.jsx'
import FirstPage from './assets/pages/first-page/index.jsx'
import SecondPage from './assets/pages/second-page/index.jsx'
import ThirdPage from './assets/pages/third-page/index.jsx'
import FourthPage from './assets/pages/forth-page/index.jsx'
import Footer from './assets/pages/footer/index.jsx'


export default function Main(){
  return(
    <main>
      <Header />
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <Footer />
    </main>
  )
}