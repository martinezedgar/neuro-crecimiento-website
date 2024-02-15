export const TopBar = (): JSX.Element => {
  return (
      <div className="flex justify-around items-center w-full h-[48px] bg-dark-green sticky top-0">
        <p className="font-noto font-medium text-top-bar-title text-white">3 Avenida A 3-21, Zona 1, Escuintla</p>
        <p className="font-noto font-regular text-top-bar-title text-green100">(+502) 1234-5678 | user@example.com</p>
      </div>
  )
}