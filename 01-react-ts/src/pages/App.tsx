import { SideBar } from "../components/SideBar"
import { Header } from "../components/Header"
import { Post } from "../components/Post"
import { posts } from "../posts"

import styles from './App.module.css'

export function App() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <SideBar>

        </SideBar>

        <main>
          {posts &&
            posts.map(post => (
              <Post 
                key={post.id}
                post={post}  
              />
            ))
          }
        </main>
      </div>
    </div>
  )
}