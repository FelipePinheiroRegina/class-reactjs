import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const Overlay = styled(Dialog.Overlay)`
    position: fixed;
    width: 100%;
    height: 100vh;
    inset: 0;
    background-color: rgb( 0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
    width: 100%;
    max-width: 33.4375rem;
    background-color: ${props => props.theme['gray-800']};

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 2rem;
    border-radius: 6px;

   .title {
        font-size: 1.5rem;
        color: ${props => props.theme['gray-100']};
        line-height: 140%;
        margin-bottom: 1.4rem;
   }

   .description {
        margin-bottom: 1.4rem;
   }

    > form {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .register {
            background: ${props => props.theme['green-500']};
            color: ${props => props.theme.white};
            border: none;
            border-radius: 6px;
            padding: 1rem;
            font-size: 1rem;

            font-weight: bold;
            line-height: 160%;
            cursor: pointer;
            margin-top: 1rem;

            transition: background .2s;

            &:hover {
                background: ${props => props.theme['green-300']};
            }
        }
    }
`

export const Close = styled(Dialog.Close)`
    position: absolute;
    top: 15px;
    right: 20px;

    color: ${props => props.theme['gray-500']};

    border: none;
    background-color: transparent;
    line-height: 0;
    cursor: pointer;

    transition: color .2s;

    svg {
        font-size: 1.5rem;
    
        &:hover {
            color: ${props => props.theme.white};
        }
    }


`

export const TypesTransaction = styled(RadioGroup.Root)`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    margin-top: 1rem;
`

interface PropsButtonTransaction {
    variant?: 'Income' | 'Outcome'
}

export const TypeButtonTransaction = styled(RadioGroup.Item)<PropsButtonTransaction>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    background: ${props => props.theme['gray-700']};
    width: 100%;
    padding: 1rem 0;

    border: none;
    border-radius: 6px;

    cursor: pointer;

    span {
        color: ${props => props.theme['gray-300']};
        font-size: 1rem;
    }

    svg {
        font-size: 1.5rem;
        color: ${props => props.variant === 'Income' ? props.theme['green-300'] : props.theme['red-300']};
    }  

    transition: background .2s;

    &:hover {
        background: ${props => props.theme['gray-600']};
    }

    &[data-state="checked"] {
        background: ${props => props.variant === 'Income' ? props.theme['green-700'] : props.theme['red-700']};
        
        span {
            color: ${props => props.theme.white};
        }
        
        svg {
            color: ${props => props.theme.white};
        }
    }
`