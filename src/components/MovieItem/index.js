import {IoMdClose} from 'react-icons/io'

import ReactPlayer from 'react-player'

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails

  return (
    <div>
      <Popup
        modal
        trigger={
          <li>
            <button testid="thumbnail" type="button">
              <img src={thumbnailUrl} alt="thumbnail" />
            </button>
          </li>
        }
        className="container"
      >
        {close => (
          <div>
            <button type="button" testid="closeButton" onClick={() => close()}>
              <IoMdClose />
            </button>
            <ReactPlayer url={videoUrl} controls />
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
