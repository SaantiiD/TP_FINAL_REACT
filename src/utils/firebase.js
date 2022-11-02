import { initializeApp } from "firebase/app";
import { collection, doc, addDoc, getFirestore, getDocs, getDoc, updateDoc, deleteDoc } from "firebase/firestore";

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "proyecto-final-react-767c1.firebaseapp.com",
    projectId: "proyecto-final-react-767c1",
    storageBucket: "proyecto-final-react-767c1.appspot.com",
    messagingSenderId: "857615199316",
    appId: "1:857615199316:web:d8af4ffcc62a4245ec91c1"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore()

// Cargar todos los productos del JSON a la BDD.

const pushProducts = async () => {
    const promise = await fetch('./json/products.json');
    const products = await promise.json();
    products.forEach(async (product) => {
        await addDoc(collection(db, "products"), {
            category: product.category,
            title: product.title,
            price: product.price,
            img: product.img,
            info: product.info,
            stock: product.stock
        })
    });
    console.log(products);
}

// Cargar las categorías del JSON a la BBD.

const pushCategories = async () => {
    const promise = await fetch('./json/categories.json');
    const categories = await promise.json();
    categories.forEach(async (category) => {
        await addDoc(collection(db, "categories"), {
            title: category.title,
            category: category.category,
            category_id: category.category_id,
            img: category.img,
            info: category.info
        })
    });
}

// Solicitar un solo producto de la BDD.

const getProduct = async (id) => {
    const product = await getDoc(doc(db, "products", id));
    const prod = [product.id, product.data()];
    return prod;
}

// Solicitar todos los productos de la BDD.

const getProducts = async () => {
    const products = await getDocs(collection(db, "products"));
    const prod = products.docs.map(product => [product.id, product.data()]);
    return prod;
}

// Solicitar todoas las categorias de la BDD.

const getCategories = async () => {
    const categories = await getDocs(collection(db, "categories"));
    const cat = categories.docs.map(category => [category.id, category.data()]);
    return cat;
}

// Actualizar un producto de la BDD, pisando sus atributos.

const updateProduct = async (id, data) => {
    const state = await updateDoc(doc(db, "products", id), data);
    return state;
}

// Eliminar un producto de la BDD.

const deleteProduct = async (id) => {
    const state = await deleteDoc(doc(db, "products", id));
    return state;
}

// Agregar un producto nuevo a la BDD.

const addProduct = async (objProd) => {
    const state = await addDoc(collection(db, "products"), {
        category: objProd.category,
        title: objProd.title,
        price: objProd.price,
        img: objProd.img,
        info: objProd.info,
        stock: objProd.stock
    });
    return state;
}

// Agregar una categoría nueva a la BDD.

const addCategory = async (objCategory) => {
    const state = await addDoc(collection(db, "categories"), {
        title: objCategory.title,
        category: objCategory.category,
        category_id: objCategory.category_id,
        img: objCategory.img,
        info: objCategory.info
    });
    return state;
}

// Crear orden de compra en la BDD.

const createOrder = async (cant, data) => {
    const date = new Date();
    const dateString = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} a las ${date.getHours()}:${date.getMinutes()} hs`;
    const orderData = await addDoc(collection(db, "purchaseOrder"), {
        name: data.name,
        last_name: data.last_name,
        dni: data.dni,
        address: data.address,
        email: data.email,
        total_price: cant,
        date: dateString
    })
    return orderData.id;
}

// Consultar una orden de compra de la BDD.

const getOrder = async (id) => {
    const orderData = await getDoc(doc(db, "purchaseOrder", id));
    const order = [orderData.id, orderData.data()];
    return order;
}

// Exporto todas las funciones.

export { pushProducts, pushCategories, getProducts, getCategories, getProduct, updateProduct, deleteProduct, addProduct, addCategory, createOrder, getOrder };