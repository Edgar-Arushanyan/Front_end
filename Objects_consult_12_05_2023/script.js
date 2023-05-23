const eComStore = {
    products: [
        { 
            id: 1, 
            productName: 'Product A',
            price: 10,
            category: 'A',
            quantity: 5
        }
    ], 
    categories: [ {A: 'A'}, {B: 'B'} ],
    users: [ {
        id: 1,
        nickName: 'user A',
        email: 'user@example.com',
        password: 'password'
    } ],

    addProduct(productName, price, category, quantity) {
        const id = this.products.length + 1;
        const product = { id, productName, price, category, quantity};
        if (id && productName && price && category && quantity) {
            this.products.push(product);
        }
        
    },
    removeProduct(id) {
        const index = this.products.findIndex(p => p.id === id);
        if (index !== -1) {
            this.products.splice(index, 1);
        }
    },

    getProductById(id) {
        return this.products.find(p => p.id === id);
    },

    getProductByCategory(category) {
        return this.products.filter(p => p.category === category);
    },

    createUser(nickName, email, password) {
        const id = this.users.length + 1;
        const user = { id, nickName, email, password, };
        this.users.push(user);
        return user;
    },

    removeUser(id) {
        const index = this.users.findIndex(u => u.id === id);
        if (index !== -1) {
            this.users.splice(index, 1);
        }

    },

    getUserById(id) {
        return this.users.find(u => u.id === id)
    }

}
const addProduct = document.getElementById("addProduct");
const addProductList = document.getElementById("addProductList");

addProductList.addEventListener('click', (e) => {
    console.log(e);
    const index = e.target.previousSibling.textContent.split(",")[0].split(" ")[1];
    if (e.target.tagName === 'BUTTON') {
        e.target.parentElement.remove();
        eComStore.removeProduct(id);
        
    }

})



addProduct.onclick = addProductHandler;
addProduct.addEventListener('keydown',(e) => {
    console.log(e);
})


function addUserHandler() {
    const nickName = document.getElementById("nickName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    
    const quantity = document.getElementById('quantity').value.trim();

    const addProductList = document.getElementById('addProductList');

    addProductList.innerHTML = '';


   eComStore.addProduct(productName, price, category, quantity);

   eComStore.products.forEach(e => {
    console.log(e);
    const li = document.createElement('li');
    li.innerHTML = `<span>ID: ${e.id}, 
                    Product Name: ${e.productName},
                    Price: ${e.price},
                    Category: ${e.category},
                    Quantity: ${e.quantity}</span><button>Delete</button>`;
        addProductList.append(li);   
   });       
}

const nickName = document.getElementById("nickName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    
    const quantity = document.getElementById('quantity').value.trim();

    const addProductList = document.getElementById('addProductList');

    addProductList.innerHTML = '';


   eComStore.addProduct(productName, price, category, quantity);

   eComStore.products.forEach(e => {
    console.log(e);
    const li = document.createElement('li');
    li.innerHTML = `<span>ID: ${e.nickName}, 
                    Product Name: ${e.email},
                    Price: ${e.p},
                    Category: ${e.category},
                    Quantity: ${e.quantity}</span><button>Delete</button>`;
        addProductList.append(li);   
   });       
}
 