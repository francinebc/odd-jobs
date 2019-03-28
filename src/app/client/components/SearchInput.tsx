import * as React from 'react'
import { Icon, Input } from 'semantic-ui-react'

type Props = {
  placeholder?: string,
  className?: string
}

const InputExampleIconElement = ({ placeholder, className }: Props) => (
  <Input
    className={className}
    icon={<Icon name="search" inverted circular link />}
    placeholder={placeholder ? `Search for ${placeholder}...` : 'Search...'}
  />
)

export default InputExampleIconElement
