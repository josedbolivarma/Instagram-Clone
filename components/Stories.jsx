import { useEffect, useState } from 'react';
import { Story } from './Story';

const initialData = [
  {
    id: 1,
    username: 'ZZZZZZZZZZZZZ',
    avatar: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=2000'
  },
  {
    id: 2,
    username: 'ZZZZZZZZZZZZZ',
    avatar: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=2000'
  },
  {
    id: 3,
    username: 'ZZZZZZZZZZZZZ',
    avatar: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=2000'
  },
  {
    id: 4,
    username: 'ZZZZZZZZZZZZZ',
    avatar: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=2000'
  },
  {
    id: 5,
    username: 'ZZZZZZZZZZZZZ',
    avatar: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=2000'
  },
  {
    id: 6,
    username: 'ZZZZZZZZZZZZZ',
    avatar: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=2000'
  },
  {
    id: 7,
    username: 'Z',
    avatar: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=2000'
  },
  {
    id: 8,
    username: 'Y',
    avatar: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=2000'
  },
  {
    id: 9,
    username: 'ZZZZZZZZZZZZZ',
    avatar: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=2000'
  },
  {
    id: 19,
    username: 'ZZZZZZZZZZZZZ',
    avatar: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=2000'
  },
  {
    id: 11,
    username: 'ZZZZZZZZZZZZZ',
    avatar: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=2000'
  },
  {
    id: 12,
    username: 'ZZZZZZZZZZZZZ',
    avatar: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=2000'
  }
]

export const Stories = () => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    setSuggestions(initialData);
  }, []);
  

  return (
    <div className='flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black'>
      {
        suggestions.map(profile => (
          <Story
            key={ profile.id }  
            username={ profile.username }
            img={ profile.avatar }
          />
        ))
      }
    </div>
  )
}
