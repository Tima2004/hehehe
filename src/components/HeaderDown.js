import Frame from '../components/imgs/Frame.png';

function HeaderDown() {
    return(
        <div className="header-down">
            <div className="header-frame">
            <img className="img-frame" src={Frame} alt=""/>
            </div>

            <div className="header-info">
                <div className="design-and-werst">
                    Дизайн и верстка
                </div>

                <div className="lorem-ipsum">
                    Lorem Ipsum - это текст-"рыба", часто используемый в печати и 
                    вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов 
                    на латинице с начала XVI века.
                    
                </div>

                <div className="header-btn">
                    <a href="#" className="header-button">НАПИСАТЬ МНЕ</a>
                </div>
            </div>
        </div>    
    );
}

export default HeaderDown;