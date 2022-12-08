import burger_img from '../components/imgs/burger-img.png';

function HeaderLine() {
    return(
        <div className="header-line">
                    <div className="header-logo">
                    </div>

                    <div className="nav">
                        <a className="nav-item" href="#">ГЛАВНАЯ</a>
                        <a className="nav-item" href="#">ОБ АВТОРЕ</a>
                        <a className="nav-item" href="#">РАБОТЫ</a>
                        <a className="nav-item" href="#">ПРОЦЕСС</a>
                        <a className="nav-item scroll-to-massage" data-massage=".need-web-site" href="#">КОНТАКТЫ</a>
                    </div>

                    <div className="burger-menu">
                        <button id="burger">
                            <img className="burger" src={burger_img} alt=""/>
                        </button>

                        <div id='menu' className="burger-slide disp">
                            <a className="nav-item block" href="#">ГЛАВНАЯ</a>
                            <a className="nav-item block" href="#">ОБ АВТОРЕ</a>
                            <a className="nav-item block" href="#">РАБОТЫ</a>
                            <a className="nav-item block" href="#">ПРОЦЕСС</a>
                            <a className="nav-item block scroll-to-massage" data-massage=".need-web-site" href="#">КОНТАКТЫ</a>
                        </div>

                    </div>
        </div>
    );
}

export default HeaderLine;