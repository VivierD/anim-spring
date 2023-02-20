import React from 'react'
import "./Scroll.css"
import { useState } from 'react'
import { Waypoint } from 'react-waypoint'
import {useSpring, animated} from "@react-spring/web";

export default function Scroll() {

  const [toggle, setToggle] = useState(false)

  const animation = useSpring({
    opacity : toggle ? 1 : 0,
    transform: toggle ? "translateX(0)" : "translateX(-50%)"
  })

  return (
    <div>
      <p className='scroll-txt'> Dolore ipsum excepteur mollit nisi in quis dolor culpa voluptate. Proident laboris aliqua irure officia pariatur Lorem dolore fugiat laborum. Duis pariatur ullamco cillum duis cillum. Lorem sit dolore ullamco ex et duis sit proident do incididunt. Anim exercitation non culpa id irure in cillum esse. Pariatur cupidatat voluptate excepteur aute excepteur voluptate. Amet cillum eiusmod anim do irure aliquip ut.
Tempor id ad laboris anim qui proident irure deserunt nostrud. Cupidatat aliqua ut ullamco enim laborum ex eu excepteur cillum ullamco. Aliqua sunt laboris enim id ex dolor in enim id nulla minim. Officia Lorem esse esse voluptate velit eiusmod est ad adipisicing eu adipisicing eiusmod deserunt. Laboris velit eu veniam mollit. Irure elit elit laboris aliqua. Deserunt anim enim cupidatat sint ad.
Cillum consectetur quis dolor velit excepteur sit esse consectetur Lorem. Velit nisi laboris Lorem laborum pariatur. Eiusmod excepteur minim commodo culpa irure elit. Qui ex culpa non excepteur et Lorem ex. </p>

      <p className='scroll-txt'> Dolore ipsum excepteur mollit nisi in quis dolor culpa voluptate. Proident laboris aliqua irure officia pariatur Lorem dolore fugiat laborum. Duis pariatur ullamco cillum duis cillum. Lorem sit dolore ullamco ex et duis sit proident do incididunt. Anim exercitation non culpa id irure in cillum esse. Pariatur cupidatat voluptate excepteur aute excepteur voluptate. Amet cillum eiusmod anim do irure aliquip ut.
Tempor id ad laboris anim qui proident irure deserunt nostrud. Cupidatat aliqua ut ullamco enim laborum ex eu excepteur cillum ullamco. Aliqua sunt laboris enim id ex dolor in enim id nulla minim. Officia Lorem esse esse voluptate velit eiusmod est ad adipisicing eu adipisicing eiusmod deserunt. Laboris velit eu veniam mollit. Irure elit elit laboris aliqua. Deserunt anim enim cupidatat sint ad.
Cillum consectetur quis dolor velit excepteur sit esse consectetur Lorem. Velit nisi laboris Lorem laborum pariatur. Eiusmod excepteur minim commodo culpa irure elit. Qui ex culpa non excepteur et Lorem ex. </p>
      <Waypoint 
        bottomOffset="40%"
        onEnter={()=>{
          setToggle(true)
        }}
      />
      <animated.div style={animation} class="cta-section">
        <h2>N'en ratez pas une miette</h2>
        <form>
          <label htmlFor='email'>Inscrivez vous à la newsletter !</label>
          <input type="text" id="email"/>
        </form>
      </animated.div>

      <p className='scroll-txt'> Dolore ipsum excepteur mollit nisi in quis dolor culpa voluptate. Proident laboris aliqua irure officia pariatur Lorem dolore fugiat laborum. Duis pariatur ullamco cillum duis cillum. Lorem sit dolore ullamco ex et duis sit proident do incididunt. Anim exercitation non culpa id irure in cillum esse. Pariatur cupidatat voluptate excepteur aute excepteur voluptate. Amet cillum eiusmod anim do irure aliquip ut.
Tempor id ad laboris anim qui proident irure deserunt nostrud. Cupidatat aliqua ut ullamco enim laborum ex eu excepteur cillum ullamco. Aliqua sunt laboris enim id ex dolor in enim id nulla minim. Officia Lorem esse esse voluptate velit eiusmod est ad adipisicing eu adipisicing eiusmod deserunt. Laboris velit eu veniam mollit. Irure elit elit laboris aliqua. Deserunt anim enim cupidatat sint ad.
Cillum consectetur quis dolor velit excepteur sit esse consectetur Lorem. Velit nisi laboris Lorem laborum pariatur. Eiusmod excepteur minim commodo culpa irure elit. Qui ex culpa non excepteur et Lorem ex. </p>

      <p className='scroll-txt'> Dolore ipsum excepteur mollit nisi in quis dolor culpa voluptate. Proident laboris aliqua irure officia pariatur Lorem dolore fugiat laborum. Duis pariatur ullamco cillum duis cillum. Lorem sit dolore ullamco ex et duis sit proident do incididunt. Anim exercitation non culpa id irure in cillum esse. Pariatur cupidatat voluptate excepteur aute excepteur voluptate. Amet cillum eiusmod anim do irure aliquip ut.
Tempor id ad laboris anim qui proident irure deserunt nostrud. Cupidatat aliqua ut ullamco enim laborum ex eu excepteur cillum ullamco. Aliqua sunt laboris enim id ex dolor in enim id nulla minim. Officia Lorem esse esse voluptate velit eiusmod est ad adipisicing eu adipisicing eiusmod deserunt. Laboris velit eu veniam mollit. Irure elit elit laboris aliqua. Deserunt anim enim cupidatat sint ad.
Cillum consectetur quis dolor velit excepteur sit esse consectetur Lorem. Velit nisi laboris Lorem laborum pariatur. Eiusmod excepteur minim commodo culpa irure elit. Qui ex culpa non excepteur et Lorem ex. </p>

    </div>
  )
}
