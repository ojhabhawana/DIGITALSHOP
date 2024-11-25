import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from '../Pages/Home'
import Logo from '../assets/logo.png'
import Category from '../Pages/Category'
import Details from '../Pages/Details'
import { useContext } from 'react'
import CartContext from '../Cartcontext'
import Cartlist from '../Pages/Cartlist'



function Header() {
    let { state, dispatch } = useContext(CartContext)


    return (
        <>
            <header>
                <section className='bg-secondary-subtle  py-2'>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <i className="bi-telephone bi-black"></i> 9801433555
                            </div>
                        </div>
                    </div>
                </section>
                <section className='py-2'>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <Link to="/">
                                    <img src={Logo} />
                                </Link>
                            </div>
                            <div className="col-lg-6">
                                <form className="d-flex my-4 my-lg-0" role="search">
                                    <input className="form-control me-2 p-3" type="search" placeholder="Search Here....." aria-label="Search" />
                                    <button className="btn btn-primary searchmore" type="submit"><i class="bi bi-search"></i></button>
                                </form>

                            </div>
                            <div className="col-lg-3">
                                <div className="d-flex gap-3 justify--lg-end align-items-center">
                                    <button type="button" className="btn bg-info position-relative rounded-circle p-3">
                                        <i class="bi bi-person"></i>

                                    </button>
                                    <button type="button" className="btn bg-info position-relative rounded-circle p-3">
                                        <i className="bi bi-cart"></i>
                                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                            <Link to={`/cart`}>{state.cart.length}</Link>
                                            <span className="visually-hidden">unread messages</span>
                                        </span>
                                    </button>
                                    <div>
                                        <h5 className='pb-0 mb-0'>My cart</h5>रु0</div>
                                </div>


                            </div>

                        </div>
                    </div>
                </section>
                <section>
                    <nav className="navbar navbar-expand-lg menu">
                        <div className="container">
                            <a className="navbar-brand d-flex bg-white justify-content-between px-3 rounded" href="#"><i className="bi bi-list"></i><h4 className='mb-0'>Categories</h4><i className="bi bi-caret-down-fill"></i></a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">All Brands</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Discounted products</a>
                                    </li>

                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Dealer Zone
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#">Login</a></li>
                                            <li><a class="dropdown-item" href="#">Registration</a></li>

                                        </ul>
                                    </li>

                                </ul>

                            </div>


                        </div>
                    </nav>
                </section>


            </header>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cat/:cid' element={<Category />} />
                <Route path='/details/:id' element={<Details />} />
                <Route path='/Cart' element={<Cartlist />} />
            </Routes>

        </>
    )
}

export default Header
