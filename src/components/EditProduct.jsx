import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/Form.css"; // optional if you have styles

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

  // 🔹 LOAD EXISTING PRODUCT
  useEffect(() => {
    fetch(`https://cina-designs-server.onrender.com/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setForm({
          name: data.name || "",
          price: data.price || "",
          category: data.category || "",
          material: data.material || "",
          occasion: data.occasion || "",
          description: data.description || ""
        });
      })
      .catch(() => setMessage("Failed to load product"));
  }, [id]);

  // 🔹 HANDLE INPUT CHANGE
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔹 CLIENT VALIDATION (MATCH JOI)
  const validate = () => {
    if (!form.name.trim()) return "Name is required";
    if (!form.price || isNaN(form.price)) return "Valid price required";
    return null;
  };

  // 🔹 SUBMIT EDIT
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
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(form)
        }
      );

      if (res.status === 200) {
        setMessage("Product updated successfully ✅");

        // redirect back to shop
        setTimeout(() => navigate("/shop"), 1000);
      } else {
        setMessage("Update failed ❌");
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
        <input
          name="name"
          placeholder="Product Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
        />

        <input
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
        />

        <input
          name="material"
          placeholder="Material"
          value={form.material}
          onChange={handleChange}
        />

        <input
          name="occasion"
          placeholder="Occasion"
          value={form.occasion}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
        />

        <button type="submit" className="btn">
          Update Product
        </button>
      </form>

      {message && <p className="status-msg">{message}</p>}
    </main>
  );
}

export default EditProduct;