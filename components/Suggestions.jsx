import { useEffect, useState } from "react";

const DUMMY_DATA = [
    {
        id: 1,
        username: 'X',
        avatar: 'https://links.papareact.com/3ke'
    },
    {
        id: 2,
        username: 'X',
        avatar: 'https://links.papareact.com/3ke'
    },
    {
        id: 3,
        username: 'X',
        avatar: 'https://links.papareact.com/3ke'
    },
    {
        id: 4,
        username: 'X',
        avatar: 'https://links.papareact.com/3ke'
    },
    {
        id: 5,
        username: 'X',
        avatar: 'https://links.papareact.com/3ke'
    }
]

export const Suggestions = () => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    setSuggestions(DUMMY_DATA);
  }, []);
  
  
  return (
    <div className="mt-4 ml-10">
        <div className="flex justify-between text-sm mb-5">
            <h3 className="text-sm font-bold">Suggestions for you</h3>
            <button className="text-gray-600 font-semibold">See All</button>
        </div>

        {
            suggestions.map((profile) => (
                <div
                    key={ profile.id }
                    className='flex items-center justify-between mt-3'
                >
                    <img
                        className='w-10 h-10 rounded-full border-p-[2px]'
                        src={ profile.avatar } 
                        alt={ profile.username }
                    />

                    <div className="flex-1 ml-4">
                        <h2 className='font-semibold text-sm'>{ profile.username }</h2>
                        <h3 className="text-xs text-gray-400">Works at { profile.username }</h3>
                    </div>

                    <button className="text-blue-400">
                        Follow
                    </button>
                </div>
            ))
        }
    </div>
  )
}
