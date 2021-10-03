import './index.css'

const LanguageFilterItem = props => {
  const {item, OnChange, lang} = props
  const {id, language} = item
  const OnClick = () => {
    OnChange(id)
  }

  const design = id === lang ? 'design' : ''

  return (
    <li className="li-list" key={id}>
      <button className={`button ${design}`} type="button" onClick={OnClick}>
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
