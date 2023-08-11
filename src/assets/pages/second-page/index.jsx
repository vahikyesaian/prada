import './master.css'
import image from '../../img/secondp(girl).webp'
import image2 from '../../img/secondp(boy).jfif'
export default function Secondp(){
    return(
        <div className="sp col-12 d-flex ">
            <section className='col-6 d-flex justify-content-center align-items-center flex-wrap'>
                <figure className='col-11 m-0 '>
                    <img src={image}  />
                </figure>
                <div className='col-5'>
                    <h2>holiday collection women</h2>
                </div>
                <a href="">discover</a>
            </section>
            <section className='col-6 d-flex justify-content-center align-items-center flex-wrap'>
                <figure className='col-11 m-0'>
                    <img src={image2}  />
                </figure>
                <div className='col-5'>
                    <h2>holiday collection men</h2>
                </div>
                <a href="">discover</a>
            </section>

        </div>
    )
}