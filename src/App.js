
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes/Routes';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient()
  return (
    
    <div className='max-w-[1440px] mx-auto'>
      <QueryClientProvider client={queryClient}>
        
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>

      </QueryClientProvider>
      
    </div>
  );
}

export default App;
