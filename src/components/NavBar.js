import './navbar.css';

export default function NavBar () {
    return (
        <div>
        <nav id="navbar" class="">
        <div class="nav-wrapper">
            
            <div class="logo">
            
            <a href="#"><img src="../images/logo2.png" /></a>
            </div>

            
            <ul id="menu">
                <li><a href="#home">Acceuil</a></li>
                <li><a href="#services">Nos Activites</a></li>
                <li><a href="#about">Services</a></li>
                <li><a href="#contact">Emplacement</a></li>
                <li><a href="#contact">Contactez-Nous</a></li>
            </ul>
            
        </div>
        </nav>


        
        <div class="menuIcon">
        <span class="icon icon-bars"></span>
        <span class="icon icon-bars overlay"></span>
        </div>


        <div class="overlay-menu">
        <ul id="menu">
            <li><a href="#home">Acceuil</a></li>
            <li><a href="#services">Nos Activites</a></li>
            <li><a href="#about">Services</a></li>
            <li><a href="#contact">Emplacement</a></li>
            <li><a href="#contact">Contactez-Nous</a></li>
        </ul>
        </div>
        </div>
    )
}