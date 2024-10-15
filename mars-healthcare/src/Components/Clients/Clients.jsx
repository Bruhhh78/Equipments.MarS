import React from 'react'
import './Clients.css'

function Clients() {
  const bhu = '../Assets/OurClients/images_govt/bhu.png'
  const bhumc = '../Assets/OurClients/images_govt/bhumc.jpg'
  const brdmc = '../Assets/OurClients/images_govt/brdmc.png'
  const firoz = '../Assets/OurClients/images_govt/firoza.webp'
  const gsvm = '../Assets/OurClients/images_govt/gsvm.jpg'
  const hmc = '../Assets/OurClients/images_govt/hmc.jpg'
  const integral = '../Assets/OurClients/images_govt/integral.jpg'
  const kgmc = '../Assets/OurClients/images_govt/kgmc.jpg'
  const mayocli = '../Assets/OurClients/images_govt/mayocli.jpg'
  const mlbmc = '../Assets/OurClients/images_govt/mlbmc.jpg'
  const mnmc = '../Assets/OurClients/images_govt/mnmc.jpg'
  const patiyala = '../Assets/OurClients/images_govt/patiala.png'
  const rmcbd = '../Assets/OurClients/images_govt/rmcbd.jpg'
  const rmlimc = '../Assets/OurClients/images_govt/rmlimc.jpg'
  const sgmpims = '../Assets/OurClients/images_govt/sgmpims.png'

  const govt_logos = [
    bhu, bhumc, brdmc, firoz, gsvm, hmc, integral, kgmc, mayocli,
    mlbmc, mnmc, patiyala, rmcbd, rmlimc, sgmpims, bhumc,

  ]
  //White a map function


  return (
    <div id='clients' className="client-section">
      <h2>Our Clients</h2>
      <div className="logo-container">
        {
          govt_logos.map((image, index) => (
            <img key={index} src={image} alt={`Client Logo ${index + 1}`} />
          ))
        }
      </div>
    </div>

  )
}

export default Clients