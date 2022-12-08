import Rectangle7Child from "./Rectangle7Child";
import Rectangle73Child from "./Rectagnle73Child";

function ManyImgs() {
    return(
        <div className="many-imgs">
            <div className="premany-imgs">
                <Rectangle7Child/>
                <Rectangle73Child/>
                <Rectangle7Child/>
                <Rectangle73Child/>
                <Rectangle73Child/>
                <Rectangle7Child/>
                <Rectangle73Child/>
                <Rectangle7Child/>
            </div>
        </div>
    );
}

export default ManyImgs;