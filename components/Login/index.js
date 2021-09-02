/* eslint-disable react/no-children-prop */
import Link from 'next/link'
import { useFormik } from 'formik';
import * as yup from 'yup';
import firebaseClient, { persistenceMode } from '../../config/firebase/client';

//Componentes Chackra
import {
  Container,
  Box,
  Input,
  Button,
  Text,
  FormControl,
  FormLabel,
  FormHelperText

} from '@chakra-ui/react';

//Logo
import Logo from '../Logo';

export default function Signin() {
  const validationSchema = yup.object().shape({
    email: yup.string().email('E-mail inválido!').required('Preenchimento obrigatório!'),
    password: yup.string().required('Preenchimento obrigatório!')
  });


  const { values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting } = useFormik({
    onSubmit: async (values, form) => {
      firebaseClient.auth().setPersistence(persistenceMode)
      try {
        const user = await firebaseClient.auth().signInWithEmailAndPassword(values.email, values.password)
        console.log(user)
      } catch (error) {
        console.log(error)
      }

    },
    validationSchema,
    initialValues: {
      email: '',
      password: '',
      username: ''
    }
  })
  return (
    <Container p={4} centerContent >
      <Logo />
      <Box p={4} mt={8}>
        <Text>Veja sua agenda compartilhada</Text>
      </Box>

      <Box w="80%">
        <FormControl id="email" p={4} isRequired>
          <FormLabel>Email </FormLabel>
          <Input
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            size="lg"
          />
          {touched.email &&
            <FormHelperText textColor="#e74c3c">{errors.email}</FormHelperText>
          }
        </FormControl>

        <FormControl id="password" p={4} isRequired>
          <FormLabel>Senha </FormLabel>
          <Input
            type="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            size="lg"
          />
          {touched.password &&
            <FormHelperText textColor="#e74c3c">{errors.password}</FormHelperText>
          }
        </FormControl>

        <Box p={4}>
          <Button 
            width="100%"
            onClick={handleSubmit} 
            isLoading={isSubmitting}
            loadingText="Entrando..."
            colorScheme="blue"
          >
            Entrar
          </Button>
        </Box>
      </Box>

      <Link href="/cadastro">Ainda não possui uma conta? Cadastre-se aqui.</Link>
    </Container>
  )
}
