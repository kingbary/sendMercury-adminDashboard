import React from 'react'

export default function Container({className, children}) {
  return (
    <section className={`bg-white lg:rounded-[20px] lg:m-6 py-4 sm:p-6 ${className}`}>
      {children}
      </section>
  )
}
