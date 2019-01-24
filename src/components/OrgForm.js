import React from 'react'
import Styles from '../styles/OrgFormStyles'
import { Form, Field } from 'react-final-form'

const OrgForm = ({ handleSubmit }) => (
  <Styles>
    <h1>Disaster Needs Form</h1>
    <Form
      onSubmit={handleSubmit}
      render={({ handleSubmit, submitting, pristine }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Organization</label>
            <Field
              name="organization"
              component="input"
              type="text"
              placeholder="Enter Organization Name"
            />
          </div>
          <div>
            <label>Disaster</label>
            <Field
              name="disaster"
              component="input"
              type="text"
              placeholder="Enter Disaster Name"
              required
            />
          </div>
          <div>
            <label>18+</label>
            <Field name="is18Up" component="input" type="checkbox" />
          </div>
          <div>
            <label>Ongoing</label>
            <Field name="isOngoing" component="input" type="checkbox"/>
          </div>
          <div>
            <label>Rally Point</label>
            <Field name="rallyPoint" component="input" text="text" placeholder="Rally Point Address" required/>
          </div>
          <div>
            <label>Details</label>
            <Field name="details" component="textarea" placeholder="Enter Specific Details Here" required/>
          </div>
          
          <div className="buttons">
            <button type="submit" disabled={submitting || pristine}>
              Submit
            </button>
            
          </div>
          
        </form>
      )}
    />
  </Styles>
)
export default OrgForm;
//render(<App />, document.getElementById("root"));
