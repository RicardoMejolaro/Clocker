/* eslint-disable react/no-children-prop */
import { useFormik } from 'formik';
import * as yup from 'yup';
import firebase from './../config/firebase';

//Componentes Chackra
import {
  Container,
  Box,
  Input,
  Button,
  Text,
  FormControl,
  FormLabel,
  FormHelperText,
  InputGroup,
  InputLeftAddon

} from '@chakra-ui/react';

//Logo
import Logo from '../components/Logo';

export default function Home() {
  const validationSchema = yup.object().shape({
    email: yup.string().email('E-mail inválido!').required('Preenchimento obrigatório!'),
    password: yup.string().required('Preenchimento obrigatório!'),
    username: yup.string().required('Preenchimento obrigatório!')
  });


  const { values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting } = useFormik({
    onSubmit: (values, form) => {
      console.log(values)
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
        <Text>Crie sua agenda compartilhada</Text>
      </Box>

      <Box>
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

        <Box display="flex" flexDirection="row" alignItems="center" p={4}>
          <InputGroup size="lg" >
            <InputLeftAddon children="clocker.work/" />
            <FormControl id="username" isRequired>
              <Input
                type="username"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                size="lg"
              />
              {touched.username &&
                <FormHelperText textColor="#e74c3c">{errors.username}</FormHelperText>
              }
            </FormControl>
          </InputGroup>
        </Box>

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
    </Container>
  )
}
