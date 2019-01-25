import React from 'react'
//import { render } from 'react-dom'
import Styles from '../styles/OrgFormStyles'
import { Form, Field } from 'react-final-form'


// eslint-disable-next-line
//import Cards from 'Cards';



const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}

const OrgForm = () => (
  <Styles>
    <h1>Disaster Needs Form</h1>
    <Form
      onSubmit={onSubmit}
      //initialValues={{ stooge: 'larry', employed: false }}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
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
            />
          </div>
          <div>
            <label>18+</label>
            <Field name="is18Up" component="input" type="checkbox" />
          </div>
          <div>
            <label>Active</label>
            <Field name="isActive" component="input" type="checkbox" />
          </div>
          <div>
            <label>Rally Point</label>
            <Field name="rallyPoint" component="input" text="text" placeholder="Rally Point Address" />
          </div>
          <div>
            <label>Details</label>
            <Field name="details" component="textarea" placeholder="Enter Specific Details Here" />
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
