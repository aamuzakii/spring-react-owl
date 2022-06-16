import React from 'react'
import { title } from '../SharedStyle'

function Flow() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 12, boxShadow: 'rgb(0 0 0 / 14%) 0px 1px 4px' }} >
      <div style={{ display: 'flex', alignItems: 'center' }} >
        <Node text="Diproses" isCompleted={true} />
        <div style={{ display: 'flex', padding: 10 }} ><Dash/></div>
        <Node text="Dikirim" isCompleted={true} />
        <div style={{ display: 'flex', padding: 10 }} ><Dash/></div>
        <Node text="Selesai" isCompleted={false} />
      </div>
    </div>
  )
}

export default Flow

const Dash = () => (
  <svg status="InProgress" className="ThemedStepper__StyledStepperLine-flsi9t-3 dkjzDj" width="24" height="3" viewBox="0 0 24 3" fill="null" xmlns="http://www.w3.org/2000/svg"><path fill="#345999" d="M0 .5h24v2H0z"></path></svg>
)

const Node = ({text, isCompleted}) => (
  <>
    {
      isCompleted ? <img src="https://lummoshop.com/img/StepperCompleted.svg" alt="" />
                  : <img src="https://lummoshop.com/img/StepperCircle.svg" alt="" />
    }
    <div style={{ fontSize: 10, marginLeft: 3 }} >{ text }</div>
  </>
)