import React from 'react'
// 1) importer les boutons
import leftBtn from './icons/left.svg'
import rightBtn from './icons/right.svg'


//  3) On place des parametres aà notre fonction pour faire du destructuring
export default function BtnsSlider({direction, moveSlider}) {
  return (
    <div>
      {/*  2) Afficher les boutons */}
      <button onClick={moveSlider}
      //  4) changer la classe apres les props avec une operation ternaire
      className={direction === "next" ? "btns next" : "btns previous"}>
        <img src={direction === "next" ? rightBtn : leftBtn} alt="" />
      </button>
    </div>
  )
}
