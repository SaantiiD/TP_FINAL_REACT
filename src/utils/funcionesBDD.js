// import { pushProducts, pushCategories, getCategories, addProduct, updateProduct, deleteProduct, getProduct, addCategory, createOrder, getOrder } from "./firebase";

const newProduct = {
    "category": "empanadas",
    "title": "Empanada de carne",
    "price": 200,
    "img": "https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/09/07175639/semana-empanadas-4.jpg",
    "info": "Empanadita buenarda de carne",
    "stock": 10
}

const newCategory = {
    "title": "Empanadas",
    "category": "empanadas",
    "category_id": 5,
    "img": "https://www.laespanolaaceites.com/wp-content/uploads/2019/05/empanadas-de-matambre.jpg",
    "info": "Las mejores empanadas del condado."
}

// pushProducts();
// pushCategories();
// addProduct(newProduct).then(state => { console.log(state); });
// addCategory(newCategory).then(state => { console.log(state); });
// deleteProduct("Tw51dNw2naJYgXEwA0ik");

// getProduct("1fPWNsIIDr5g9HhDa7js").then(product => {
//    const prod = product[1];
//    prod.stock -= 5;
//    updateProduct("1fPWNsIIDr5g9HhDa7js", prod);
// })

// getProduct("1fPWNsIIDr5g9HhDa7js").then(product => {
//    console.log(product);
// })

// createOrder(2500, "Pepito", "Perez", 12121212, "pepi@gmail.com", "Calle False 123").then(order => {
//    console.log(order);
// })


// getOrder("7l3ytPNC1XI1HAtOu6du").then(order => {
//    console.log(order);
// })