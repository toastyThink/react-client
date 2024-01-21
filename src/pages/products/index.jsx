
import { getProduct } from "../../utilities/product-service";
import {useParams, useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";
import { Link } from "react-router-dom"
import { createFavorite } from "../../utilities/product-service";
import { StarIcon } from '@heroicons/react/20/solid'

const Show = ({current_user}) => {
  const [product, setProduct] = useState(null); 
  const [isLoading, setIsLoading] = useState(true); 
  const {id} = useParams(); 
  const navigate = useNavigate();

  const handleRequest = async () => {
    try{
      const productData = await getProduct(id);
      setProduct(productData);
 
    }catch(err){
      console.log(err);
    }
    setIsLoading(false);
  };

 const addFavorite = async (e) => {
  e.preventDefault();
    try{
     await createFavorite({product,  current_user});
     navigate('/');

    }catch(err){
      console.log(err);
      navigate('/');
    } 
  }

  useEffect(() => {
    handleRequest();
  }, []);



  const loaded = () => {

const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
    return (
      <div className="bg-white">
        <div className="pt-6">
          <nav aria-label="Breadcrumb">
            <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">

                <li>
                  <div className="flex items-center">
                    <p>Poduct #: {product._id}</p>
  
                    <svg
                      width={16}
                      height={20}
                      viewBox="0 0 16 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-4 text-gray-300"
                    >
                      <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                    </svg>
                  </div>
                </li>
            
              <li className="text-sm">
                <h1 aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                  {product.name}
                </h1>
              </li>
            </ol>
          </nav>
  
          {/* Image gallery */}
          <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          
            <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            
              </div>
              <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                <img
                  src={product.image}
                  alt={product.title + " Image"}
                  className="h-half w-half object-cover object-center"
                />
              </div>
          </div>

          <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Category:&nbsp; 
                  {
                    product.category = product.category[0].toUpperCase() + product.category.slice(1)
                  }
              </p>
              <hr/>
              &nbsp; 
              &nbsp; 
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.description}</h1>
            </div>
  
            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900">${product.price}</p>
  
              {/* Reviews */}
              <div className="mt-6">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                          'h-5 w-5 flex-shrink-0'
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="sr-only">{reviews.average} out of 5 stars</p>
 
                </div>
              </div>
  
              <form className="mt-10">
              
                    <button
                      
                      onClick={(e) => addFavorite(e)}
                      type="submit"
                      className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      <Link to={"/"}> Add to Favorites</Link>

                    </button>
              </form>
            </div>
  
            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              <div>
                <h3 className="sr-only">Description</h3>
  
                <div className="space-y-6">
                  <p className="text-base text-gray-900">{product.description}</p>
                </div>
              </div>
  
              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">Highlights</h3>
              </div>
  
              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>
  
                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{product.details}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  };

  const loading = () => {
    return isLoading ? <h1>Loading Product....</h1> : <h1>Error Loading Product</h1>
  }


    return !isLoading ? loaded() : loading();
  };
  
  export default Show;
  