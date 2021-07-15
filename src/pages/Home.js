
import Book from '../components/Book'
import {useState, useEffect, useRef} from 'react'
import axios from 'axios'
import '../css/bootstrap.css'
import Header from '../components/Header'
import Footer from '../components/Footer'


const scrollTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const Home = () => {

  const inputBookName = useRef(null);
  const [books, setBooks] = useState([])
  const [bookName, setBookName] = useState('reactjs') 
  
  useEffect(() => {

    scrollTop() 

    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookName}`)
        .then(response => setBooks(response.data['items'].filter(e => (typeof e.volumeInfo.imageLinks !== 'undefined' && typeof e.volumeInfo.description !== 'undefined'))))    
      },[bookName])

  return (
    <div>
      <Header inputBookName={inputBookName} setBookName={setBookName}/> 
        <div className="container" style={{paddingTop:"100px"}}>
          {    
            books.map(item => (
              <div key = {item.id}>
                <Book description = {{
                    'title':item.volumeInfo.title,
                    'img'  : item.volumeInfo.imageLinks.thumbnail, 
                    'text' : item.volumeInfo.description,
                    'author' : item.volumeInfo.authors,
                    'publisher' : item.volumeInfo.publisher,
                    'publishedDate' : item.volumeInfo.publishedDate
                    }}
                />
              </div> 
            ))
          }
        </div>
        <br/><br/><br/>
        <Footer/>
    </div>
  );
}

export default Home;
