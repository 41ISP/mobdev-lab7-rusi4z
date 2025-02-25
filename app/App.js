
import LoginScreen from './screens/LoginScreen';
import ChatScreen from './screens/ChatScreen';
import ContactsScreen from './screens/ContactsScreen';

const Tab = createMaterialTopTabNavigator();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [userId, setUserId] = React.useState('');

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Tab.Navigator>
          <Tab.Screen name="Чаты" component={ChatScreen} />
          <Tab.Screen name="Контакты" component={ContactsScreen} />
          {/  Чат-вкладка обрабатывается внутри ChatScreen /}
        </Tab.Navigator>
      ) : (
        <LoginScreen setIsLoggedIn={setIsLoggedIn} setUserId={setUserId} />
      )}
    </NavigationContainer>
  );
};

export default App;