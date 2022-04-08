import React, { Fragment, useEffect, useState } from "react";
import { Container } from "reactstrap";
import CardCars from "../../components/Card/CardCars";
import FormPencarian from "./../../components/FormPencarian/FormPencarian";
import axios from "axios";
import { useParams } from "react-router-dom";

function Search() {
  const [dataList, setDataList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const params = useParams();
  const getData = async () => {
    try {
      const res = await axios.get(
        "https://rent-cars-api.herokuapp.com/admin/car"
      );
      setDataList(res.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setIsLoading(true);
    getData();
  }, []);
  return (
    <Fragment>
      <Container
        fluid
        style={{ backgroundColor: "#F1F3FF", height: "266px" }}
      ></Container>
      <FormPencarian />
      <Container>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div>
            {dataList?.map((item) => {
              return (
                <CardCars
                  id={item?.id}
                  name={item?.name}
                  image={item?.image}
                  price={item?.price}
                />
              );
            })}
          </div>
        )}
      </Container>
    </Fragment>
  );
}

export default Search;
