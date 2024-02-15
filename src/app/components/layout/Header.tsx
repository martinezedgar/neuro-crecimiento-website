export const Header = (): JSX.Element => {
  return (
      <div className="flex justify-around items-center w-full h-[120px] bg-gray-100 sticky top-0">
        <div>Logo and Name</div>
        <p className="font-chivo font-normal text-header-menu">Inicio</p>
        <p className="font-chivo font-normal text-header-menu">Servicios</p>
        <p className="font-chivo font-normal text-header-menu">Contacto</p>
        <div>Button</div>
      </div>
  )
}