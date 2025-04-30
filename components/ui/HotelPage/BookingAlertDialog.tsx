import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "../button";


type BookingAlertDialogProps ={
    triggerOpen: boolean;
    setTriggerOpen: (open: boolean) => void;
}


export default function BookingAlertDialog({triggerOpen, setTriggerOpen}: BookingAlertDialogProps) {
  return (
    <Drawer open={triggerOpen} onOpenChange={setTriggerOpen}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
