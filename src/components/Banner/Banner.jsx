import React, {useState, useEffect} from 'react'
import "./Banner.scss"
import Carousel from 'react-bootstrap/Carousel';
import phone from "../../assets/image/phone.png"
import { apiClient } from '../../axios/apiClient';
import { useDispatch } from 'react-redux';
import { setCategory } from '../../redux/slice/productSlice'; 

function Banner() {
    const [list, setList] = useState([])
    const dispatch = useDispatch()

    async function getCategory () {
        try {
            const res = await apiClient.get("/products/categories")
          
            setList(res.data)
            
        } catch (error) {
            console.log(error);            
        }
    }

    useEffect(() => {
        getCategory()
    }, [])


    return (
        <div className='banner'>
            <div className='sidebar'>
                <ul>
                    {
                        list.map((item) => (
                            <li onClick={() => dispatch(setCategory(item.name))} key={item.slug}>{item.name}</li>
                        ))
                    }
                </ul>
            </div>
            <div className='carousel'>
                <Carousel>
                    <Carousel.Item>
                        {/* <ExampleCarouselImage text="First slide" /> */}
                        <img src={phone} alt="" />
                       
                    </Carousel.Item>
                    <Carousel.Item>
                        {/* <ExampleCarouselImage text="Second slide" /> */}
                          <img src={phone} alt="" />
                       
                    </Carousel.Item>
                    <Carousel.Item>
                        {/* <ExampleCarouselImage text="Third slide" /> */}
                          <img src={phone} alt="" />
                    
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}

export default Banner
