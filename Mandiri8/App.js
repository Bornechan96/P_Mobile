import {createDrawerNavigator} from 'react-navigation' ;
import Home from './Home' ;
import About from './About' ;

const App = createDrawerNavigator ({
    Home: {screen: Home},
    About: {screen: About}
})

export default App;