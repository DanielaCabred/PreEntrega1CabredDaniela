import Carrito from "./images/cart.svg"
const Cart = () => {
    return (
    <div>
        <button type="button" className="btn btn-light text-dark position-relative"> 
        <a href="#" style={{ color: "lightgrey", textDecoration: "none" }}
        onMouseOver={(e) => {
        e.target.style.color = "rgba(255, 165, 0, 1)";
        }}
        onMouseOut={(e) => {
        e.target.style.color = "lightgrey";
        }}>
        <img className="me-3" src={Carrito} alt="carrito" style={{ width: "24px", height: "24px" }} />
        <span style={{ color: "inherit" }}>Carrito</span>
    </a>

<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    1
</span>
</button>
    </div>
)
}
export default Cart;


