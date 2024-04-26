import React from 'react'
import BrandContainer from '../../Components/Brand/BrandContainer'
import PaginationCompontent from '../../Components/Utility/Pagination'
import { Container } from 'react-bootstrap'

const AllBrandPage = () => {
    return (
        <Container style={{ minHeight: "670px" }}>
            <BrandContainer />
            <PaginationCompontent />
        </Container>
    )
}

export default AllBrandPage
