import { Image } from 'rebass'

export default ({ size = 32, light = false, ...props }) => (
  <Image
    {...props}
    src={`https://cdn.glitch.com/0ac33e0f-67fc-4d7d-bb15-8c3456d17607%2Fknight(1).svg?v=1567888806725`}
    alt="HacKnight avatar"
    width={size}
    height={size}
  />
)
