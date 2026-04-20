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
      .catch(() => setMessage("Failed to load product ❌"));
  }, [id]);

  // 🔹 HANDLE INPUT CHANGE
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔹 VALIDATION (MATCHES YOUR BACKEND)
  const validate = () => {
    if (!form.name.trim()) return "Name is required";
    if (!form.price.trim()) return "Price is required";
    if (!form.description.trim()) return "Description required";
    return null;
  };

  // 🔹 SUBMIT EDIT (FIXED)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const error = validate();
    if (error) {
      setMessage(error);
      return;
    }

    // 🔥 FIX: ensure price is a STRING like "$45.00"
    const formattedPrice = form.price.startsWith("$")
      ? form.price
      : `$${form.price}`;

    const updatedProduct = {
      ...form,
      price: formattedPrice
    };

    try {
      const res = await fetch(
        `https://cina-designs-server.onrender.com/api/products/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(updatedProduct)
        }
      );

      const data = await res.json();

      if (res.ok) {
        setMessage("Product updated successfully ✅");

        setTimeout(() => {
          navigate("/shop");
        }, 1000);
      } else {
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
        <input
          name="name"
          placeholder="Product Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          name="price"
          placeholder="Price (ex: $45.00)"
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