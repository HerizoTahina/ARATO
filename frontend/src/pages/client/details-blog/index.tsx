import React, { useEffect, useState } from 'react'
import NavBar from '../../../components/nav-bar'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '../../../hooks/store'
import { IBlog } from '../../../types/IBlog'
import Detail from './detail'
import Blog, { BlogLoading } from '../../../components/blog'

type Props = {}

function DetailsBlog({ }: Props) {
    const { blogId } = useParams<{ blogId: string }>()
    const { blogs } = useAppSelector(state => state.data)
    const [loading,setLoading] = useState<boolean>(false)
    const [blogSelected, setBlogSelected] = useState<IBlog | null>(null)

    useEffect(() => {
        if (blogId) {
            const blogSearch = blogs.find(blog => blog.id.toString() === blogId)
            if (blogSearch) {
                setBlogSelected(blogSearch)
            }
        }
    }, [blogId, blogs])
    return (
        <>
            <header>
                <NavBar />
            </header>
            <div className='details-blog'>
                <Detail blog={blogSelected} />
                <div className='other-blogs'>
                    {loading
                        ? [...new Array(3)].map((blog, index) => (
                            <BlogLoading key={index} isMin blog={blog} />
                        ))
                        : blogs.map((blog, index) => (
                            <Blog key={index} isMin blog={blog} />
                        ))}
                </div>
            </div>
        </>
    )
}

export default DetailsBlog