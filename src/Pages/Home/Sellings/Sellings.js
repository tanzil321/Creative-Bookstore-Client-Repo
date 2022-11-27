import React from 'react';

const Sellings = () => {
    return (
        <div className="p-5 mx-auto sm:p-10 md:p-16  dark:text-gray-100">
	<div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
		<img src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
		<div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-900">
			<div className="space-y-2">
				<a rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl">The Best Activewear from the Nordstrom Anniversary Sale</a>
				<p className="text-xs dark:text-gray-400">By
					<a rel="noopener noreferrer" href="#" className="text-xs hover:underline">Creative Bookstore</a>
				</p>
			</div>
			<div className="dark:text-gray-100">
				<p>Insert the actual text content here...</p>
			</div>
		</div>
	</div>
</div>
    );
};

export default Sellings;