import PhotoshopText from "./PhotoshopText";
import person from '../components/imgs/person.jpg'

function MySills() {
    return(
        <div className="my-skills">
                <div className="container">
                    <div className="my-skills-prime">
                        <div className="skills">
                            <div className="my-skills-text">
                                Мои навыки
                            </div>
                            <PhotoshopText/>
                            <PhotoshopText/>
                            <PhotoshopText/>
                        </div>
                        

                        <div className="person-main-img">
                            <img className="person-img" src={person} alt=""/>
                        </div>
                    </div>
                </div>
        </div>
    ); 
}

export default MySills;