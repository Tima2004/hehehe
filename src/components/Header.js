import HeaderDown from './HeaderDown';
import HeaderLine from './HeaderLine';

function Header() {
    return (
        <div className="header">
            <div className="container">
                < HeaderLine />

                <HeaderDown />
                
            </div> 
        </div>
    );
}

export default Header;