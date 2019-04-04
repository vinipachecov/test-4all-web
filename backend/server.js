const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');

const app = express()
const port = 3003
const host = 'localhost'


const productList = [
  {
    id: 0,
    idCategory: 0,
    name: 'Coca-cola',
    description: '',
    price: 2.50,
    image: 'https://',
  },
  {
    id: 1,
    idCategory: 0,
    name: 'Guarana Antartica',
    description: '',
    price: 2.50,
    image: 'https://',
  },
  {
    id: 2,
    idCategory: 0,
    name: 'Fanta-Uva',
    description: '',
    price: 2.50,
    image: 'https://',
  },
  {
    id: 3,
    idCategory: 1,
    name: 'Cheetos',
    description: '',
    price: 6.50,
    image: 'https://',
  },
  {
    id: 4,
    idCategory: 1,
    name: 'Fandangos',
    description: '',
    price: 6.50,
    image: 'https://',
  },
  {
    id: 5,
    idCategory: 2,
    name: 'Whey Protein',
    description: '',
    price: 100.0,
    image: 'https://',
  },
  {
    id: 6,
    idCategory: 2,
    name: 'Glutamina',
    description: '',
    price: 40.50,
    image: 'https://',
  },
  {
    id: 7,
    idCategory: 2,
    name: 'Albumina',
    description: '',
    price: 15.50,
    image: 'https://',
  },
  {
    id: 8,
    idCategory: 2,
    name: 'Creatina',
    description: '',
    price: 30.50,
    image: 'https://',
  },

];
const categorias = [{
  id: 0,
  name: 'Refrigerantes',
},
{
  id: 1,
  name: 'Salgadinhos',
},
{
  id: 2,
  name: 'Suplementos',
},
];

app.use(bodyParser.json());
app.use(cors({}))

app.get('/category/list', (req, res) => {
  res.send({ categorias });
})

app.get('/category/:id/productList', (req, res) => {
  const categoria = req.params.id;        
  res.send({ products: productList.filter(product => (product.idCategory === +categoria ))});  
})

app.listen(port, host, () => {
  console.log('Servidor mockado rodando na porta 3003...');
})
