import "./Content.css"

import Etherium from "../../../public/images/icon-ethereum.svg"
import Clock from "../../../public/images/icon-clock.svg"
import Avatar from "../../../public/images/image-avatar.png"

export default function Content() {
    return (
        <>
            <div className="content-container">
                <h1>Equilibrium #3429</h1>
                <p className="description">Our Equilibrium collection promotes balance and calm.</p>
                <div className="stats">
                    <div className="etherium-count">
                        <img src={Etherium} alt="" />
                        <h3>0.041 ETH</h3>
                    </div>
                    <div className="time-count">
                        <img src={Clock} alt="" />
                        <h3>3 days left</h3>
                    </div>
                </div>
                <span className="line"></span>
                <div className="creator">
                    <img src={Avatar} alt="" />
                    <h2>Creation of <span>Jules Wyvern</span></h2>
                </div>
            </div>
        </>
    )
}