import './master.css'
import video from '../../img/pvideo.webm'
export default function Firstp(){
    return(
        <div className='col -12 fp d-flex justify-content-center align-items-center '>
            <section className='col-12 d-flex justify-content-center align-items-center flex-wrap'>
                <video className="col-12"  muted autoPlay loop>
                <source src={video}/>
                </video>
                <div className="link col-4 d-flex justify-content-center flex-wrap">
                    <h2>gifts</h2>
                    <a href="">for her</a>
                    <a href="">for him</a>
                </div>
            </section>

        </div>
    )
}