import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './Views/Landing/Landing';
import Pricing from './Views/Pricing/Pricing';
import Footer from './Components/Footer';
import Payments from './Views/Payments/Payments';
function App() {
  return (
    <div className='app'>
      <Router>
        <main>
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/pricing' component={Pricing} />
            <Route exact path='/payments' component={Payments} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
