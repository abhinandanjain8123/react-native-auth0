import './App.css';
import Profile from './components/account/Profile';
import { makeStyles } from '@material-ui/core/styles';
import HomeHeader from './components/home/HomeHeader';

const useStyles = makeStyles((theme) => ({
}));

function App() {

  const classes = useStyles();
  
  return (
    <div className={classes}>
      <HomeHeader />      
      <Profile /> 
    </div>
  );
}

export default App;
