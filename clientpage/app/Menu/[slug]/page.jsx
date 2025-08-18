import Link from 'next/link'
import ff from '../../../public/ff.png'
import assortps from '../../../public/assortps.png'
import stockps from '../../../public/stockps.png' 
import chickps from '../../../public/chick.png' 
import dsp from '../../../public/dsp.png'
import beefps from '../../../public/beefps.png'
import stew from '../../../public/stew.png'
import cole from '../../../public/cole.png'
import plant from '../../../public/plant.png'
import moi from '../../../public/moi.png'
import fried from '../../../public/fried.png' 
import coco from '../../../public/coco.png'
import cowm from '../../../public/cowm.png'
import chicken from '../../../public/chicken.png'
import goatm from '../../../public/goatm.png'
import dried from '../../../public/dried.png'
import assort from '../../../public/assort.png'
import stock from '../../../public/stock.png'
import mama from '../../../public/mama.png'
import okra from "../../../public/okra.png"
import bitter from '../../../public/bitter.png'
import abak from '../../../public/abak.png'
import ogbono from '../../../public/ogbono.png'
import editan from '../../../public/editan.png'
import uziza from '../../../public/uziza.png'
import native from '../../../public/native.png'
import vegies from '../../../public/vegies.png'
import egusi from '../../../public/egusi.png'
import afang from '../../../public/afang.png'
import garri from "../../../public/garri.png"
import yam from '../../../public/yam.png'
import eba from '../../../public/eba.png'
import cow from '../../../public/cow.png'
import goat from '../../../public/goat.png'
import white from '../../../public/white.png'
import fish from '../../../public/fish.png'
import owerri from '../../../public/owerri.png'
import amala from '../../../public/amala.png'
import { RiWhatsappFill } from "react-icons/ri";
import Image from 'next/image';
import semo from '../../../public/semolina.png'
import { Button } from '@/components/ui/button';
import Footer from '@/app/components/footer';
import oha from '../../../public/oha.png'
import beef from '../../../public/beef.png'
import jellof from '../../../public/jellof.png'
const menuData = {
  semolina: {
    image: semo,
    name: "Semolina",
    description: `Soft, smooth semovita swallow, perfect with any Nigerian soup.`,
    ingredients: {
      I: "Semovita flour 🌾",
      II: "Water 💧",
      III: "Salt (optional) 🧂",
      IV: "Palm oil (optional) 🟥",
      V: "Mortar & pestle (for texture) 🪵",
      VI: "Cooking pot 🍲",
      VII: "Wooden turning stick 🪵",
      VIII: "Steam for fluffiness ♨️",
    },
  },
  amala: {
    image: amala,
    name: "Amala",
    description: `Rich, dark, and hearty. A traditional Nigerian dish to elevate your dining experience.`,
    ingredients: {
      I: "Yam flour (elubo) 🌾",
      II: "Water 💧",
      III: "Salt (optional) 🧂",
      IV: "Palm oil (optional) 🟥",
      V: "Cassava flour (lafun, optional) 🌿",
      VI: "  Maize flour (for mixed type) 🌽",
      VII: "Cocoyam flour (optional blend) 🌰",
      VIII: "Steam for fluffiness ♨️",
    },
  },
  owerri: {
    image: owerri,
    name: "Ofe Owerri",
    description: `A culinary journey to Owerri, Nigeria, our soup blends assorted meats for an authentic and flavorful experience.`,
    ingredients: {
      I: " Cocoyam (ede) — thickener 🌰",
      II: "Water 💧",
      III: "Salt 🧂",
      IV: "Palm oil 🟥",
      V: "Stockfish 🐟",
      VI: "Assorted meat (beef, goat meat, kpomo, shaki) 🍖",
      VII: "Uziza leaves 🌿",
      VIII: "Dry fish 🐠♨️",
    },
  },
  oha: {
    image: oha,
    name: "Ofe Oha",
    description: `Harmonizing the distinct flavor of oha leaves with assorted meats for a taste of culinary excellence.`,
    ingredients: {
      I: " Cocoyam (ede) — thickener 🌰",
      II: "Water 💧",
      III: " Seasoning cubes, pepper & salt 🧂🌶️",
      IV: "Palm oil 🟥",
      V: "Stockfish 🐟",
      VI: "Assorted meat (beef, goat meat, kpomo, shaki) 🍖",
      VII: "  Oha leaves (freshly hand-torn) 🌿",
      VIII: "Dry fish 🐠♨️",
    },
  },
  beef: {
    image: beef,
    name: "Beef",
    description: `Juicy, tender beef, perfectly seasoned and cooked to bring out its rich,
    savory flavor.`,
    ingredients: {
      I: "   Fresh beef (cut into chunks) 🥩",
      II: " Onions (blended or sliced) 🧅",
      III: " Seasoning cubes, pepper & salt 🧂🌶️",
      IV: " Red bell pepper (tatashe) 🌶️",
      V: "  Scotch bonnet (atarodo) 🌶️🔥",
      VI: "  Garlic & ginger (blended) 🧄🫚",
      VII: " Tomatoes (fresh or paste) 🍅",
      VIII: " Vegetable oil 🛢️",
    },
  },
  fish: {
    image: fish,
    name: "Fresh Fish",
    description: `Fresh, succulent fish, sourced daily for the finest flavor and delicate texture`,
    ingredients: {
      I: " Fresh whole fish (e.g., tilapia, croaker, or catfish) ",
      II: " Vegetable oil (for deep or pan frying) 🛢️",
      III: " Seasoning cubes, pepper & salt 🧂🌶️",
      IV: " Onions (blended or finely chopped) 🧅",
      V: "    Scotch bonnet pepper (atarodo) 🌶️🔥",
      VI: "  Garlic & ginger (blended) 🧄🫚",
      VII: "   Garlic & ginger paste 🧄🫚",
      VIII: " Vegetable oil 🛢️",
    },
  },
  jellof: {
    image: jellof,
    name: "Jellof Rice",
    description: `A vibrant West African classic, our Jollof Rice is a fragrant and flavorful dish, perfectly
    seasoned and cooked to perfection for a true taste of celebration. 1Ng - 0Gh`,
    ingredients: {
      I: " Long-grain parboiled rice 🍚",
      II: " Tomatoes (fresh & paste) 🍅",
      III: " Seasoning cubes, pepper & salt 🧂🌶️",
      IV: " Onions (blended or finely chopped) 🧅",
      V: "    Scotch bonnet pepper (atarodo) 🌶️🔥",
      VI: "  Red bell peppers (tatashe) 🌶️ ",
      VII: "  Bay leaves & thyme 🌿",
      VIII: " Vegetable oil 🛢️",
    },
  },
  white: {
    image: white,
    name: "White Rice",
    description: `A timeless staple, perfectly cooked to fluffy perfection, offering a versatile base for your
    favorite sauces and culinary creations.`,
    ingredients: {
      I: " Long-grain parboiled rice 🍚",
      II: "Water 💧",
      III: "Salt 🧂",
      IV: "Onion (optional, for flavor) 🧅",
      V: "  Bay leaf (optional, for aroma) 🌿",
      VI: "A pinch of thyme or curry (optional, light flavor) 🌿",
      VII: "  Bay leaves & thyme 🌿",
      VIII: " Vegetable oil 🛢️",
    },
  },
  goat: {
    image: goat,
    name: "Goat Meat Pepper Soup",
    description: `Spicy and aromatic goat meat pepper soup, slow-cooked with fresh herbs and
    bold African spices for a rich, comforting taste`,
    ingredients: {
      I: "Goat Meat 🐐",
      II: "Pepper Soup Spice Blend 🌿",
      III: "Scotch Bonnet Peppers 🌶️",
      IV: "Onions 🧅",
      V: "Crayfish (optional) 🦐",
      VI: "Seasoning Cubes 🧂",
      VII: "Salt 🧂",
      VIII: "Scent Leaves 🌿",
    },
  },
  cow: {
    image: cow,
    name: "CowLeg Meat Pepper Soup",
    description: `Hearty cow leg pepper soup, simmered to perfection with traditional spices and herbs 
    for a rich,  flavorful experience.`,
    ingredients: {
      I: "Cow Leg 🐄",
      II: "Pepper Soup Spice Blend 🌿",
      III: "Scotch Bonnet Peppers 🌶️",
      IV: "Onions 🧅",
      V: "Crayfish (optional) 🦐",
      VI: "Seasoning Cubes 🧂",
      VII: "Salt 🧂",
      VIII: "Scent Leaves 🌿",
    },
  },
  yam: {
    image: yam,
    name: "Pounded Yam",
    description: `Pure comfort, expertly pounded for a flawless pairing with rich sauces.`,
    ingredients: {
      I: "Yam Tubers 🍠",
      II: "Water 💧",
      III: "Mortar and Pestle (for pounding) 🥣",
      IV: "Butter (optional) 🧈",
      V: "Salt (optional) 🧂",
      VI: "Plastic Wrap (to keep it warm) 🌯",
      VII: "Serving Bowl 🍲",
      VIII: "Starch (optional, for extra softness) 🌽",
    },
  },
  eba: {
    image: eba,
    name: "Eba",
    description: `It is known for promoting heart health, aiding digestion, and providing a sustained release of energy.    `,
    ingredients: {
      I: "Garri (cassava flakes) 🌽",
      II: "Hot Water 💧🔥",
      III: "Salt (optional) 🧂",
      IV: "Butter (optional) 🧈",
      V: "Plastic Wrap (to keep it warm) 🌯",
      VI: "Serving Bowl 🍲",
      VII: "Wooden Spatula (for stirring) 🥄",
      VIII: "Palm Oil (optional, for color) 🟥",
    },
  },
  garri: {
    image: garri,
    name: "Garri",
    description: `Crisp and satisfying, the perfect side for a taste of authentic West African cuisin.`,
    ingredients: {
      I: "Garri (cassava flakes) 🌽",
      II: "Hot Water 💧🔥",
      III: "Salt (optional) 🧂",
      IV: "Butter (optional) 🧈",
      V: "Plastic Wrap (to keep it warm) 🌯",
      VI: "Serving Bowl 🍲",
      VII: "Wooden Spatula (for stirring) 🥄",
      VIII: "Palm Oil (optional, for color) 🟥",
    },
  },
  afang: {
    image: afang,
    name: "Afang Soup",
    description: `A delectable Nigerian specialty featuring a vibrant mix of
    vegetables and protein, a true delight for the senses.`,
    ingredients: {
      I : "Afang leaves" ,
      II : "Waterleaf (or substitute with spinach)" ,
      III : "Palm oil" , 
      IV : "Beef" , 
      V : "Stockfish" ,
      VI : "Dry fish" ,
      VII : "Periwinkle (optional)" ,
      VIII : "Crayfish"
    },
  },
  bitter: {
    image: bitter,
    name: "Bitter Leaf Soup",
    description: `A bold Nigerian classic, blending the richness of assorted
    meats with the unique flavor of bitterleaf for an
    unforgettable culinary experience. `,
    ingredients: {
      I : "Bitterleaf",
      II : "Palm oil",
      III : "Beef",
      IV : "Stockfish",
      V : "Dry fish",
      VI : "Periwinkle (optional)",
      VII : "Crayfish",
      VIII : "Pepper",
    },
  },
  ogbono: {
    image: ogbono,
    name: "Ogbono Soup",
    description: `A luscious blend of ground ogbono seeds, vegetables, and meats,
    offering a delightful taste of Nigerian comfort in every bowl..`,
    ingredients: {
      I : "Ogbono seeds",
      II : "Palm oil",
   III : "Beef",
   IV : "Stockfish",
   V : "Dry fish",
   VI : "Crayfish",
  VII : "Bitterleaf (or spinach)",
   VIII : "Pepper",  
    },
  },
  abak: {
    image: abak,
    name: "Abak Soup",
    description: `A flavorful blend of Efik ingredients, with some periwinkle to keep you busy `,
    ingredients: {
      I : "Abak (Fluted Pumpkin) leaves",
      II : "Palm oil",
      III : "Beef",
      IV : "Stockfish",
      V : "Dry fish",
      VI : "Periwinkle (optional)",
      VII : "Crayfish",
      VIII : "Pepper",
    },
  },
  editan: {
    image: editan,
    name: "Editan Soup",
    description: `A harmonious blend of nutritious vegetables and assorted meats
    with periwinkles, creating a flavorful and hearty Nigerian delicacy`,
    ingredients: {
      I : "Editan leaves",
      II : "Palm oil",
      III : "Beef",
      IV : "Stockfish",
      V : "Dry fish",
      VI : "Periwinkle (optional)",
      VII : "Crayfish",
      VIII : "Pepper",
    },
  },
  okra: {
    image: okra,
    name: "Okra Soup",
    description: `A delightful medley of fresh okra, vegetables, and choice meats,
    creating a hearty and satisfying Nigerian dish`,
    ingredients: {
      I : "Okra",
      II : "Palm oil",
      III : "Beef",
      IV : "Stockfish",
      V : "Crayfish",
      VI : "Waterleaf (or spinach)",
      VII : "Periwinkle (optional)",
      VIII : "Seasoning cubes",
    },
  },
  egusi: {
    image: egusi,
    name: "Egusi Soup",
    description: `A delightful melange of ground melon seeds, vegetables,
    and meats, offering a rich and savory taste of Nigerian cuisine.`,
    ingredients: {
      I : "Egusi seeds",
      II : "Palm oil",
      III : "Beef",
      IV : "Stockfish",
      V : "Dry fish",
      VI : "Spinach (or bitterleaf)",
      VII : "Crayfish",
      VIII : "Pepper",
    },
  },
  
  uziza: {
    image: uziza,
    name: "Uziza Soup",
    description: `A flavorful Nigerian creation featuring the aromatic uziza leaves,
    complemented by a blend of spices, vegetables,
    and meats for a memorable culinary experience.`,
    ingredients: {
      I : "Uziza leaves",
      II : "Uziza seeds",
      III : "Palm oil",
      IV : "Beef",
      V : "Stockfish",
      VI : "Dry fish",
      VII : "Crayfish",
      VIII : "Pepper",
    },
  },
  mama: {
    image: mama,
    name: "Mama Delight Soup",
    description: `A savory masterpiece crafted with love, featuring a
    symphony of flavors that evoke the warmth of home-cooked goodness`,
    ingredients: {
      I : "Groundnut paste (peanut butter)",
      II : "Palm oil",
      III : "Beef",
      IV : "Stockfish",
      V : "Dry fish",
      VI : "Bitterleaf (or spinach)",
      VII : "Crayfish",
      VIII : "Pepper",
    },
  },
  vegies: {
    image: vegies,
    name: "Vegetable Soup",
    description: `A savory masterpiece crafted with love,
    featuring a symphony of flavors that evoke the warmth of home-cooked goodness.`,
    ingredients: {
      I : "Waterleaf",
      II : "Spinach",
      III : "Palm oil",
      IV : "Beef",
      V : "Stockfish",
      VI : "Periwinkle (optional)",
      VII : "Crayfish",
      VIII : "Pepper",
    },
  },
  native: {
    image: native,
    name: "Native Soup",
    description: `A celebration of local flavors and culinary tradition,
    our native soup captures the essence of homegrown ingredients in every taste`,
    ingredients: {
      I : "Bitterleaf",
      II : "Uziza leaves",
      III : "Palm oil",
      IV : "Goat meat",
      V : "Stockfish",
      VI : "Dry fish",
      VII : "Crayfish",
      VIII : "Pepper",
    },
  },
  dried: {
    image: dried,
    name: "Dried Fish",
    description: `Flavorful dried fish, naturally preserved for a smoky,
    savory taste that enriches every dish.`,
    ingredients: {
      I : "Dried fish",
      II : "Palm oil",
      III : "Onions",
      IV : "Tomatoes",
      V : "Pepper",
      VI : "Seasoning cubes",
      VII : "Garlic",
      VIII : "Thyme",
    },
  },
  assort: {
    image: assort,
    name: "Asssorted Meat",
    description: `Delicious assorted meat, a flavorful mix of tender beef,
    tripe, and other cuts, seasoned and cooked to perfection.`,
    ingredients: {
      I : "Goat meat",
      II : "Beef",
      III : "Cow tripe (shaki)",
      IV : "Cow skin (ponmo)",
      V : "Chicken",
      VI : "Stockfish",
      VII : "Seasoning cubes",
      VIII : "Salt",
    },
  },
   chicken: {
    image: chicken,
    name: "Chicken",
    description: `Juicy, tender chicken, perfectly seasoned and cooked to bring out its rich,
    savory flavor.`,
    ingredients: {
      I : "Chicken pieces",
      II : "Flour",
      III : "Cornstarch",
      IV : "Eggs",
      V : "Garlic powder",
      VI : "Paprika",
      VII : "Salt",
      VIII : "Vegetable oil",
    },
  },
   goatm: {
    image: goatm,
    name: "Goat Meat",
    description: `Fresh, succulent Goat meat, sourced daily for the finest flavor and delicate texture.`,
    ingredients: {
      I : "Goat meat",
      II : "Onions",
      III : "Garlic",
      IV : "Ginger",
      V : "Thyme",
      VI : "Seasoning cubes",
      VII : "Salt",
      VIII : "Pepper",
    },
  },
   cowm: {
    image: cowm,
    name: "Cow Meat",
    description: `Juicy, tender beef, perfectly seasoned and cooked to bring out its rich,
    savory flavor.`,
    ingredients: {
      I : "Cow meat",
      II : "Onions",
      III : "Garlic",
      IV : "Ginger",
      V : "Thyme",
      VI : "Seasoning cubes",
      VII : "Salt",
      VIII : "Pepper",
    },
  },
   cole: {
    image:  cole,
    name: "Coleslaw",
    description: `Crisp and refreshing, our coleslaw is a delightful medley of shredded cabbage
    and carrots tossed in a tangy dressing—a perfect, crunchy side for any meal`,
    ingredients: {
      I : "Cabbage",
      II : "Carrots",
      III : "Mayonnaise",
      IV : "Onions",
      V : "Vinegar",
      VI : "Sugar",
      VII : "Salt",
      VIII : "Pepper",
    },
  },
   stock: {
    image: stock,
    name: "Stock Fish",
    description: `Fresh, succulent fish, sourced daily for the finest flavor and delicate texture.`,
    ingredients: {
      I : "Stockfish",
      II : "Palm oil",
      III : "Onions",
      IV : "Garlic",
      V : "Pepper",
      VI : "Seasoning cubes",
      VII : "Crayfish",
      VIII : "Salt",
    },
  },
   coco: {
    image: coco,
    name: "Coconut Rice",
    description: `A tropical twist on a classic dish, our Coconut Rice is a
    fragrant blend of rice cooked in coconut milk, creating a rich and
    flavorful experience with every bite`,
    ingredients: {
      I : "Rice",
      II : "Coconut milk",
      III : "Water",
      IV : "Onions",
      V : "Garlic",
      VI : "Salt",
      VII : "Thyme",
      VIII : "Vegetable oil",
    },
  },
   plant: {
    image: plant,
    name: "Fried Plantain",
    description: `Savor the sweet and savory perfection of our golden fried plantains,
    a delightful side dish or snack that captures the essence of Caribbean and African cuisine.`,
    ingredients: {
      I : "Ripe plantains",
      II : "Vegetable oil",
      III : "Salt",
      IV : "Paprika (optional)",
      V : "Black pepper (optional)",
      VI : "Garlic powder (optional)",
      VII : "Sugar (optional)",
      VIII : "Lemon juice (optional)",
    },
  },
   moi: {
    image: moi,
    name: "Moi-Moi",
    description: `A steamed delicacy made from ground beans, spices, and other flavorful ingredients,
    creating a savory and satisfying Nigerian delight.`,
    ingredients: {
      I : "Black-eyed peas",
      II : "Red bell peppers",
      III : "Onions",
      IV : "Vegetable oil",
      V : "Seasoning cubes",
      VI : "Salt",
      VII : "Eggs (optional)",
      VIII : "Palm oil (optional)",
    },
  },
   fried: {
    image: fried,
    name: "Fried Rice",
    description: `A delicious medley of fragrant rice, colorful vegetables, and savory
    seasonings, expertly stir-fried to perfection for a delightful culinary experience.`,
    ingredients: {
      I : "Rice",
      II : "Vegetable oil",
      III : "Carrots",
      IV : "Green peas",
      V : "Onions",
      VI : "Bell peppers",
      VII : "Seasoning cubes",
      VIII : "Salt",
    },
  },
   stew: {
    image: stew,
    name: "Stew",
    description: `Our savory stew is a culinary masterpiece, featuring a rich blend of
    aromatic spices and slow-cooked goodness, elevating any dish it accompanies.`,
    ingredients: {
      I : "Tomatoes",
      II : "Red bell peppers",
      III : "Onions",
      IV : "Garlic",
      V : "Vegetable oil",
      VI : "Seasoning cubes",
      VII : "Salt",
      VIII : "Pepper",
    },
  },
   assortps: {
    image: assortps,
    name: "Assorted Meat PepperSoup",
    description: `Spicy and aromatic goat meat pepper soup, slow-cooked with fresh herbs and
    bold African spices for a rich, comforting taste`,
    ingredients: {
      I : "Goat meat",
      II : "Cow meat",
      III : "Cow tripe (shaki)",
      IV : "Cow skin (ponmo)",
      V : "Pepper soup spices",
      VI : "Onions",
      VII : "Seasoning cubes",
      VIII : "Water",
    },
  },
   ff: {
    image: ff,
    name: "Fresh Fish Pepper soup",
    description: `Hearty Fresh Fish pepper soup, simmered to perfection with traditional spices and herbs for a rich,
    flavorful experience.`,
    ingredients: {
      I : "Fresh fish (tilapia, catfish, or croaker)",
      II : "Pepper soup spices",
      III : "Onions",
      IV : "Garlic",
      V : "Ginger",
      VI : "Seasoning cubes",
      VII : "Salt",
      VIII : "Water",
    },
  },
   stockps: {
    image: stockps,
    name: "Stock Fish Pepper soup",
    description: `Spicy and aromatic goat meat pepper soup, slow-cooked with fresh herbs and
    bold African spices for a rich, comforting taste`,
    ingredients: {
      I : "Stockfish",
      II : "Pepper soup spices",
      III : "Onions",
      IV : "Garlic",
      V : "Ginger",
      VI : "Seasoning cubes",
      VII : "Salt",
      VIII : "Water",
    },
  },
   chickps: {
    image: chickps,
    name: "Chiken Pepper soup",
    description: `Hearty Chicken pepper soup, simmered to perfection with traditional spices and herbs for a rich,
    flavorful experience.`,
    ingredients: {
      I : "Chicken pieces",
      II : "Pepper soup spices",
      III : "Onions",
      IV : "Garlic",
      V : "Ginger",
      VI : "Seasoning cubes",
      VII : "Salt",
      VIII : "Water"
    },
  },
   dsp: {
    image: dsp,
    name: "Dried Fish Pepper soup",
    description: `Dried Fish Pepper Soup is a spicy, smoky Nigerian soup made with dried fish.`,
    ingredients: {
      I : "Dried fish",
      II : "Pepper soup spices",
      III : "Onions",
      IV : "Garlic",
      V : "Ginger",
      VI : "Seasoning cubes",
      VII : "Salt",
      VIII : "Water",
    },
  },
   beefps: {
    image: beefps,
    name: "Beef Pepper soup",
    description: `**Beef Pepper Soup** is a spicy Nigerian soup made with tender beef and aromatic spices.    `,
    ingredients: {
      I : "Beef",
      II : "Pepper soup spices",
      III : "Onions",
      IV : "Garlic",
      V : "Ginger",
      VI : "Seasoning cubes",
      VII : "Salt",
      VIII : "Water",
    },
  },
}  
        export default function MenuItemPage({ params }) {
          const { slug } = params; // e.g. "amala"
          const item = menuData[slug];
        
          if (!item) {
            return <h1 className="text-center text-red-500">Item not found</h1>;
          }
        
          return (
            <div className={` overflow-x-hidden  transform md:translate-x-[25rem] h-auto mt-4 border border-white/15  w-full md:w-[50%] rounded-md `}>
             <div className='grid place-items-center'>
             <Image src={item.image} alt={item.name} className='w-[200px] h-[200px]' />
              <h1 className="text-3xl font-bold">{item.name}</h1>
              <p className="mt-4 text-[1rem] px-6">{item.description}</p>
             </div>
              <div className='grid place-content-center mt-4'>
                <h2 className='text-3xl font-bold text-center'>Ingredients</h2>
                <div className='border border-white/15 rounded-md bg-black/15 mt-4 '>
                  <ul className='flex flex-col p-6'>
                    <div className='flex'>  1:{item.ingredients.I}</div>
                    <div className='flex'>  2: {item.ingredients.II}</div>
                    <div className='flex'>  3: {item.ingredients.III}</div>
                    <div className='flex'>  4: {item.ingredients.IV}</div>
                    <div className='flex'>  5: {item.ingredients.V}</div>
                    <div className='flex'>  6: {item.ingredients.VI}</div>
                    <div className='flex'>  7: {item.ingredients.VII}</div>
                    <div className='flex'>  8: {item.ingredients.VIII}</div>
                  </ul>
                </div> <br />

                 <div className='p-6 border border-white/15 rounded-md'>
                 <h2 className='text-3xl font-bold text-center'>Contact Us</h2>
                   <div>
                   <div className='flex p-6 justify-between border border-white/15 rounded-md bg-black/5 mt-4 mb-4'>
                    <h2>Wuse, Abuja <br /> #494 Bangui Street, Off Ademola Adetokunbo, Wuse 2, Abuja, Nigeria.</h2>
                      <Button className='animate-pulse mt-4'>
                         <Link href='tel:' >Contact Us </Link>
                      </Button>
                     <Link href='' className='ml-6 mt-4'> <RiWhatsappFill color='green' size={30} /></Link>
                  </div>
                   </div> {/* Abuja */}

                   <div>
                   <div className='flex p-6 justify-between border border-white/15 rounded-md bg-black/5 mt-4 mb-4'>
                    <h2>Garki, Abuja <br /> #1594 Sir Ladoke Akintola Blvd., Off Lagos Street, Garki II, Abuja, Nigeria</h2>
                      <Button className='animate-pulse mt-4'>
                         <Link href='tel:' >Contact Us </Link>
                      </Button>
                     <Link href='' className='ml-6 mt-4'> <RiWhatsappFill color='green' size={30} /></Link>
                  </div>
                   </div> {/* Garki ,  Abuja */}

                   <div className='flex p-6 justify-between border border-white/15 rounded-md bg-black/5 mt-4 mb-4'>
                    <h2>Ikeja, Lagos
                   +Event Hall <br /> #21 Isaac John Street, Ikeja G.R.A, Ikeja, Lagos, Nigeria</h2>
                      <Button className='animate-pulse mt-4 ml-4'>
                         <Link href='tel:' >Contact Us </Link>
                      </Button>
                     <Link href='' className='ml-6 mt-4'> <RiWhatsappFill color='green' size={30} /></Link>
                  </div>
                   </div> {/* Ikeja  ,  Lagos */}

                   <div className='flex p-6 justify-between border border-white/15 rounded-md bg-black/5 mt-4 mb-4'>
                    <h2>Victoria Island, Lagos <br />
                    14b Agoro odiyan street ,off adeola odeku road, Victoria Island, Lagos, Nigeria</h2>
                      <Button className='animate-pulse mt-4 ml-4'>
                         <Link href='tel:' >Contact Us </Link>
                      </Button>
                     <Link href='' className='ml-6 mt-4'> <RiWhatsappFill color='green' size={30} /></Link>
                  </div> {/* Victoria Island Lagos */}
                  


                  <div className='flex p-6 justify-between border border-white/15 rounded-md bg-black/5 mt-4 mb-4'>
                    <h2>G.R.A, Port Harcourt
                     + Chinese Restaurant
                         + Event Hall <br />
                  </h2>
                      <Button className='animate-pulse mt-4 ml-4'>
                         <Link href='tel:' >Contact Us </Link>
                      </Button>
                     <Link href='' className='ml-6 mt-4'> <RiWhatsappFill color='green' size={30} /></Link>
                  </div> {/*GRA */}
                  
                  <div className='flex p-6 justify-between border border-white/15 rounded-md bg-black/5 mt-4 mb-4'>
                    <h2>Trans Amadi, Port Harcourt
                    +Chinese Restaurant
                      +bakery
                  </h2>
                      <Button className='animate-pulse mt-4 ml-4'>
                         <Link href='tel:' >Contact Us </Link>
                      </Button>
                     <Link href='' className='ml-6 mt-4'> <RiWhatsappFill color='green' size={30} /></Link>
                  </div> {/* PH*/}
                  <div className='flex p-6 justify-between border border-white/15 rounded-md bg-black/5 mt-4 mb-4'>
                    <h2>Owerri, Imo <br />
                    #19 Umez Eronini Street, Ikenegbu, Owerri, Imo State, Nigeria
                  </h2>
                      <Button className='animate-pulse mt-4 ml-4'>
                         <Link href='tel:' >Contact Us </Link>
                      </Button>
                     <Link href='' className='ml-6 mt-4'> <RiWhatsappFill color='green' size={30} /></Link>
                  </div> {/* Owerri*/}

                  <div className='flex p-6 justify-between border border-white/15 rounded-md bg-black/5 mt-4 mb-4'>
                    <h2>Aba, Abia <br />
                    #11 Brass Street, G.R.A Aba, Abia State, Nigeria
                  </h2>
                      <Button className='animate-pulse mt-4 ml-4'>
                         <Link href='tel:' >Contact Us </Link>
                      </Button>
                     <Link href='' className='ml-6 mt-4'> <RiWhatsappFill color='green' size={30} /></Link>
                  </div> {/* Owerri*/}

            </div>
            <div className='text-[1rem]'>
              <Footer/>
            </div>
            </div>
          );
        }



        /* 
       
        */