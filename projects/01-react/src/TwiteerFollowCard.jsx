export function TwiteerFollowCard({ children, formatUserName, name, userName, isFollowing }) {
  const imageSource = `https://unavatar.io/${userName}`
  const isFollowingText = isFollowing ? 'Siguiendo' : 'Seguir'
  const isFollowingClass = isFollowing ? 'is-following' : ''

  return (
    <article className='tw-followCard'> 
      <header className='tw-followCard-header'>
        <img className='tw-followCard-avatar' src={imageSource} alt='avatar' />
        <div className='tw-followCard-info'>
          <strong>{children || name}</strong>
          <span className='tw-followCard-infoUser'>{formatUserName(userName)}</span>
        </div>
      </header>

      <aside>
        <button className='tw-followCard-button'>
          {isFollowingText}
        </button>
      </aside>

    </article>
  )
}