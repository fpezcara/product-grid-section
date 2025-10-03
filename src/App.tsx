import './App.css';
import { useQuery } from '@tanstack/react-query';
import type { LatestArrivals, LatestArrivalsData } from './types';

import Card from './components/Card';
import Loading from './components/Card/Loading';

function App() {
  const fetchLatestArrivals = async (): Promise<LatestArrivals> =>
    await fetch(
      'https://www.greatfrontend.com/api/projects/challenges/e-commerce/products?collection=latest'
    ).then((res) => res.json());

  fetchLatestArrivals().then((data) => data);

  const { data, isError, isLoading } = useQuery<LatestArrivals, Error>({
    queryKey: ['latestArrivals'],
    queryFn: fetchLatestArrivals,
  });

  if (isError) {
    // TODO: will probably need to show an error page?
    console.error('There was an error fetching data.');
  }

  console.log('query', data?.data);
  // console.log("is it loading?", isLoading);
  // console.log("isError", isError);

  return (
    <main className='m-4 flex flex-col rounded-lg bg-white px-3 py-12 md:px-4 md:py-16 lg:p-24'>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <section className='items-between flex justify-between'>
            <h2 className='text-2xl font-semibold tracking-wide'>
              Latest Arrivals
            </h2>
            <a className='size-lg cursor-pointer rounded-sm border border-gray-200 px-4 py-2 text-sm text-neutral-900 shadow-sm/20 hover:bg-gray-100'>
              View all
            </a>
          </section>
          <section className='mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
            {data?.data.map((item: LatestArrivalsData) => (
              <Card
                key={item.product_id}
                name={item.name}
                images={item.images}
                colors={item.colors}
                listPrice={item.inventory[0].list_price}
                salePrice={item.inventory[0].sale_price}
              />
            ))}
          </section>
        </>
      )}
    </main>
  );
}

export default App;
