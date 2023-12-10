"use client"
import React,{useState,useEffect} from 'react'
import Header from '@/Components/Header'
import axios from 'axios'

const page = () => {
    const [Images,setImages] = useState([]);

    useEffect (() => {
        getImages()
    }, [])

    const getImages = async() => {
        try {
            const response = await axios.get("https://picsum.photos/v2/list")
            let data = response.data
           {/*} console.log(data)  */}
            setImages(data)
            console.log(Images)  //array ata h 30 images ka
        } catch (error) {
            console.error("Error Fetching images")
        }
        
    } ;
    return (
        <>
            <button onClick={getImages} className='px-5 py-3 bg-green-700 text-white font-bold'>Get Images</button>
            <div className='p-10'>
                {Images.map((elem,i) => {
                    return <img 
                        key={i}
                        src={elem.download_url}
                        width={300}    
                        height={300}
                        className="m-10 rounded inline-block"
                    /> 

                })}
            </div>

            {/*<Header/>     */}
            {/*<h1>This is home page</h1>   */}
            
            {/*<a href='/About'>About</a>*/}
            {/*<a href='/Product'>Product</a>*/}
            {/*<a href='/Courses'>Courses</a> */}
            {/*<Link href="/About">About</Link> */}
            {/*<Link href="/Product">Product</Link> */}
            {/*<Link href="/Courses">Courses</Link>   */}     


        </>
    )
}

export default page

