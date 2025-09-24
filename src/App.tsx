import "./App.css";
// import {
//   QueryClient,
//   QueryClientProvider,
//   useQuery,
// } from "@tanstack/react-query";
//
// const queryClient = new QueryClient();

function App() {
  // const fetchLatestArrivals = fetch(
  //   "https://www.greatfrontend.com/api/projects/challenges/e-commerce/products?latest",
  // )
  //   .then((res) => res.json())
  //   .then((data) => data.data);
  //
  // const query = useQuery({
  //   queryKey: "latestArrivals",
  //   queryFn: fetchLatestArrivals,
  // });

  return (
    // <QueryClientProvider client={queryClient}>
    <main className="h-screen w-screen bg-slate-100 p-1">
      <section className="items-between m-5 flex justify-between rounded-lg bg-white px-25 py-16">
        <h1 className="text-2xl font-medium tracking-wide">Latest Arrivals</h1>
        <a className="cursor-pointer rounded-sm border-1 border-gray-200 px-4 py-2 text-sm shadow-sm/20 hover:bg-gray-100">
          View all
        </a>
      </section>
    </main>
    // </QueryClientProvider>
  );
}

export default App;
