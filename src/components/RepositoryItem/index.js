import './index.css'

const RepositoryItem = props => {
  const {item} = props
  const {id, avatarUrl, forksCount, issuesCount, name, starsCount} = item

  return (
    <li className="li-list1" key={id}>
      <img src={avatarUrl} className="img0" alt="" />
      <h1 className="head1">{name}</h1>
      <div className="arrange">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          className="img1"
          alt="stars"
        />
        <p className="head">{starsCount} stars</p>
      </div>
      <div className="arrange">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          className="img1"
          alt="forks"
        />
        <p className="head">{forksCount} forks</p>
      </div>
      <div className="arrange">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          className="img1"
          alt="open-issues"
        />
        <p className="head">{issuesCount} issues</p>
      </div>
    </li>
  )
}

export default RepositoryItem
