import React from 'react';
import { useSpring, animated } from 'react-spring'
import './styles.css'



const calculate = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
//Właściwość innerWidth zwraca szerokość obszaru zawartości okna.

const transform1 = (x, y) => `perspective(600px) rotateX(${-x / 100}deg) rotateY(${-y / 100}deg) translate3d(${x / 10}px,${y / -10}px,0)`
const transform3 = (x, y) => `perspective(600px) rotateX(${x / 100}deg) rotateY(${y / 100}deg) translate3d(${x / 6 - 250}px,${y / 6 - 120}px,0)`
const transform4 = (x, y) => `translate3d(${x / 10}px,${y/10}px,0)`
// Właściwość perspektywy określa, jak daleko obiekt jest od użytkownika. Tak więc niższa wartość spowoduje bardziej intensywny efekt 3D niż wyższą wartość
//* RotateX definiuje transformację, która obraca element wokół odciętej (poziomej osi) bez jego deformowania.  */}
//translate3d() możemy wykonać przekształcenie w przestrzeni 3D. Wspomniane przekształcenie polega na jednoczesnym przesunięciu elementu HTML względem poziomej osi X oraz względem pionowej osi Y
function MainAnimation() {
  const [props, set] = useSpring({ xy: [0, 0] })
  //from documentation
  console.log(props);
  console.log(set)
  return (
    <div className="containerAnim" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calculate(x, y) })}>
    {/* ClientX Zwraca poziomą współrzędną */}
      <animated.div className="secondBackground" style={{ transform: props.xy.interpolate(transform1) }} />
      {/* Interpolacja to oszacowanie nowej wartości między dwiema znanymi wartościami. */}
      <animated.div className="star1" style={{ transform: props.xy.interpolate(transform3) }} />
      <animated.div className="star2" style={{ transform: props.xy.interpolate(transform3) }} />
      <animated.div className="star3" style={{ transform: props.xy.interpolate(transform4) }} />
      <animated.div className="star4" style={{ transform: props.xy.interpolate(transform3) }} />
      <animated.div className="star5" style={{ transform: props.xy.interpolate(transform3) }} />
      <animated.div className="star6" style={{ transform: props.xy.interpolate(transform3) }} />
   </div>
  )
}


export default MainAnimation;

