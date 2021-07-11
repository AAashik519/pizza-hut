 import {BrowserRouter as Router ,Switch,Route}  from 'react-router-dom'
import Navigation from './components/Navigation';
import Products from './components/Products';
import Cart from './pages/Cart';
// import About from './pages/About';
import Home from './pages/Home';
// import Product from './pages/Product';
import SingleProduct from './pages/SingleProduct';
 

function App() {
  return (
     <>
     <Router>
       <Navigation />
        <Switch>
            <Route exact path='/' component={Home} />  
            {/* <Route exact path='/about' component={About} />   */}
            <Route exact path='/products' component={Products} />  
            <Route exact path='/products/:_id' component={SingleProduct} />  
            <Route exact path='/cart' component={Cart} />  
         
        </Switch>
     </Router>
     </>
  );
}

export default App;
