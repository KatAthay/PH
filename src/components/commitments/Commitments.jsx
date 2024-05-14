import React from 'react'
import { LiaShippingFastSolid } from 'react-icons/lia'
import { PiPottedPlant, PiChatsCircle } from 'react-icons/pi'
import Blob1 from '../../assets/blobs/Blob1'
import Blob2 from '../../assets/blobs/Blob2'
import Blob3 from '../../assets/blobs/Blob3'
import './commitments.styles.scss'

const Commitments = () => {
  const pointsData = [
    {
      id: 1,
      icon: <LiaShippingFastSolid size={40} />,
      header: 'Unbeatable Quality',
      info: 'Directly sourced from top-rated growers, our online plant shop offers an unparalleled selection of the finest quality plants at the most competitive prices.',
      svg: <Blob2 />,
    },
    {
      id: 2,
      icon: <PiPottedPlant size={40} />,
      header: 'Doorstep Delivery',
      info: "Experience the convenience of having your chosen plants delivered directly to your door when you shop with us online. Should your satisfaction ever waver, just let us know – we're committed to ensuring you're 100% happy with your purchase!",
      svg: <Blob1 />,
    },
    {
      id: 3,
      icon: <PiChatsCircle size={40} />,
      header: 'Online Support',
      info: "Upon ordering, you'll receive a complimentary plant-parenting instruction card. Plus, our team of virtual plant doctors is always on call, providing continuous online support for your plant care inquiries.",
      svg: <Blob3 />,
    },
  ]
  return (
    <>
      <div className="three-points-container">
        <div className="three-header">Our Commitment</div>
        <div className="three-points-row">
          {pointsData.map(({ icon, header, info, id, svg }) => (
            <div className="main-point-container" key={id}>
              <div className="blob-container">
                <div className="point-blob">{svg}</div>
              </div>
              <div className="points-container">
                <div className="point-icon">{icon}</div>
                <h3 className="point-header">{header}</h3>
                <p className="point-info">{info}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Commitments
