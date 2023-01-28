import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { schema } from "../../Schema/formSchema";
import { useForm } from 'react-hook-form';



const AddData = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({ resolver: yupResolver(schema),});
  const onSubmit = (data) => {
    console.log(data)
    addData()
  };
  const [product, setProduct] = useState([]);

  const [state, setState] = useState({
    image: "",
    title: "",
    text: "",
  });
  const getData = async () => {
    const res = await axios.get("http://localhost:8080/product");
    setProduct(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  // const [id, setId] = useState(undefined);

  const addData = async () => {
    

    if (!state.image || !state.title || !state.text) return;

    await axios.post("http://localhost:8080/product", state);
    getData();
  };

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });

  };
  return (
    <div style={{ padding: "50px", marginTop: "100px" }}>

      <div>
        <form style={{ padding: "20px", display: "flex", justifyContent: "center", gap: 10 }} onSubmit={handleSubmit(onSubmit)}>
          <input style={{ padding: 10 }}
            name="image"
            type="url"
            placeholder="image"
            {...register('image')}
            onChange={handleChange}
          />{errors.image && <p>This field is required</p>}
          <input style={{ padding: 10 }}
            name="title"
            type="text"
            placeholder="title"
            {...register('title')}
            onChange={handleChange}
          />{errors.title && <p>This field is required</p>}
          <input style={{ padding: 10 }}
            name="text"
            type="text"
            placeholder="text"
            {...register('text')}
            onChange={handleChange}
          />{errors.text && <p>This field is required</p>}


          <button style={{ padding: "10px 20px", backgroundColor: "green", color: "white", border: "none", borderRadius: 10 }}>add</button>

        </form>
      </div>
    </div>
  )
}

export default AddData