import React from 'react'
import Styles from '../styles/OrgFormStyles'
import { Form, Field } from 'react-final-form'

const OrgForm = ({ onSubmit }) => (
  <Styles>
    <h1>Relief Agency Form</h1>
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting, pristine }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Organization</label>
            <Field
              name="Organizations"
              component="input"
              type="text"
              placeholder="Enter Organization Name"
            />
          </div>
          <div>
            <label>Disaster</label>
            <Field
              name="Disaster"
              component="input"
              type="text"
              placeholder="Enter Disaster Name"
              required
            />
          </div>
          {/* <div>
            <label>18+</label>
            <Field name="is18Up" component="input" type="checkbox" />
          </div> */}
          <div>
            <label>Active</label>
            <Field name="isActive" component="input" type="checkbox" />
          </div>
          <div>
            <label>Rally Point</label>
            <Field name="RallyPoint" component="input" text="text" placeholder="Rally Point Address" required/>
          </div>
          <div>
            <label>Details</label>
            <Field name="Details" component="textarea" placeholder="Enter Specific Details Here" required/>
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
