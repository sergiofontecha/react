import './App.css'
import { TwiteerFollowCard } from './TwiteerFollowCard'

const App = () => {
  const addAt = (userName) => `@${userName}`
  // This is for specific cases. When there are a lot of props, it is better to use the spread operator
  const elonmuskProps = {formatUserName: addAt, name: "Elon Musk", userName: "elonMusk", isFollowing: false}

  return (
    <section className='App'>
      <TwiteerFollowCard formatUserName={addAt} name="Sergio Fontecha" userName="sergio.fontecha" isFollowing />
      <TwiteerFollowCard  {...elonmuskProps}/>
      <TwiteerFollowCard formatUserName={addAt} userName="midudev" isFollowing>
        Miguel Ángel Durán  
      </TwiteerFollowCard>
    </section>
  )
}

export default App
