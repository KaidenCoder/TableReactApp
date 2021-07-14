import React from 'react'
import Center from '../Center/Center'
import Button from './Button'

export default {
    title: 'Form/Button',
    component: Button,
    args: {
        children: 'Button'
    },
    decorators: [story => <Center>{story()}</Center>]
}



export const Primary = (props) => <Center><Button onClick={() => props} variant="primary">{props.name.length == 0 || props.name == undefined ? "Primary" : props.name}</Button></Center>
export const Secondary = (props) => <Center><Button variant="secondary">{props.name.length == 0 ? "Secondary" : props.name}</Button></Center>
export const Success = (props) => <Center><Button onClick={() => console.log("")} variant="success">{props.name.length == 0 ? "Success" : props.name}</Button></Center>
export const Danger = (props) => <Center><Button variant="danger">{props.name.length == 0 ? "Danger" : props.name}</Button></Center>

const Template = args => <Center><Button {...args} /></Center>

export const PrimaryA = Template.bind({})
PrimaryA.args = {
    variant: 'primary',
    // children: 'Primary Args'
}

export const LongPrimaryA = Template.bind({})
LongPrimaryA.args = {
    ...PrimaryA.args,
    children: "Long Primary Args"
}

export const SecondaryA = Template.bind({})
SecondaryA.args = {
    variant: "secondary",
    children: "Secondary Args"
}