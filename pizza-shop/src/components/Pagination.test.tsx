import { render } from '@testing-library/react'
import { Pagination } from './Pagination'

describe('Pagination', () => {
    it('should display the right amount of pages and results', () => {
        const wrapper = render(
            <Pagination
                pageIndex={0}
                totalCount={200}
                perPage={10}
                onPageChange={() => {}}
            />
        )

        expect(wrapper.getByText('Page 1 of 20')).toBeInTheDocument()
        expect(wrapper.getByText('Total of 200 item(s)'))
    })
})