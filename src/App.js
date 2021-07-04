 import {BrowserRouter as Router ,Switch,Route}  from 'react-router-dom'
import Navigation from './components/Navigation';
import Cart from './pages/Cart';
// import About from './pages/About';
import Home from './pages/Home';
import Product from './pages/Product';
 

function App() {
  return (
     <>
     <Router>
       <Navigation />
        <Switch>
            <Route exact path='/' component={Home} />  
            {/* <Route exact path='/about' component={About} />   */}
            <Route exact path='/products' component={Product} />  
            <Route exact path='/cart' component={Cart} />  
         
        </Switch>
     </Router>
     </>
  );
}

export default App;
