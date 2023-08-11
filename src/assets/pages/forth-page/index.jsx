import './master.css'
import image from '../../img/thirdpic.webp'

export default function Fourthp(){
    return(
        <div className="fop col-12 d-flex justify-content-center align-items-center flex-wrap">
            <figure className='col-12 '>
                <img src={image} className='col-12' />
            </figure>
            <section className='col-4 d-flex flex-wrap'>
                <h2>Prada Eternal Gold</h2>
                <p>Fine Jewelry Collection</p>
                <a href="">for her</a>
                <a href="">for him</a>

            </section>

        </div>
    )
}