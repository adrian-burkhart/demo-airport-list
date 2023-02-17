interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='container mx-auto py-5 px-5 sm:px-32 md:px-60 md:py-10'>
      {children}
    </div>
  )
}

export default Layout
