import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, View, Text } from 'react-native';
import CustomImage from './components/CustomImage';

import imagemLocal from '../assets/imgLocalImport.jpg'
const imagemRemotaURI = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfPvfpzmaSagboeJJzEPwW4Dc04iHVRjKLmQ&usqp=CAU";

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" translucent/>
      <View>
        <Text style={styles.titulo}>Três formas de Inserir Imagens</Text>
        <CustomImage
          fromWeb={false}
          image={require('../assets/imgLocalRequire.jpg')}
          title={"Imagem Local com 'require'"}
        />
        <CustomImage
          fromWeb={false}
          image={imagemLocal}
          title={"Imagem Local com 'import'"}         
        />
        <CustomImage
          fromWeb={true}
          image={imagemRemotaURI}
          title={"Imagem remota com 'URI'"}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202225',
    alignItems: 'center',
  },
  titulo:{
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ccc',
    marginBottom: 30,
  },
});
