import { Link } from 'react-router-dom'
import emailVector from '../../assets/icons/email-vector.png'
import phoneVector from '../../assets/icons/phone-vector.png'
import bottomVector from '../../assets/icons/bottom-vector.png'
import profileVector from '../../assets/icons/profile-vector.png'
import wishlistVector from '../../assets/icons/wishlist-vector.png'
import cardVector from '../../assets/icons/card-vector.png'
import searchVector from '../../assets/icons/search-vector.png'
import { useTranslation } from "react-i18next";
import { context } from '../../state'
import { useContext } from 'react'
import './style.scss'


export default function Navigation() {

    const { t, i18n: { changeLanguage, language } } = useTranslation()
    // t('key', {name:'value'})
    const state = useContext(context)

    const handleChangeLanguage = (e) => {
        const newLanguage = language === "en" ? "ru" : "en"
        state.dispatch({ type: "CHANGE_LANG", language: newLanguage })
        changeLanguage(newLanguage);
    }

    return (
        <header>
            <nav className='main-navbar'>
                <div className="upper-nav">
                    <div className="upper-left-nav">
                        <a href="mailto:alisherxujanov163@gmail.com">
                            <img src={emailVector} width="15" height="15" alt="" />
                            <small>alisherxujanov163@gmail.com</small>
                        </a>
                        <span>
                            <img src={phoneVector} width="15" height="15" alt="" />
                            <small>(+99833) 4747477</small>
                        </span>
                    </div>
                    <div className="upper-right-nav">
                        <span className='nav-link'>
                            <Link to={"/#"} onClick={handleChangeLanguage}>
                                {t('languageName')}
                                <img src={bottomVector} alt="Vector" width={10} height={5} />
                            </Link>
                        </span>
                        <span className='nav-link'>
                            <Link to={"/#"}>
                                USD
                                <img src={bottomVector} alt="Vector" width={10} height={5} />
                            </Link>
                        </span>
                        <span className='nav-link'>
                            <Link to={"/auth"}>
                                {t('navbar.login')}
                                <img src={profileVector} alt="Vector" width={15} height={15} />
                            </Link>
                        </span>
                        <span className='nav-link'>
                            <Link to={"/wishlist"}>
                                {t('navbar.wishlist')}
                                <img src={wishlistVector} alt="Vector" width={15} height={15} />
                            </Link>
                        </span>
                        <span className='nav-link'>
                            <Link to={"/#"}>
                                <img src={cardVector} alt="Vector" width={20} height={20} />
                            </Link>
                        </span>
                    </div>
                </div>

                <div className="bottom-nav">
                    <div className="bottom-nav-wrapper">
                        <h3>
                            <Link to={"/"}>
                                Delicate Decor
                            </Link>
                        </h3>
                        <div className="bottom-nav-links">
                            <span className='nav-link'>
                                <Link to={"/#"}>
                                    Pages
                                </Link>
                            </span>
                            <span className='nav-link'>
                                <Link to={"/products"}>
                                    Products
                                </Link>
                            </span>
                            <span className='nav-link'>
                                <Link to={"/blog"}>
                                    Blog
                                </Link>
                            </span>
                            <span className='nav-link'>
                                <Link to={"/#"}>
                                    Shop
                                </Link>
                            </span>
                            <span className='nav-link'>
                                <Link to={"/#"}>
                                    Contact
                                </Link>
                            </span>
                        </div>
                        <div className="bottom-nav-searchbar">
                            <input type="search" />
                            <button>
                                <img src={searchVector}
                                    alt="Search" width={25} height={25} />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
