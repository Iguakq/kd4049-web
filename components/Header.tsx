import { Drawer } from "@base-ui/react/drawer";

export default function Header() {
  return (
    <header className="absolute flex flex-row justify-between w-full p-6 z-10">
      {/* Logo */}
      <a href="/">
        <img src="49.png" className="h-12" />
      </a>
      {/* Menu */}

      <Drawer.Root>
        <Drawer.Trigger>Abrir</Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Backdrop className="fixed inset-0 bg-black/45" />
          <Drawer.Viewport className="fixed inset-0 flex items-end">
            <Drawer.Popup className="h-full w-full rounded-t-2xl bg-white">
              <Drawer.Content>nose</Drawer.Content>
            </Drawer.Popup>
          </Drawer.Viewport>
        </Drawer.Portal>
      </Drawer.Root>
    </header>
  );
}
