import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./services.scss"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const OurServices = () => {
    const [product, setProduct] = useState([]);

    const getData = async () => {
        const res = await axios.get("http://localhost:8080/product");
        setProduct(res.data);
      };
    
      useEffect(() => {
        getData();
      }, []);
    
      const deleteData = async (id) => {
        await axios.delete(`http://localhost:8080/product/${id}`);
        console.log(id);
        getData();
      };

  return (
    <div className='services-wrapper'>
        <div>
            <h1>Our Services</h1>

        </div>
        <div><Link to="/about">Add</Link></div>
        <div className='servicesCard-wrapper'>
        {
            product?.sort((a, b) => a.id - b.id)
              ?.map((products) => (
                <div key={products._id} className="card-item">
                  <Card sx={{ maxWidth: 345 }} >

                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        <img style={{width:"100%"}} src={products.image} alt="" />

                      </Typography>
                      <Typography gutterBottom variant="h5" component="div">
                        <span style={{ margin: 20 }}>{products.title}</span>

                      </Typography>
                      <Typography gutterBottom variant="h5" component="div">
                        <span style={{ margin: 20 }}>{products.text}</span>

                      </Typography>
                   
                    </CardContent>
                    <CardActions>
                      <button className="trend-btn" style={{ margin: 20 }} onClick={() => deleteData(products._id)}>delete</button>
                    </CardActions>
                  </Card>
                </div>
              ))}

        </div>
    </div>
  )
}

export default OurServices