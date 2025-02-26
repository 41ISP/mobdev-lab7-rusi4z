
import { useRoute } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

const ChatScreen = () => {
  const route = useRoute();
  const contactId = route.params?.contactId;
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const loadMessages = async () => {
      const fetchedMessages = await getMessagesFromDatabase(contactId);
      setMessages(fetchedMessages);
    };
    if (contactId) {
      loadMessages();
    }
  }, [contactId]);

  const handleSendMessage = (message) => {
    sendMessageToServer(contactId, message); 
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