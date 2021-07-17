import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt="home-img"
            />

            <div className="home__row">
                <Product
                    id="12345"
                    title="Introduction to Algorithms"
                    price={11.96}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/I/41VndKVtiXL._SX198_BO1,204,203,200_QL40_FMwebp_.jpg"
                />

                <Product
                    id="12346"
                    title="Introduction to Algorithms"
                    price={16.96}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/I/41VndKVtiXL._SX198_BO1,204,203,200_QL40_FMwebp_.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                    id="12347"
                    title="Introduction to Algorithms"
                    price={18.96}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/I/41VndKVtiXL._SX198_BO1,204,203,200_QL40_FMwebp_.jpg"
                />

                <Product
                    id="12348"
                    title="Introduction to Algorithms"
                    price={19.96}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/I/41VndKVtiXL._SX198_BO1,204,203,200_QL40_FMwebp_.jpg"
                />

                <Product
                    id="12349"
                    title="Introduction to Algorithms"
                    price={10.96}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/I/41VndKVtiXL._SX198_BO1,204,203,200_QL40_FMwebp_.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                    id="12344"
                    title="Introduction to Algorithms"
                    price={21.96}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/I/41VndKVtiXL._SX198_BO1,204,203,200_QL40_FMwebp_.jpg"
                />
            </div>
            
        </div>
    )
}

export default Home
