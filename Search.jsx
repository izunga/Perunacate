import react from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



const Search = () => {
    return <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{marginBottom: '10px', padding: '20px',}}
        >
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Perunicate</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Search</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <h1 style={{textAlign: 'center', color:'cornsilk'}}>Pick a category to get matched with a counselor</h1>

    </div>
};

export default Search;