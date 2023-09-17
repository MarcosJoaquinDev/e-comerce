import { BASE_URL_API } from './const';
export async function sendCodefetcher(params:any){
  let requestOptions = {}
  if(params.input=="/auth"){
    requestOptions = {
      method: 'POST',
      body: JSON.stringify({email:params.email}),
      headers: {
        'Content-Type': 'application/json' ,
      },
    }
  }
  if(params.email){
    const res = await fetch(BASE_URL_API+params.input,requestOptions);
    const data = await res.json();
    return data;
  }

}
export async function getTokenFetcher(params:any){
  let requestOptions = {}
  if(params.input=="/auth/token"){
    requestOptions = {
      method: 'POST',
      body: JSON.stringify({email:params.email,code:params.code}),
      headers: {
        'Content-Type': 'application/json' ,
      },
    }
  }
  if(params.code){
    const res = await fetch(BASE_URL_API+params.input,requestOptions);
    const data = await res.json();
    return data;
  }

}
export async function getUserData(input:string){
  let myHeaders = new Headers();
  myHeaders.append("Authorization",`Bearer ${getToken()}`);
  let options = {
    method: 'GET',
    headers: myHeaders,
  };
  const res = await fetch(BASE_URL_API+ input,options);
  const data = await res.json();
  return data;
}

export async function getListProducts({query,offset}:any){
  if(query && offset===0){
    const res = await fetch(BASE_URL_API + '/search?q='+query);
    const data = await res.json();
    return data;
  }
  if(query &&offset>0){
    const res = await fetch(BASE_URL_API + '/search?q='+query+"&offset="+offset);
    const data = await res.json();
    return data;
  }
}
export async function getProductDetails(id:string){
  if(id){
    const res = await fetch(BASE_URL_API + '/products/'+id);
    const data = await res.json();
    return data;
  }
}
export async function setInitialData({info,input}:any){
  let myHeaders = new Headers();
  myHeaders.append("Authorization",`Bearer ${getToken()}`);
  myHeaders.append('Content-Type', 'application/json');
  let options = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify({username:info.username,phone:info.phone,adress:info.adress})
  };

  if(info){
    console.log(info,"llame afetch");
    const res = await fetch(BASE_URL_API + input,options)
    const data = await res.json();
    return data;
  }
}
const getToken = (): string => {
  const token: string | null = localStorage.getItem('token');
  return token ? token : '';
};
