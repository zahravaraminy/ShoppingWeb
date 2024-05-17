
import React from 'react'
import styled from "styled-components"
import {categories} from "../pages/data"
import CategoryItem from './CategoryItem'

const Container=styled.div`
display: flex;
padding: 20 px;
justify-content: space-between;
`
const Categories = () => {
  return (
    <Container>
      {categories.map(item=>(
        <CategoryItem item={item} key={item.key}/>
      ))}
    </Container>
  );
};

export default Categories;
