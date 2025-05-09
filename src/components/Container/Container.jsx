import './Container.css'
import Content from "../Content/Content"
import Equilibrium from "../../../public/images/image-equilibrium.jpg"

export default function Container() {
  return (
    <div className='container'>
      <img className="equilibrium" src={Equilibrium} alt="" />
      <Content />
    </div>
  )
}
