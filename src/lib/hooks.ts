import useSWRImmutable from 'swr/immutable';
import { getTokenFetcher, sendCodefetcher,getListProducts, getUserData, getProductDetails, setInitialData } from './api';

export function useGenerateCode(email:string){
  const {data , error} = useSWRImmutable({input:'/auth',email},sendCodefetcher);
  if (error) return "failed to load";
  return data;
}
export function useGenerateToken(email:string,code:number){
  const {data , error} = useSWRImmutable({input:'/auth/token',email,code},getTokenFetcher);
  if (error) return "failed to load";
  return data;
}
export function useUserData(){
  const {data , error} = useSWRImmutable('/me',getUserData);
  if (error) return "failed to load";
  return data;
}
type userInitialData = {
  username:string,
  adress:string,
  phone:number,
}
export function useSetUserData(info:userInitialData){
  const {data , error} = useSWRImmutable({input:'/me',info},setInitialData);
  if (error) return "failed to load";
  return data;
}
type ProductsProps = {
  id: string;
  price: number;
  title: string;
  image: string;
  description: string;
};
type ListProducts = {
  result:number,
  products:ProductsProps
}
export function useListProduct(query:string,offset:number){
  const {data , error} = useSWRImmutable({query,offset},getListProducts);
  if (error) return "failed to load";
  return data;
}
export function useProduct(id:string){
  const {data , error} = useSWRImmutable(id,getProductDetails);
  if (error) return "failed to load";
  return data;
}
