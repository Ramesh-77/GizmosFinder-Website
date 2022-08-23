import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const ProductContext = createContext();

export const ProductProvider = (props) => {
  const [phone, setPhone] = useState([]);
  const [laptop, setLaptop] = useState([]);
  const [headphone, setHeadphone] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    axios
      .get("http://localhost:5000/all-phone")
      .then((response) => {
        setPhone(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("http://localhost:5000/all-laptop")
      .then((response) => {
        setLaptop(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("http://localhost:5000/all-headphone")
      .then((response) => {
        setHeadphone(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <ProductContext.Provider
      value={{
        phoneValue: [phone, setPhone],
        laptopValue: [laptop, setLaptop],
        headphoneValue: [headphone, setHeadphone],
        searchVal: [searchTerm, setSearchTerm]
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};
