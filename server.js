const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

restaurants = [
  { id: '1', name: 'Restaurant One', description: 'A nice place to eat.', location: '123 Main St', phone: '1234567890', email: 'contact@restaurantone.com' },
  { id: '2', name: 'Restaurant Two', description: 'A nice place to eat.', location: '456 Elm St', phone: '0987654321', email: 'contact@restauranttwo.com' },
  { id: '3', name: 'Restaurant Three', description: 'A nice place to eat.', location: '456 Elm St', phone: '0987654321', email: 'contact@restauranttwo.com' },
  // { id: '4', name: 'Restaurant Four', description: 'A nice place to eat.', location: '123 Main St', phone: '1234567890', email: 'contact@restaurantone.com' },
  // { id: '5', name: 'Restaurant Five', description: 'A nice place to eat.', location: '456 Elm St', phone: '0987654321', email: 'contact@restauranttwo.com' },
  // { id: '6', name: 'Restaurant Six', description: 'A nice place to eat.', location: '456 Elm St', phone: '0987654321', email: 'contact@restauranttwo.com' }
];

app.get('/api/restaurants', (req, res) => {
  res.json(restaurants);
});


app.post('/api/restaurants', (req, res) => {
  const newRestaurant = { id: (restaurants.length + 1).toString(), ...req.body };
  restaurants.push(newRestaurant);
  res.json(newRestaurant);
});

app.put('/api/restaurants/:id', (req, res) => {
  const index = restaurants.findIndex(r => r.id === req.params.id);
  if (index !== -1) {
    restaurants[index] = { id: req.params.id, ...req.body };
    res.json(restaurants[index]);
  } else {
    res.status(404).send('Restaurant not found');
  }
});

app.delete('/api/restaurants/:id', (req, res) => {
  restaurants = restaurants.filter(r => r.id !== req.params.id);
  res.json({ success: true });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });
  