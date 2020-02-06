import React from "react"
import Fade from 'react-reveal/Fade'

import staticdata from "../../staticdata.json"

import "./styles/motion.scss"
import MotionProject from "../components/motion_project.js"
import Menu from "../components/menu"
import Footer from "../components/footer.js"

const MotionPage = () => (
    <div className="motion">
      <Menu/>
      <div className="motion-hero">
        <div className='motion-hero__content'>
          <div className="motion-hero__text">
            <p>Communicating ideas through motion</p>
            <h1>Various Motion Projects</h1>
            <p className="pull-quote__global motion-hero__paragraph">I have a variety of experience creating <a href="#dge">2D motion graphics,</a> <a href="#spark">character animations,</a> <a href="#88glam">photo parallax animations,</a> <a href="#stormtrooper">3D models, </a>composited videos, motion identities, educational video series and many more in between. Take a look at some of my favourite projects below.</p>
          </div>
        </div>
        <div className="motion-hero__bg"></div>
      </div>
        <div>
          <Fade bottom>
            <div className="section-title">
              <h5>Client Work</h5>
            </div>
          </Fade>
          <div className="page-container">
          {staticdata.motionclients.map(data =>(
          <MotionProject
            id={data.motion__id}
            heading={data.motion__heading}
            subheading={data.motion__subheading}
            embed1={data.motion__embed1}
            embed2={data.motion__embed2}
            caption={data.motion__caption}
            paragraph1={data.motion__paragraph1}
            paragraph2={data.motion__paragraph2}
          />
          ))}
          </div>
        </div>
        <div>
          <Fade bottom>
            <div className="section-title">
              <h5>Personal Projects</h5>
            </div>
          </Fade>
          <div className="page-container">
          {staticdata.motionfun.map(data =>(
          <MotionProject
            heading={data.motion__heading}
            subheading={data.motion__subheading}
            embed1={data.motion__embed1}
            embed2={data.motion__embed2}
            caption={data.motion__caption}
            paragraph1={data.motion__paragraph1}
            paragraph2={data.motion__paragraph2}
          />
          ))}
          </div>
      </div>
      <Footer />
    </div>
)

export default MotionPage
