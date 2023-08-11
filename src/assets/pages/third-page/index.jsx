import './master.css'
import video2 from '../../img/secvideo.webm'
export default function Thirdp(){
    return(
        <div className="tp col-12 d-flex justify-content-center align-items-center">
            <section className='col-12 d-flex justify-content-center align-items-center flex-wrap'>
                <video className='col-12' muted autoPlay loop>
                    <source src={video2} />
                </video>
                <div className='col-3'>
                    <h2>women's bag</h2>
                    <a href="">for her</a>

                </div>

            </section>
        </div>
    )
}