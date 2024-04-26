import React from 'react'
import Slider from '../../Components/Home/Slider';
import HomeCategory from '../../Components/Home/HomeCategory';
import CardProductsContainer from '../../Components/Product/CardProductContaner';
import DiscountSection from '../../Components/Home/DiscountSection';
import BrandFeatured from '../../Components/Brand/BrandFeatured';

const HomePage = () => {
    return (
        <div  className='font' style={{minHeight:'670px'}}>
            <Slider/>
            <HomeCategory/>
            <CardProductsContainer title='الاكثر مبيعا' btntitle="المزيد" pathText='products'/>
            <DiscountSection/>
            <CardProductsContainer title='احدث الازياء ' btntitle="المزيد" pathText='products'/>
            <BrandFeatured title='احدث الازياء ' btntitle="المزيد" />
        </div>
    )
}

export default HomePage
