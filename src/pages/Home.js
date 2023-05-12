import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import styled from "styled-components";

const Home = () => {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    // callback 을 사용할 때,
    axios
      .get("https://api.thedogapi.com/v1/breeds")
      .then(function (response) {
        // response
        setDogs(response.data);
        console.log(response);
      })
      .catch(function (error) {
        // 오류발생시 실행
        console.log(error);
      })
      .then(function () {
        // 항상 실행
      });
  }, []);

  return (
    <Wrapper>
      {!dogs ? (
        <section className="loading">
          <h1>Loading...</h1>
        </section>
      ) : (
        <section className="container">
          <h2>{dogs.length} Dogs Are Here!</h2>
          <div className="inner">
            {dogs.map((dog) => (
              <Link to={`/${dog.name}`} className="dog-item" key={dog.id}>
                <div className="img">
                  <img src={dog.image.url} alt={dog.name} />
                </div>
                <h3>{dog.name}</h3>
                <p>Bred For: {dog.bred_for}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #edf1d6;
  .loading {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100%;
    height: 100%;
    background: #eee;
    h1 {
      font-size: 52px;
    }
  }
  .container {
    max-width: 1180px;
    width: 100%;
    padding: 80px 0 30px;
    margin: 0 auto;
    h2 {
      font-size: 38px;
      text-align: center;
      margin-bottom: 100px;
      color: #40513b;
    }
    .inner {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 3%;
      .dog-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 25%;
        text-align: center;
        padding: 20px;
        margin-bottom: 50px;
        background-color: #fffaf4;
        box-sizing: border-box;
        text-decoration: none;
        cursor: pointer;
        transition: all.5s;
        &:hover {
          transform: translateY(-10px);
        }
        .img {
          width: 80%;
          height: 200px;
          border-radius: 50%;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        h3 {
          margin-bottom: 10px;
          /* color: #609966; */
          color: #40513b;
        }
        p {
          font-size: 14px;
          margin-top: 0;
          color: #40513b;
        }
      }
    }
  }
`;
export default Home;
