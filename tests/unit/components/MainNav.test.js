import { render, screen } from '@testing-library/vue'

import MainNav from '@/components/MainNav.vue'

describe('MainNav', () => {
  it('displays company name', () => {
    render(MainNav)
    expect(screen.getByText('Find Job Company')).toBeInTheDocument()
  })
})
