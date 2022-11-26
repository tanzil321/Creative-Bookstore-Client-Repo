import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';



const AddProduct = () => {
    // const { register, handleSubmit, formState: { errors } } = useForm();
    const{user,data}= useContext(AuthContext)
    const onSubmit = event =>{
        
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const price = form.price.value;
    const displayname = form.displayname.value;
    const location = form.location.value;
    const year = form.year.value;
    const description = form.description.value;
    const category_name = form.category_name.value
     const addedproduct = {
    name,
    email,
    phone,
    price,
    displayname,
    location,
    year,
    description,
    category_name
   }
   fetch('http://localhost:5000/bookOptions',{
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(addedproduct)
        })
        .then(res=> res.json())
        .then(data=>{
            console.log(data);
            if(data.acknowledged){
                
                toast.success('Product Added')
                
            }
            else{
                toast.error(data.message)
            }
        })
    }
    
    
  
   
    
    return (
        <div className='w-96 p-7'>
        <h2 className="text-4xl">Add A Product</h2>
        <form onSubmit={onSubmit} className='grid grid-cols-1 gap-3 mt-10'>
        <input name="displayname" type="text" defaultValue={user?.displayName} disabled  placeholder="Your Name"  className="input w-full input-bordered" />
                    <input name="email" type="email" defaultValue={user?.email}  disabled  placeholder="Email Address" className="input w-full input-bordered" />
                    <input name="name" placeholder="Product Name" type="text" defaultValue={data.name}  className="input w-full input-bordered " />
                    <input name="price" type="text" defaultValue={data.price}   placeholder="Price"  className="input w-full input-bordered" />
                    
                    <input name="phone" type="text" defaultValue={data.phone} placeholder="Phone Number" className="input w-full input-bordered" />
                    <input name="location" type="text" placeholder="Location" className="input w-full input-bordered" />
                    <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Condition</span></label>
                    <select 
                    className="select input-bordered w-full max-w-xs">
                        
                        <option value="excellent">Excellent</option>
                        <option value="good">Good</option>
                        <option value="fair">Fair</option>
                        
                    </select>
                </div>
                    <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Catagory</span></label>
                    <select 
                    className="select input-bordered w-full max-w-xs">
                        
                        <option value="used">Used</option>
                        <option value="new">New</option>
                        
                    </select>
                </div>
                <input name="year" type="text"  placeholder="Purchased Year" className="input w-full input-bordered" />
                <input name="category_name"  type="text" placeholder="Category Name" className="input w-full input-bordered" />
                <input name="description" type="text" placeholder="Description" className="input w-full input-bordered" />
                    <br />
                    <button className='btn btn-accent w-full' type="submit" value="Submit">Submit</button> 
                </form>
    </div>
    );
};

export default AddProduct;