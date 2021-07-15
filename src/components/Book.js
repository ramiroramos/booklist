import '../css/bootstrap.css'
import '../css/book.css'


const  formatDate = (date) => {
  const newDate = new Date(date)
  return `${((newDate.getDate() ))}/${((newDate.getMonth() + 1))}/${newDate.getFullYear()}`
}

const Book = ({description}) => { 

  return (
    <div className="row" style={{paddingTop:"25px"}}>
        <div class="col">
            <div className="card">
                <img className="card-img-top img" src={description.img} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{description.title}</h5>
                    <p className="card-text"><b>Escritor:</b> {description.author}</p>
                    <p className="card-text"><b>Editora:</b> {description.publisher}</p>
                    <p className="card-text"><b>Lançamento:</b> {formatDate(description.publishedDate)}</p>
                    <p className="card-text">{description.text}</p>
                    <p className="card-text"><a className="btn btn-outline-success" href={`https://www.amazon.com.br/s?k=${description.title}`} target="_blank">Comprar</a></p>
                </div>
            </div>
        </div>    
    </div>
  )  

}

export default Book


