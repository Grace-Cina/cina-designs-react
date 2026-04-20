import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/AddProduct.css";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    material: "",
    occasion: "",
    description: ""
  });

  const [message, setMessage] = useState("");

  // 🔹 LOAD PRODUCT
  useEffect(() => {
    fetch(`https://cina-designs-server.onrender.com/api/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setForm({
          name: data.name || "",
          price: data.price || "",
          category: data.category || "",
          material: data.material || "",
          occasion: data.occasion || "",
          description: data.description || ""
        });
      })
      .catch(() => setMessage("Failed to load product ❌"));
  }, [id]);

  // 🔹 HANDLE INPUT
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔹 VALIDATION (FIXED)
  const validate = () => {
    if (!form.name.trim()) return "Name is required";
    if (!form.price.trim()) return "Price is required";
    if (!form.description.trim()) return "Description required";
    return null;
  };

  // 🔹 SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    const error = validate();
    if (error) {
      setMessage(error);
      return;
    }

    try {
      const res = await fetch(
        `https://cina-designs-server.onrender.com/api/products/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form)
        }
      );

      if (res.ok) {
        setMessage("Product updated successfully ✅");
        setTimeout(() => navigate("/shop"), 1000);
      } else {
        const data = await res.json();
        setMessage(data.error || "Update failed ❌");
      }
    } catch (err) {
      console.error(err);
      setMessage("Server error ❌");
    }
  };

  return (
    <main className="form-page">
      <h2>Edit Product</h2>

      <form onSubmit={handleSubmit} className="form">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Product Name" />
        <input name="price" value={form.price} onChange={handleChange} placeholder="Price (ex: $25.00)" />
        <input name="category" value={form.category} onChange={handleChange} placeholder="Category" />
        <input name="material" value={form.material} onChange={handleChange} placeholder="Material" />
        <input name="occasion" value={form.occasion} onChange={handleChange} placeholder="Occasion" />
        <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" />

        <button type="submit" className="btn">Update Product</button>
      </form>

      {message && <p className="status-msg">{message}</p>}
    </main>
  );
}

export default EditProduct;