import React, { useState } from 'react'; // 'useState' eklendi (Hafıza için)
import {
  SafeAreaView,
  View,
  Text,
  Button, // Buton eklendi
  StyleSheet,
} from 'react-native';
import LoginScreen from './components/LoginScreen'; // Bizim email/şifre ekranımız

function App(): React.JSX.Element {
  // Hangi ekranı göstereceğimizi tutan state (hafıza):
  // false ise Hoş Geldiniz, true ise Login ekranı
  const [showLoginScreen, setShowLoginScreen] = useState(false);

  // 1. EĞER showLoginScreen true ise (butona basıldıysa):
  if (showLoginScreen) {
    // Bizim email/şifre formumuzu göster
    return <LoginScreen />;
  }

  // 2. DEĞİLSE (false ise, yani uygulama ilk açıldığında):
  // Hoş Geldiniz ekranını göster
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>
          Kampüs Post'a Hoş Geldiniz!
        </Text>
        
        {/* Bu butona tıklandığında state'i 'true' yapıyoruz */}
        <Button
          title="Giriş Yap"
          onPress={() => setShowLoginScreen(true)} 
        />
      </View>
    </SafeAreaView>
  );
}

// Bunlar Hoş Geldiniz ekranının stilleri
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20, // Butonla arasına boşluk
  },
});

export default App;