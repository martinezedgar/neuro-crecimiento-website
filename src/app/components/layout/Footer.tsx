export const Footer = (): JSX.Element =>  {
  return (
    <div className="flex flex-col justify-center px-20 w-[100%] h-[300px] text-gray-200 font-noto text-[14px] bg-darkest-green">
        <div className="flex grow-[3] items-center">
            <div>Logo and Name</div>
        </div>
        <div className="flex flex-col justify-center grow-[5]">
            <span className="font-bold mb-2 font-chivo text-[18px]">Contacto</span>
            <span>3 Avenida A</span>
            <span>3-21, Zona 1</span>
            <span>Escuintla</span>
        </div>
        <div className="flex justify-between items-center grow-[2]">
            <span>Neuro Crecimiento 2024</span>
            <div>Redes Sociales</div>
        </div>
    </div>
  )
}