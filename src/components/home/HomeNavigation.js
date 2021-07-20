import { Link } from 'react-router-dom'
import { NavigationReference } from '../../Navigation/NavigationRefrence'

export default function HomeNavigation() {
  return (
    <>
      <nav>
        <div id="tag">
          <svg
            width="46"
            height="38"
            viewBox="0 0 46 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0L46 19.2468L0 38L13.6231 19.2468L0 0Z"
              fill="#0EDA3B"
            />
          </svg>
          <span id="play">PLAY</span> <span id="js">JS</span>
        </div>
        <div id="navs">
          <div>
            <Link
              to={NavigationReference.Targets.index}
              color="secondary"
              style={{ color: '#1B3038', textDecoration: 'none' }}
            >
              {' '}
              DOCUMENTATION
            </Link>
          </div>
          <div>GITHUB</div>
        </div>
      </nav>
    </>
  )
}
