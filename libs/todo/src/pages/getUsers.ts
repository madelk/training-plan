import { useQuery } from '@tanstack/vue-query';

export interface user {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const queryKey = ['user'];
const queryFn = async (): Promise<user[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const json = await response.json();
  return new Promise<user[]>((resolve) => {
    setTimeout(() => {
      resolve(json);
    }, 2000);
  });
};

export const getUsers = () => useQuery<user[]>({ queryKey, queryFn });
