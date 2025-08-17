 import TypewriterComponent from "typewriter-effect"
export default function TypeIntro() {
  return (
    <>
    <TypewriterComponent
    options={{
      strings:[
       `Take Your Time to Explore our Menu... We still offer much more than what is visibly displayed Here`,
       ' Enjoy Your Survey!!'   
      ],
      autoStart : true,
      loop:false,
      delay : 75, 
      deleteSpeed:50   
    }}
    > 
    </TypewriterComponent>
    </>
  )
}