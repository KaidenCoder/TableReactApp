import React from 'react'
import Center from '../Center/Center'
import Input from './Input'
export default {
    title: 'Form/Input',
    component: Input,
    decorators: [story => <Center>{story()}</Center>]
}

export const Large = () => <Input variant="large" placeholder="Large" />
export const Medium = () => <Input variant="medium" placeholder="Medium" />
export const Small = () => <Input variant="small" placeholder="Small" />
export const Smaller = () => <Input variant="smaller" placeholder="Smaller" />