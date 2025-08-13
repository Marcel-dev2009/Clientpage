import TypewriterComponent from "typewriter-effect"
export default function TypingEffect() {
  return (
    <TypewriterComponent
    options={{
      strings:[
        "The restaurant serves millions of meals with a commitment to quality and consistency.", 
        `Guests leave satisfied, knowing they've enjoyed delicious food and attentive service.`,  
        "The team strives to create memorable experiences for every diner who walks through the door.",
        "The dining room becomes a welcome place where people connect over great flavors and warm hospitality."   
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