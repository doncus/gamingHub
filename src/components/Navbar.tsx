import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Logo/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface SearchInputProps {
  onSearch: (searchText: string) => void;
}

const Navbar = ({ onSearch }: SearchInputProps) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      {/* <SearchInput onSearch={onSearch}></SearchInput> */}
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
