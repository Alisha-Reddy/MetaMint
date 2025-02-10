import React from 'react'
import {RiSendPlaneFill} from 'react-icons/ri'
import Image from 'next/image'
import images from "@/img"

const Subscribe = () => {
  return (
    <div>{/* subscribe */}
        <div>{/* subscribe_box */}
            <div>{/* subscribe_box_left */}
                <h2>Never miss a drop</h2>
                <p>Big things are coming! Subscribe to get early access, updates, and exclusive drops.  No spam, just vibes.</p>
                
                <div>{/* subscribe_box_left_box */}
                    <span>01</span>
                    <small>Get more discount</small>
                </div>

                <div>{/* subscribe_box_left_box */}
                    <span>02</span>
                    <small>Get premium magazines</small>
                </div>

                <div>{/* subscribe_box_left_input */}
                    <input type="email" placeholder='Enter your email' />
                    <RiSendPlaneFill/>{/* subscribe_box_left_input_icon */}
                </div>
            </div>

            <div>{/* subscribe_box_right */}
                <Image
                src={images.update}
                alt='get update'
                height={600}
                width={800}
                />
            </div>
        </div>
    </div>
  )
}

export default Subscribe