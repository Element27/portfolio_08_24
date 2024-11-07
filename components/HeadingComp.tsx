import React from 'react'
import { SendIcon } from './SendIcon'

export default function HeadingComp({ title, hide = false }: { title: string, hide?: boolean }) {
  return (
    <div className="w-11/12 lg:w-10/12 mx-auto flex items-center justify-between relative my-10">
      <h3 className="text-2xl lg:text-4xl font-magic font-bold gradient-text w-fit">
        {title}
      </h3>
      {hide === false && <SendIcon />}
    </div>
  )
}
