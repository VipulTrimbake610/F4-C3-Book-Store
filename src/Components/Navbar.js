import logo from './Images/NavIimages/Standard Collection 11.png'
import heart from './Images/NavIimages/bx_bx-book-heart.png'
import noti from './Images/NavIimages/ic_round-notifications-none.png'
import diamond from './Images/NavIimages/fluent_premium-person-20-regular.png'
import loginlogo from './Images/NavIimages/IMG20210528181544.png'
import './Images/NavCss/nav.css';
import { useState } from 'react'

const Navbar = ({setSearch}) => {
    let [searched, setSearched] = useState();

    function handleSearch(e){
        setSearch(e.target.value);
        setSearched(e.target.value);
    }

    function handleSearchBtn(){
        setSearch(searched);
    }
    return (
        <>
            <nav>
                <div className="left">
                    <img src={logo} alt="" />
                    <div>KeazoN<span>BOOKS</span></div>
                </div>
                <div className="center">
                    <div className='searchDiv'>
                        <span class="material-symbols-outlined">
                            search
                        </span>
                        <input type="text" id='iSearch' onChange={handleSearch}/>
                    </div>
                    <button className="btnSearch" onClick={handleSearchBtn}>Search</button>
                </div>
                <div className="right">
                    <img src={heart} alt="" />
                    <img src={noti} alt="" />
                    <img src={diamond} alt="" />
                    <img src={loginlogo} alt="" />
                </div>
            </nav>
        </>
    )
}


export default Navbar;