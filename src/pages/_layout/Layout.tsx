import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar';
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Footer } from './components/Footer';


export const Layout = () => {

    // const queryConfig = {
    //     suspense: true,
    //     staleTime: 5 * 60 * 1000
    //   };

    const queryClient = new QueryClient()
    return (
        <>

            <Navbar />

            <main>
                <QueryClientProvider client={queryClient} >
                    <Outlet />
                    <ReactQueryDevtools />
                </QueryClientProvider>
            </main>

            <Footer />
        </>
    )
}

export default Layout