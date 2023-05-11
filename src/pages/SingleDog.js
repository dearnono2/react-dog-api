import React, { useState, useEffect } from 'react';
import { Link, useParams } from'react-router-dom';

import axios from 'axios';
import styled from 'styled-components';


const SingleDog = () => {
  const [dog, setDog] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${name}`)
    .then(function (response) {
        setDog(response.data);
        console.log(response);  
    }).catch(function (error) {
        // 오류발생시 실행
        console.log(error);
    }).then(function() {
        // 항상 실행
    });

  }, [name])
  return (
    <Wrapper>
      <section className="container">
        {dog.map((item) => (
          <div key={item.id}>
            <article className='img'>
              <img src={`https://cdn2.thedogapi.com/images/${item.reference_image_id}.jpg`} alt="{item.name}" />
            </article>
            <article className='text-box'>
              <h2>{item.name}</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis impedit modi laboriosam? Pariatur laudantium optio blanditiis aliquid odit iste voluptatibus.
              </p>
              <Link to="/">Back</Link>
            </article>
          </div>
        ))}
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  padding: 50px 0;
  .container {
    width: 600px;
    margin: 0 auto;
    .img {
      margin-bottom: 50px;
      width: 600px; height: 400px;
      img {
        width: 100%; height: 100%;
        object-fit: cover;
      }
    }
    .text-box {
      text-align: center;
      p {
        margin-bottom: 30px;
      }
      a {
        display: inline-block;
        width: 100px;
        padding: 10px;
        background-color: #A84448;
        text-decoration: none;
        font-size: 14px;
        color: #fff;
        border-radius: 8px;
      }
    }
  }
  `

export default SingleDog;