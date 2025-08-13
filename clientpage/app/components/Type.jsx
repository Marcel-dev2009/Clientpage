import TypewriterComponent from "typewriter-effect"
export default function Type() {
  return (
    <TypewriterComponent
    options={{
      strings:[
        "Consistency with Quality.", 
        `Timely.`,  
        "Memorable.",
        "Hospitality.",
        "Attentive to Details" 
      ],
      autoStart : true,
      loop:true,
      delay:75,
      deleteSpeed:50
    }}
    >
       
    </TypewriterComponent>
  )
}