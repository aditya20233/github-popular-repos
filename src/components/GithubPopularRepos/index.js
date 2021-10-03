import {Component} from 'react'

import Loader from 'react-loader-spinner'

import './index.css'

import LanguageFilterItem from '../LanguageFilterItem'

import RepositoryItem from '../RepositoryItem'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {language: 'ALL', list: [], status: 'loading'}

  componentDidMount() {
    this.getList()
  }

  getList = async () => {
    const {language} = this.state
    const url = `https://apis.ccbp.in/popular-repos?language=${language}`
    const response = await fetch(url)
    if (response.ok === true) {
      const data = await response.json()
      const newList = data.popular_repos.map(forEach => ({
        avatarUrl: forEach.avatar_url,
        forksCount: forEach.forks_count,
        issuesCount: forEach.issues_count,
        name: forEach.name,
        starsCount: forEach.stars_count,
      }))
      this.setState({list: newList, status: 'successful'})
    } else {
      this.setState({status: 'failure'})
    }
  }

  failure = () => (
    <img
      src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
      className="img2"
      alt="failure view"
    />
  )

  loading = () => (
    <div testid="loader">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  OnChange = id => {
    this.setState({status: 'loading', language: id}, this.getList)
  }

  languageItem = () => {
    const {language} = this.state
    return (
      <>
        <ul className="ul-list">
          {languageFiltersData.map(forEach => (
            <LanguageFilterItem
              item={forEach}
              key={forEach.id}
              OnChange={this.OnChange}
              lang={language}
            />
          ))}
        </ul>
      </>
    )
  }

  bottomList = () => {
    const {list} = this.state

    return (
      <>
        <ul className="ul-list">
          {list.map(forEach => (
            <RepositoryItem item={forEach} key={forEach.id} />
          ))}
        </ul>
      </>
    )
  }

  checkList = () => {
    const {status} = this.state
    switch (status) {
      case 'loading':
        return this.loading()
      case 'failure':
        return this.failure()
      case 'successful':
        return this.bottomList()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="bg-container">
        <h1 className="heading">Popular</h1>
        {this.languageItem()}
        {this.checkList()}
      </div>
    )
  }
}

export default GithubPopularRepos
