import '../css/book.css'

const Header = ({inputBookName,setBookName}) => {
    return (

        <nav class="navbar navbar-expand-lg py-3 navbar-dark bg-dark shadow-sm fixed-top">
            <div class="container">
                <input ref={inputBookName} onKeyDown={e => (e.key === 'Enter' ? setBookName(e.target.value) : '')} className="form-control" type="text"/>
                <button class="btn btn-outline-primary my-2 my-sm-0" onClick={e => (setBookName(inputBookName.current.value))} type="button">Buscar</button>
            </div>
        </nav> 
    )
}

export default Header