import './master.css'

export default function Footer() {
    return (
        <div className="footer col-12 d-flex">
            <section className='col-3'>
                <p>company</p>
                <ul className='col-12'>
                    <li>prada group</li>
                    <li>fondazione prada</li>
                    <li>luna rossa</li>
                    <li>sustainibility</li>
                    <li>work with us</li>
                    <li>vahik yesaian</li>
                </ul>
            </section>
            <section className='col-3'>
                <p>legal terms and conditions</p>
                <ul className='col-12'>
                    <li>legal notice</li>
                    <li>privacy policy</li>
                    <li>cookie policy</li>
                    <li>site map</li>
                    <li>vahik.yesaian66@gmail.com</li>
                </ul>
            </section>
            <section className='col-6 d-flex justify-content-end '>
                <div className='col-4 d-flex justify-content-center align-items-center'>
                <i class="bi bi-facebook"></i>
                <i class="bi bi-twitter"></i>
                <i class="bi bi-instagram"></i>
                <i class="bi bi-youtube"></i>
                <i class="bi bi-spotify"></i>

                </div>

            </section>

        </div>
    )
}