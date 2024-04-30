import notebookimg from './notebook.png'
import rocket from './rocket.png'
import contact from './contact.png'
import Card from './Card';
function About(){

    const aboutData = [
        {
            id : "1",
            img : rocket,
            people : "2,500",
            info : "Enterprice organization successfully launched"
        },
        {
            id : "1",
            img : notebookimg,
            people : "4,500",
            info : "Enterprice users onboarde semelessely"
        },
        {
            id : "1",
            img : contact,
            people : "200,000+",
            info : "Professonal trained on product and strategy"
        },
    ]
    return(
        <>
            <div className="outerContainer">
                <div className="innerContainer flex justify-around">
                  {
                    aboutData.map((items , index)=>{
                        return(
                            <Card key = {items.id} img={items.img} people={items.people} info = {items.info}/>
                        )
                    })
                  }
                </div>
            </div>
        </>
    )
}
export default About;