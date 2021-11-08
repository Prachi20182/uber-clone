import React, { useEffect, useState } from "react"
import tw from "tailwind-styled-components"
import { carList } from "../data/carList"


const RideSelector = ({ pickupCoordinates, dropoffCoordinates }) =>{
    const [rideDuration, setRightDuration] = useState(0);

    useEffect(() => {
       rideDuration = fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=pk.eyJ1IjoiZ2VsbG8wOSIsImEiOiJja3ZtN3R3ejkwc3MyMnhvNTh5aGM0YjA2In0.hUrITwmPTydF733q5UpMvA`)
       .then(res => res.json())
       .then(data => {
         setRightDuration(data.routes[0].duration / 50)
       })
    },[pickupCoordinates, dropoffCoordinates])
    return (
        <Wrapper>
          <Title>Choose a ride, or swipe up for more</Title>
          <CarList>
           { carList.map((car, index) => (
            <Car key={index}>
               <CarImg src={car.imgUrl} />
               <CarName>
                 <Service>{car.service}</Service>
                 <Time>5 min away</Time>
               </CarName>
               <Price>{'Rs' + (rideDuration * car.multiplier).toFixed(2)}</Price>
           </Car>
           )) }
          </CarList>
        </Wrapper>
    )

}

export default RideSelector;

const Wrapper = tw.div`
flex-1 overflow-y-scroll flex flex-col
`
const Title = tw.div`
text-gray-500 text-center text-xs py-2 border-b
`
const CarList = tw.div`
overflow-y-scroll
`
const Car = tw.div`
flex p-4 items-center 
`
const CarImg = tw.img`
h-14 mr-4
`
const CarName = tw.div`
flex-1
`
const Service = tw.div`
font-medium 
`
const Time = tw.div`
text-xs text-blue-500
`
const Price = tw.div`
text-sm 
`