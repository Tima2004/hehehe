import process from '../components/imgs/process.jpg';

function Proccess() {
    return(
        <div className="process">
                <div className="container">
                    <div className="process-info">
                        <div className="about-me-text">
                            Как я работаю

                            <div className="lorem-ipsum-2">
                                Lorem Ipsum - это текст-"рыба", часто используемый в печати и 
                                вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов 
                                на латинице с начала XVI века.
                            </div>
                        </div>

                        <div className="process-img">
                            <img className="process-process-img" src={process} alt="process"/>
                        </div>
                    </div>
                    
                </div>

        </div>
    );
}

export default Proccess;