import Header from './components/Header';
import Login from './pages/Login';
import { Route, Switch } from 'react-router-dom';
import Signup from './pages/Signup';
import CreatePost from './pages/CreatePost';
import Home from './pages/Home';
import { useAuthUser } from './lib/firebase';
// import useStore from './store';

export default function App() {
  useAuthUser()

  return <>
    <Route component={Header} />
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/createpost" component={CreatePost} />
      <Route path="/" component={Home} />
    </Switch>
  </>;
}
