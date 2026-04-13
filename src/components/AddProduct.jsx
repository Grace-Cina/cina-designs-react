import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AddProduct.css';

function AddProduct() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: '',
    material: '',
    occasion: '',
    description: '',
    image: ''
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  // 🔹 Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // 🔹 Handle image upload + preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const previewURL = URL.createObjectURL(file);
      setImagePreview(previewURL);

      // Store image path (matches your server setup)
      setFormData({
        ...formData,
        image: `/images/${file.name}`
      });
    }
  };

  // 🔹 Validation (matches Joi)
  const validate = () => {
    let newErrors = {};

    if (!formData.name || formData.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    if (!formData.price) {
      newErrors.price = "Price is required";
    }

    if (!formData.description || formData.description.length < 5) {
      newErrors.description = "Description must be at least 5 characters";
    }

    return newErrors;
  };

  // 🔹 Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const res = await fetch('https://cina-designs-server.onrender.com/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!res.ok) {
        throw new Error('Failed to add product');
      }

      setSuccess(true);

      // redirect after success
      setTimeout(() => {
        navigate('/shop');
      }, 1200);

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className="add-product-page">
      <form className="add-product-form" onSubmit={handleSubmit}>
        <h1>Add New Product</h1>

        <input
          name="name"
          placeholder="Product Name"
          onChange={handleChange}
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <input
          name="price"
          placeholder="Price"
          onChange={handleChange}
        />
        {errors.price && <p className="error">{errors.price}</p>}

        <input
          name="category"
          placeholder="Category"
          onChange={handleChange}
        />

        <input
          name="material"
          placeholder="Material"
          onChange={handleChange}
        />

        <input
          name="occasion"
          placeholder="Occasion"
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
        />
        {errors.description && <p className="error">{errors.description}</p>}

        {/* 🔥 IMAGE UPLOAD */}
        <label className="file-upload">
          Choose Image
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </label>

        {/* 🔥 IMAGE PREVIEW */}
        {imagePreview && (
          <div className="image-preview">
            <img src={imagePreview} alt="Preview" />
          </div>
        )}

        <button type="submit">Add Product</button>

        {success && (
          <p className="success">Product added successfully!</p>
        )}
      </form>
    </main>
  );
}

export default AddProduct;