import { ModeToggle } from "../components/mode-toggle";
import { Button } from "../components/ui/button";
import { Input } from "@/components/ui/input";
import { FaSearch } from "react-icons/fa";
import { DropdownMenuRadioGroupDemo } from "../components/ui/radiodropdownmenu";

export const Navbar = () => {
  return (
    <div className=" flex items-center justify-between mx-4 py-2 gap-4">
      <div className="flex  text-center font-bold font-mono text-2xl cursor-pointer">
        WW
      </div>

      <div className="flex items-center py-2 gap-2">
        <Input
          type="text"
          className="bg-slate-100 font-mono text-lg "
          placeholder="search by city "
        />
        <FaSearch className="border rounded-md text-4xl p-2 cursor-pointer" />
      </div>

      <div className=" hidden sm:flex sm:items-center gap-4">
        <Button className="">°C</Button>
        <Button>°F</Button>
        <ModeToggle className="" />
      </div>
      <ModeToggle className="sm:hidden " />

      <DropdownMenuRadioGroupDemo className="sm:hidden" />
    </div>
  );
};

export default Navbar;
