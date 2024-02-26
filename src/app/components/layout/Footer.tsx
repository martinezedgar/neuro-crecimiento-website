export const Footer = (): JSX.Element =>  {
    return (
        <div className="flex flex-col justify-center px-20 w-[100%] h-[250px] bg-darkest-green">
            <div className="flex">
                <div>Logo and Name</div>
            </div>
            <div className="flex flex-col">
                <span>Contacto</span>
                <span>3 Avenida 'A'</span>
                <span>3-21 Zona 1</span>
                <span>Escuintla</span>
            </div>
            <div className="flex justify-between items-center">
                <span>CopyRights</span>
                <div>Redes Sociales</div>
            </div>
        </div>
    )
}