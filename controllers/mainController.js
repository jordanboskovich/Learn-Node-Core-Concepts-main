// controllers/mainController.js
import { format } from 'date-fns';

export const getIndex = (req, res) => {
  const currentDate = format(new Date(), 'yyyy-MM-dd HH:mm:ss'); // Format the current date
  res.render('index', { currentDate, title : 'Node Core Concepts' });
};

export const getAbout = (req, res) => {
  const currentDate = format(new Date(), 'yyyy-MM-dd HH:mm:ss'); // Format the current date
  const topic = req.query.topic
  let info = "other information";
  if (topic.toLowerCase() === "jordan"){
    info = "jordan elise boskovich";
  } else if (topic.toLowerCase() === "westridge"){
    info = "westridge school for girls";
  } 
  res.render('about', { currentDate, topic, info });
};

export const getContact = (req, res) => {
  res.render('contact');
};

/*export const contactSent = (req, res) => {
  const name = req.body.name;
  const msg = "thanks you submitted ";
  res.render('contact', {successMessage: msg})
};*/

export const getProduct = (req, res) => {
  let productData = [
    {
      id: "product1",
      name: "product one",
      description: "the first product"
    },
    {
      id: "product2",
      name: "product two",
      description: "the second product"
    },
    {
      id: "product3",
      name: "product three",
      description: "the third product"
    },
  ]
  const productId = req.params.productId; 
  let info = "no information";
  for(var i = 0; i < 3; i++){
    if(productId === productData[i].id){
      info = productData[i].description;
    }
}
  res.render('product', { productId, info });
};