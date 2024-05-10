import React from 'react';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { FaRegUser } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Users = () => {
   
    const axiosPublic = useAxiosPublic();
    const {isPending,data} = useQuery({
        queryKey:['users'],
        queryFn: async ()=>{
            const res = await axiosPublic.get('/users')
            return res.data
        }
    })
    if(isPending){
        return 'Loading User data..........'
    }

    //make a user admin
    const handleMakeAdmin = (id)=>{
    
        axiosPublic.patch(`/users/admin/${id}`)
        .then(res => {
            console.log(res.data)
            if(res.data.modifiedCount){
                Swal.fire('This User is Admin now');
            }
        })

    }

    return (
        <div className='w-[50vw] border mx-auto my-8'>
            <div className="overflow-x-auto text-orange-600  ">
  <table className="table">
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Assign Machine</th>
      </tr>
    </thead>
    <tbody>
        {
            data.map(user =>  <tr user={user} key={user._id}>
                <th>
                  
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={user.photo} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.name}</div>
                    </div>
                  </div>
                </td>
                <td>
                 {user.email}
                </td>
                <button onClick={()=>handleMakeAdmin(user._id)}>
                <td><FaRegUser /></td>
                </button>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>)
        }
     
   
    </tbody>
 
   
    
  </table>
</div>
        </div>
    );
};

export default Users;