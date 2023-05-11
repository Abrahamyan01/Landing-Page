import second from "../../images/second.png"
import "./hero.css"

export const Hero = () => {
    return (
        <div className='hero'>
            <div className='first'>
                <div>
                    <p>new collection</p>
                    <h3>Eget Tortor,<br />
                        Mollis Habitasse.</h3>
                </div>
            </div>
            <div className='second'>
                <p>sale up to 50%</p>
                <h3>Pulvinar Amet Morbi <br />
                    Efficitur Justo</h3>
                <img src={second} alt="" />
                <h4>Nunc venenatis adipiscing mauris lorem non risus <br />
                    molestie ut. Dolor ex. Cras sodales efficitur nec </h4>
                <a href="">Shop All</a>
            </div>
            <div className='third'>
                <div>
                    <p>sale up to 50%</p>
                    <h3>Molestie Cursus</h3>
                </div>
            </div>
        </div>
    )
}
