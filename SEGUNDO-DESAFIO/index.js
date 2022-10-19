const Contenedor = require("./contenedor");

const productos = new Contenedor("./productos.json");

productos.save({ title: "Monitor Gamer Samsung", price: 48999, thumbnai: "https://images.fravega.com/f300/393cba5a66fe2d29273ed1e7244f3e60.jpg" });
productos.getById(2);
productos.getAll();
// productos.deleteById(4);
// productos.deleteAll();