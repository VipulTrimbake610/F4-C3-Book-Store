import { useEffect, useState } from 'react';
import './Images/Main/main.css';
import axios from 'axios';


const Main = () => {

    let [BookData, setBookData] = useState([]);
    let [bannerStatus, setBannerStatus] = useState(false);
    let [currentBook, setCurrentBook] = useState();

    useEffect(()=>{

        let arr = [];

        axios('https://www.googleapis.com/books/v1/volumes?q=harry+potter')
        .then((data)=>{
            arr.push(...data.data.items)
            axios('https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes')
            .then((data)=>{
                arr.push(...data.data.items);
                setBookData(arr)
            })
            .catch((err)=>console.log(err))
        })
        .catch(err=>console.log(err))
    },[currentBook,bannerStatus])

    function handleSideInfo(e){
        let book = e.target.parentElement;
        let sideInfo = e.target.parentElement.children[1];


        if(sideInfo.style.display === "flex"){
            sideInfo.style.display = "none"
            book.style.width = "200px";

        }else{
            sideInfo.style.display = "flex"
            book.style.width = "500px";
        }
        sideInfo.style.color = "white";
    }

    function openBanner(e){
        let book = e.target.parentElement.parentElement;
        let sideInfo = book.children[1];

        sideInfo.style.display = "none"
            book.style.width = "200px";

    }
    function bannerNowRead(){
        window.location.href = `${currentBook.volumeInfo.previewLink}`;
    }
    function bannerMoreInfo(){
        window.location.href = `${currentBook.volumeInfo.infoLink}`;
    }
    console.log(currentBook);
    return (
        <>
        {
           bannerStatus && 
           <section className='bannerDiv'>

           <section className='banner'>
                <img src={currentBook.volumeInfo.imageLinks.thumbnail} alt="" />
                <div className='addOns'>
                    <div className='titleDiv'>
                        <div className='title'>{currentBook.volumeInfo.title}</div>
                        <div className='publishOn'>Published On : {currentBook.volumeInfo.publishedDate}</div>
                    </div>
                    <div className='author'>{currentBook.volumeInfo.authors[0]}</div>
                    <div className='desc'>{currentBook.volumeInfo.description}</div>
                    <div className='smDetails'>
                        <div>Avg Rating : {4.5}</div>
                        <div>Rating Count : {currentBook.volumeInfo.ratingsCount}</div>
                        <div>Publisher : {currentBook.volumeInfo.publisher}</div>
                        <div>Language : {currentBook.volumeInfo.language}</div>
                    </div>
                    <div className='btnDiv'>
                        <button onClick={bannerNowRead}>Now Read!</button>
                        <button onClick={bannerMoreInfo}>More Info!</button>
                    </div>

                </div>
            </section>
            </section>
        }
        <main>
        {
            BookData &&
            
            BookData.map((book)=>(
                <div key={book.id} className='book' onClick={handleSideInfo}>
                    <img src={book.volumeInfo.imageLinks.thumbnail} alt="" />
                    <div style={{display:"none"}} className='sideInfo'>
                        <div className='title'>{book.volumeInfo.title}</div>
                        <div className='desc'>{book.volumeInfo.description}</div>
                        <button onClick={(e)=>{setCurrentBook(book);setBannerStatus(true); openBanner(e)}}>Now Read!</button>
                    </div>
                </div>
            ))
        }
        </main>
        </>
    )
}


export default Main;