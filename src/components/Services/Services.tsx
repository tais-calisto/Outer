import { services } from './data'

import Service from './Service'

const Services = () => {
  return (
    <>
      {services.map((service, index) => {
        return (
          <Service
            key={index}
            order={service.order}
            title={service.title}
            text={service.text}
            btn01={service.btn01}
            btn02={service.btn02}
            image={service.image}
            imageRight={service.imageRight}
            name={service.name}
          />
        )
      })}
    </>
  )
}

export default Services
