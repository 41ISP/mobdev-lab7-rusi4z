
import { useRoute } from '@react-navigation/native'; //Для получения ID контакта

const ChatScreen = () => {
  const route = useRoute();
  const contactId = route.params?.contactId; //Получаем ID контакта из параметров маршрута
  const [messages, setMessages] = useState([]); //Здесь будет храниться история сообщений

  useEffect(() => {
    //Здесь должна быть функция загрузки сообщений из источника данных (например, базы данных)
    //Пример (замените на вашу логику):
    const loadMessages = async () => {
      // ... ваш код для загрузки сообщений по contactId ...
      const fetchedMessages = await getMessagesFromDatabase(contactId); //Функция, которую вам нужно реализовать
      setMessages(fetchedMessages);
    };
    if (contactId) {
      loadMessages();
    }
  }, [contactId]);

  const handleSendMessage = (message) => {
    //Здесь должна быть функция отправки сообщения на сервер
    //Пример (замените на вашу логику):
    sendMessageToServer(contactId, message); //Функция, которую вам нужно реализовать
    //Добавление сообщения в локальный стейт (для мгновенного отображения)
    setMessages([...messages, { sender: 'me', text: message }]);
  };

  return (
    <View style={styles.container}>
      <TopBar title={`Чат с ${contactId}`} /> {/Замените на имя контакта, если доступно/}
      <MessageList messages={messages} />
      <MessageInput onSendMessage={handleSendMessage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ChatScreen;