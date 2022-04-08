import React, { Fragment,useEffect,useState } from 'react'
import { Container } from 'reactstrap';
import CardCars from '../../components/Card/CardCars';
import FormPencarian from './../../components/FormPencarian/FormPencarian';
import axios from 'axios';

function Search() {
  const [dataList, setDataList] = useState([]);
  useEffect(() => {
    axios.get('https://rent-cars-api.herokuapp.com/admin/car')
      .then(res => {
        console.log(res.data);
        setDataList(res.data);
      })
  },[])
  return (
    <Fragment>
      <Container fluid style={{backgroundColor: '#F1F3FF', height:'266px'}}>
      </Container>
        <FormPencarian/>
      <Container>
        <CardCars
         />
        {dataList.map(item =>(
          <CardCars
          id={item?.id}
          name={item?.name}
          image={item?.image}
          price={item?.price}
          className="m-5"
          />
          ))}
       </Container>
    </Fragment>
  )
}

export default Search;