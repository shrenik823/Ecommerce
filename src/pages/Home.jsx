import React, { useEffect, useState, useContext } from 'react'
import Header from '../common/Header'
import axios from 'axios';
import { BsBookmarkHeartFill } from "react-icons/bs";
import { cartContext } from '../Context/MainContext';
import { toast } from 'react-toastify';
import Footer from '../common/Footer';

export default function Home() {
    const [allproducts,setallproducts]=useState([])
    const notify = () => toast("Product added");


            let {cart,setcart} = useContext(cartContext);

            let addtocart = (product) => {

                let productObj = {
                id : product.id,
                title : product.title,
                price : product.price,
                thumbnail : product.thumbnail,
                quantity : 1
                }

                let finalCart = [...cart,productObj];

                setcart(finalCart);

            }

            useEffect(
                () => {
                console.log(cart);
                },[cart]
            )

    useEffect(()=>{
        axios.get('https://dummyjson.com/products')
            .then(function (response) {
                // handle success
                setallproducts(response.data.products);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    },[])
    // console.log(allproducts)
  return (
    <>
        <Header/>
        <div className='container-fluid'>
            <div className='container mx-auto'>
                <div className='row my-5'>
                    <div className='grid grid-cols-4 gap-5 gy-5 '>
                    {
                        allproducts.map((v,i)=>{
                            return(
                                
                                    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
                                        <a href="#">
                                            <img className="rounded-t-lg img-fluid mx-auto" src={v.thumbnail}  alt="" />
                                        </a>
                                        <div class="p-5">
                                            <a href="#">
                                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{v.title}</h5>
                                            </a>
                                            <div>
                                                <div className='flex justify-between items-center'>
                                                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{v.price}</p>
                                                        <BsBookmarkHeartFill className='text-white cursor-pointer' onClick={() => addtocart(v)}/>
                                                </div>
                                                    <button className=" inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  " onClick={notify}    >Add to Cart</button>
                                            </div>
                                        </div>
                                    </div>
                               
                            )
                        })
                    }
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}
