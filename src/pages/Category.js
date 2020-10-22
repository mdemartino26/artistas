import React from 'react'
import { useParams } from "react-router-dom";
import Layout from '../containers/Layout'
import MainCategory from '../components/MainCategory'


const Category = () => {

    const { catId } = useParams();

    return (
        <div className="App">
            <Layout />
            <MainCategory catId={catId}/>
            <Layout />
        </div>
    )
}

export default Category;