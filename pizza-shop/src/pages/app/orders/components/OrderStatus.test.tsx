import { render } from '@testing-library/react'
import { OrderStatus } from './OrderStatus'

describe('Order Status', () => {
    it('should display the right text based on order status pending', () => {
        // Pending
        const wrapper = render(<OrderStatus status='pending'/>)

        //wrapper.debug() <- show element rendered

        const statusText = wrapper.getByText('Pending')
        //console.log(statusText.outerHTML) <- show where find the text

        // get <- if not exists return error
        // query <- if no exists return null
        // wrapper.getAllByAltText
        // wrapper.queryAllByAltText

        const badgeElement = wrapper.getByTestId('badge')

        expect(statusText).toBeInTheDocument()
        expect(badgeElement).toHaveClass('bg-slate-400')
    })

    it('should display the right text based on order status canceled', () => {
        const wrapper = render(<OrderStatus status='canceled'/>)

        const statusText = wrapper.getByText('Canceled')
    
        const badgeElement = wrapper.getByTestId('badge')

        expect(statusText).toBeInTheDocument()
        expect(badgeElement).toHaveClass('bg-rose-500')
    })

    it('should display the right text based on order status delivered', () => {
        const wrapper = render(<OrderStatus status='delivered'/>)

        const statusText = wrapper.getByText('Delivered')
    
        const badgeElement = wrapper.getByTestId('badge')

        expect(statusText).toBeInTheDocument()
        expect(badgeElement).toHaveClass('bg-emerald-500')
    })

    it('should display the right text based on order status delivering', () => {
        const wrapper = render(<OrderStatus status='delivering'/>)

        const statusText = wrapper.getByText('Delivering')
    
        const badgeElement = wrapper.getByTestId('badge')

        expect(statusText).toBeInTheDocument()
        expect(badgeElement).toHaveClass('bg-amber-500')
    })

    it('should display the right text based on order status processing', () => {
        const wrapper = render(<OrderStatus status='processing'/>)

        const statusText = wrapper.getByText('Processing')
    
        const badgeElement = wrapper.getByTestId('badge')

        expect(statusText).toBeInTheDocument()
        expect(badgeElement).toHaveClass('bg-amber-500')
    })
})