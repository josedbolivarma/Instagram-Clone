import { signOut } from "next-auth/react";

export const MiniProfile = () => {

  return (
    <div className="flex items-center justify-between mt-14 ml-10">
        <img 
            className="w-16 h-16 rounded-full border p-[2px]"
            src='https://links.papareact.com/3ke'
            alt=''
        />

        <div className="flex-1 mx-4">
            <h2 className="font-bold">ssssangha</h2>
            <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
        </div>

        <button 
          onClick={ signOut }
          className="text-blue-400 text-sm font-semibold">
            Sign Out
        </button>
    </div>
  )
}