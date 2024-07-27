import ReactDom from  "react-dom/client"
import "./style.css"
import  c1 from "./assets/c1.jpg"
import  c2 from "./assets/c2.jpg"
import  c3 from "./assets/c3.jpg"
import  c4 from "./assets/c4.jpg"
import  c5 from "./assets/c5.jpg"
import  c6 from "./assets/c6.jpg"
import  c7 from "./assets/c7.jpg"
import  c8 from "./assets/c8.jpg"

const root = ReactDom.createRoot(document.getElementById("root"))


function Dog(props){
    return(
        <div className="container" style={{display:"inline-block" , }} >
            <div className="content" style={{ backgroundColor:"gray", height:"350px",width:"250px" ,display:"flex",alignItems:"center", flexDirection:"column",  marginLeft:"10px", marginTop:"10px"}}>
               <img style={{ height:"400px",width:"200px", padding:"20px",}} src={props.img} alt="" />
               <h1 >{props.bName}</h1>
            </div>
        </div>
    )
}

let name=[
    {
        img:c1,
        bName:"beachdog" 
    },
    {
        img:c2,
        bName:"shepared"
    },
    {
        img:c3,
        bName:"spanishpit"
    },
    {
        img:c4,
        bName:"grayhound"
    },
    {
        img:c5,
        bName:"superhunter"
    },
    {
        img:c6,
        bName:"pitcherbush"
    },
    {
        img:c7,
        bName:"shepared"
    },
    {
        img:c8,
        bName:"chitju"
    },
    {
        img:c4,
        bName:"pommariyen"
    },
    {
        img:c3,
        bName:"rotweiler"
    },
    {
        img:c2,
        bName:"doberman"
    },
    {
        img:c1,
        bName:"countrydog"
    },

]


root.render(
    <div>
        {
            name.map(function(item){
                return <Dog  img={item.img } bName={item.bName}  ></Dog>
            })
        }
    </div>
)