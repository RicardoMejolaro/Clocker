import { useEffect, useState } from 'react';
import { firebaseClient as firebase} from '../config/firebase';

//Componentes Chacra UI
import { Spinner, Container } from '@chakra-ui/react';

//Componentes locais
import Login from '../components/Login';
import Agenda from '../components/Agenda';

export default function Home() {
  const [auth, setAuth] = useState({
    loading: true,
    user: false
  })
  

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setAuth({
        loading: false,
        user
      })
    })
  }, [])

  if(auth.loading) {
    return (
      <Container p={4} centerContent>
        <Spinner />
      </Container>
    ) 
  }

  return (
    auth.user ? <Agenda /> : <Login />
  )
}