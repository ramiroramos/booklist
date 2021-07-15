
import Book from '../components/Book'
import {useState, useEffect, useRef} from 'react'
import axios from 'axios'
import '../css/bootstrap.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Loading from '../components/Loading'


const scrollTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const Home = () => {

  const inputBookName = useRef(null);
  const [books, setBooks] = useState([])
  const [bookName, setBookName] = useState('reactjs') 
  const [loading,setLoading] = useState(false)
  
  useEffect(() => {
    scrollTop() 
    setLoading(true)

    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookName}`)
        .then(response => setBooks(response.data['items'].filter(e => (typeof e.volumeInfo.imageLinks !== 'undefined' && typeof e.volumeInfo.description !== 'undefined'))))      
      },[bookName])

  useEffect(() => {
    setLoading(false)
  }, [books])    

  return (
    <div>
      <Header inputBookName={inputBookName} setBookName={setBookName}/> 
      <Loading
          loading={loading}
        />
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
