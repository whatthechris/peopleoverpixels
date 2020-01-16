import React from "react"
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

import "./styles/project_wide.scss"

class ProjectWide extends React.Component {
  render() {
    return(
      <div className={'grid ' + (this.props.image ? 'project-wide' : 'project-wide project-wide-noimage')}>
      <div className={(this.props.leftlayout ? 'project-wide__text' : 'project-wide__text project-wide__text-right')}
      data-sal="slide-up"
      data-sal-duration="500"
      data-sal-easing="ease">
        <h3 className="project-wide__heading">{this.props.heading}</h3>
        <p>{this.props.paragraph}</p>
      </div>
      {this.props.image &&
        <div className={(this.props.leftlayout ? 'project-wide__photo' : 'project-wide__photo project-wide__photo-right')}
        data-sal="slide-up"
        data-sal-duration="500"
        data-sal-easing="ease">
          <Zoom>
            <img src={require(`../images/${this.props.image}`)} style={{width:'100%'}}/>
          </Zoom>
        </div>
      }
      <p className={"caption " + (this.props.leftlayout ? 'project-wide__caption' : 'project-wide__caption project-wide__caption-right')}
      data-sal="slide-up"
      data-sal-duration="500"
      data-sal-easing="ease"
      >{this.props.caption}</p>
    </div>
  )}
}

export default ProjectWide