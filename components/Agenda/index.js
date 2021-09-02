
import { firebaseClient as firebase } from '../../config/firebase/client';

//Componentes Chakra UI
import { Button } from '@chakra-ui/react';

export default function Schedule() {
  const logout = () => firebaseClient.auth().signOut()

  return (
    <div>
      <Button onClick={logout}>Sair</Button>
    </div>
  )
}