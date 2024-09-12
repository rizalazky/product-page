'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

function SelectCategory({categories}:{categories:any}) {
    const router = useRouter()
    const [showMenu,setShowMenu] = useState(false)
  return (
    <div>
        
        <div className="relative inline-block text-left">
          
          <button onClick={()=>setShowMenu(!showMenu)} className="inline-flex justify-center w-full px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none">
            Categories
          </button>

          {
            showMenu && (
                <div className="absolute origin-top-left left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1" aria-orientation="vertical">
                        <Link key={'all'} href={`/`}>
                            <span className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                All
                            </span>
                        </Link>
                        {categories.map((cat: any) => (
                            <Link key={cat.slug} href={`/category/${cat.slug}`}>
                            <span className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                {cat.name}
                            </span>
                            </Link>
                        ))}
                    </div>
                </div>
            )
          }

        </div>
      </div>
  )
}

export default SelectCategory