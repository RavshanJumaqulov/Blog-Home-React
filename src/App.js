import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div className="container-fluid container-lg px-4">
            <a className="navbar-brand m-0 h1">Start Bootstrap</a>
            <button type='button'
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              className="navbar-toggler"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id='navbarNav'>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a href="#" className="nav-link">Home</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">About</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">Contact</a>
                </li>
                <li className="nav-item active">
                  <a href="#" className="nav-link active">Blog</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <section className='bg-light p-4 mb-4'>
        <div className="container d-flex justify-content-center align-items-center">
          <div className="row p-5">
            <div className='h2 d-block col-12 text-center'>Wellcome to Blog Home!</div>
            <div className='col-12 text-center'>A Bootstrap 5 starter layout for your next blog homepage</div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid container-lg px-4">
          <div className="row">
            <div className="col-lg-8">
              <div className="card mb-4">
                <a href="#">
                  <img src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg" alt="" className="card-img-top" />
                </a>
                <div className="card-body">
                  <div className="small text-muted">January 1, 2022</div>
                  <h2>
                    Featured Post Title
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!
                  </p>
                  <a href="#" className="btn btn-primary">Read more</a>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="card mb-4">
                    <a href="#">
                      <img src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg" alt="" className="card-img-top" />
                    </a>
                    <div className="card-body">
                      <div className="small text-muted">January 1, 2022</div>
                      <h2>
                      Post Title
                      </h2>
                      <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur doloribus accusamus dicta ipsum esse molestiae quod praesentium, debitis nesciunt libero earum, perspiciatis molestias quis natus rerum saepe. Ab, voluptate non?
                      </p>
                      <a href="#" className="btn btn-primary">Read more</a>
                    </div>
                  </div>
                  <div className="card mb-4">
                    <a href="#">
                      <img src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg" alt="" className="card-img-top" />
                    </a>
                    <div className="card-body">
                      <div className="small text-muted">January 1, 2022</div>
                      <h2>
                      Post Title
                      </h2>
                      <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eaque at recusandae iusto id rem veritatis consequatur inventore distinctio sed. Laudantium, minima vitae odio illo optio doloremque animi at nostrum.
                      </p>
                      <a href="#" className="btn btn-primary">Read more</a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="card mb-4">
                    <a href="#">
                      <img src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg" alt="" className="card-img-top" />
                    </a>
                    <div className="card-body">
                      <div className="small text-muted">January 1, 2022</div>
                      <h2>
                      Post Title
                      </h2>
                      <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.
                      </p>
                      <a href="#" className="btn btn-primary">Read more</a>
                    </div>
                  </div>
                  <div className="card mb-4">
                    <a href="#">
                      <img src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg" alt="" className="card-img-top" />
                    </a>
                    <div className="card-body">
                      <div className="small text-muted">January 1, 2022</div>
                      <h2>
                      Post Title
                      </h2>
                      <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.
                      </p>
                      <a href="#" className="btn btn-primary">Read more</a>
                    </div>
                  </div>
                </div>
              </div>
              <nav aria-label="Pagination">
                <hr className="my-0" />
                <ul className="pagination justify-content-center my-4">
                  <li className="page-item disabled">
                    <a href="#" className="page-link">Never</a>
                  </li>
                  <li className="page-item active">
                    <a href="#" className="page-link">1</a>
                  </li>
                  <li className="page-item">
                    <a href="#" className="page-link">2</a>
                  </li>
                  <li className="page-item">
                    <a href="#" className="page-link disabled">...</a>
                  </li>
                  <li className="page-item">
                    <a href="#" className="page-link">15</a>
                  </li>
                  <li className="page-item">
                    <a href="#" className="page-link">Older</a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-header">Search</div>
                <div className="card-body">
                  <div className="input-group">
                    <input type="text" name="" id="" className='form-control' placeholder='Enter search term...' aria-describedby='button-search' />
                    <button type='button' className="btn btn-primary" id='button-search'>
                      Go!
                    </button> 
                  </div>
                </div>
              </div>

              <div className="card mb-4">
                <div className="card-header">
                  Categories
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-6 pb-0">
                      <ul className='list-unstyled mb-0'>
                        <li>
                          <a href="#">Web Design</a>
                        </li>
                        <li>
                          <a href="#">Html</a>
                        </li>
                        <li>
                          <a href="#">Freebies</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-6 pb-0">
                      <ul className='list-unstyled mb-0'>
                        <li>
                          <a href="#">Java Script</a>
                        </li>
                        <li>
                          <a href="#">CSS</a>
                        </li>
                        <li>
                          <a href="#">Tutorials</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card mb-4">
                <div className="card-header">Site Widget</div>
                <div className="card-body">
                You can put anything you want inside of these side widgets. They are easy to use, and feature the Bootstrap 5 card component!
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>
      <section className="bg-dark py-5">
        <div className="conteiner">
          <p className="m-0 text-center text-white">Copyright © Your Website 2022</p>
        </div>
      </section>
    </div>
  );
}

export default App;
