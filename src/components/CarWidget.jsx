import cart from "../assets/order.png";

export const CarWidget = () => {
    return (
    <> 
        <img src={cart} alt="carrito compras" height={38}/>
        <span>2</span>
    </>
    );
};