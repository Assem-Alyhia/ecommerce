import React, { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SubTitle from "../Utility/SubTitle.js";
import BrandCard from "./BrandCard";
import brand1 from "../../Images/brand1.png";
import brand2 from "../../Images/brand2.png";
import brand3 from "../../Images/brand3.png";

const BrandContainer = () => {
    return (
        <Container>
        <div className="admin-content-text ">كل الماركات</div>
            <Row className="my-1 justify-content-between">
            <BrandCard img={brand1} />
            <BrandCard img={brand2} />
            <BrandCard img={brand3} />
            <BrandCard img={brand2} />
            <BrandCard img={brand1} />
            <BrandCard img={brand3} />
            </Row>
        </Container>
    )
}

export default BrandContainer
