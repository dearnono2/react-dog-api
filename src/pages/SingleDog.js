import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import axios from "axios";
import styled from "styled-components";

const SingleDog = () => {
  const [dog, setDog] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    axios
      .get(`https://api.thedogapi.com/v1/breeds/search?q=${name}`)
      .then(function (response) {
        setDog(response.data);
        console.log(response);
      })
      .catch(function (error) {
        // 오류발생시 실행
        console.log(error);
      })
      .then(function () {
        // 항상 실행
      });
  }, [name]);
  return (
    <Wrapper>
      <section className="container">
        {dog.map((item) => (
          <div key={item.id}>
            <article className="img">
              <img
                src={`https://cdn2.thedogapi.com/images/${item.reference_image_id}.jpg`}
                alt="{item.name}"
              />
            </article>
            <article className="text-box">
              <h2>{item.name}</h2>
              <ul>
                <li>
                  <span>Origin: </span>
                  {item.origin}
                </li>
                <li>
                  <span>Life: </span>
                  {item.life_span}
                </li>
                <li>
                  <span>Temperament: </span>
                  {item.temperament}
                </li>
              </ul>
              <Link to="/">Back</Link>
            </article>
          </div>
        ))}
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 50px 0;
  .container {
    width: 600px;
    margin: 0 auto;
    .img {
      margin-bottom: 50px;
      width: 600px;
      height: 400px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .text-box {
      text-align: center;
      h2 {
        font-size: 32px;
        margin-bottom: 36px;
      }
      ul {
        margin-bottom: 30px;
        text-align: left;
        li {
          list-style: none;
          margin-bottom: 18px;
          font-size: 14px;
          span {
            display: block;
            font-size: 18px;
            font-weight: 600;
          }
        }
      }
      a {
        display: inline-block;
        width: 100px;
        padding: 10px;
        margin: 30px 0;
        background-color: #a84448;
        text-decoration: none;
        font-size: 14px;
        color: #fff;
        border-radius: 8px;
      }
    }
  }
`;

export default SingleDog;
