import { Button, FormControl, FormErrorMessage, FormLabel, Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export const AuthInput = ({ options }) => {
  const { name, label, icon, type, placeholder, value, onChange, error } = options;
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <FormControl isInvalid={!!error}>
      <FormLabel color={'white'}>{label}:</FormLabel>
      <InputGroup>
        <InputLeftElement pointerEvents='none'>{icon}</InputLeftElement>
        <Input
          name={name}
          style={{ color: "white", border: "1px solid #7B7f93" }}
          type={type === "password" ? (show ? "text" : "password") : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {type === "password" && (
          <InputRightElement width='4.5rem'>
            <Button bg={"transparent"} _hover={{ background: "transparent" }} size='sm' onClick={handleClick}>
              {show ? <EyeOff color="white" /> : <Eye color="white" />}
            </Button>
          </InputRightElement>
        )}
      </InputGroup>
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};