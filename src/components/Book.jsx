import React, { useContext } from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,Button,Input,Stack,InputGroup,InputLeftElement
  ,InputRightElement,
} from '@chakra-ui/react'
import { PhoneIcon,CheckIcon } from "@chakra-ui/icons";
import { useDisclosure } from '@chakra-ui/react'
import { AuthContext } from './AuthContext';

const Book = () => {
  const {isauth}=useContext(AuthContext)
  const { isOpen, onOpen, onClose } = useDisclosure()
  if(isauth)
  {
   
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Stack spacing={4}>
  <InputGroup>
    <InputLeftElement
      pointerEvents='none'
      children={<PhoneIcon color='gray.300' />}
    />
    <Input type='tel' placeholder='Phone number'  onChange={(e)=>{
      console.log(e.target.value)
      
    }}/>
  </InputGroup>

  <InputGroup>
    <InputLeftElement
      pointerEvents='none'
      color='gray.300'
      fontSize='1.2em'
      children='$'
    />
    <Input placeholder='Enter amount' />
    <InputRightElement children={<CheckIcon color='green.500' />} />
  </InputGroup>
</Stack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={6} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
  }
  else{
    return <div>please first login</div>
  }
  
}

export default Book;