import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useAdmin = () => {
    const {user} = useContext(AuthContext);
    const axiosPublic=useAxiosPublic();
    const {data,isPending} = useQuery({
        queryKey:[user?.email],
        queryFn: async ()=>{
            const res = await axiosPublic.get(`/users/admin/${user?.email}`)
            return res.data?.admin
        }
    })
    return [data,isPending]
};

export default useAdmin;