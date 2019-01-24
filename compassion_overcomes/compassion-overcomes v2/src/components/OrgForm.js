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
              name="firstName"
              component="input"
              type="text"
              placeholder="Enter Organization Name"
            />
          </div>
          <div>
            <label>Disaster</label>
            <Field
              name="lastName"
              component="input"
              type="text"
              placeholder="Enter Disaster Name"
            />
          </div>
          <div>
            <label>18+</label>
            <Field name="employed" component="input" type="checkbox" />
          </div>
          {/* <div>
            <label>Favorite Color</label>
            <Field name="favoriteColor" component="select">
              <option />
              <option value="#ff0000">Red</option>
              <option value="#00ff00">Green</option>
              <option value="#0000ff">Blue</option>
            </Field>
          </div> */}
          {/* <div>
            <label>Toppings</label>
            <Field name="toppings" component="select" multiple>
              <option value="chicken"> Chicken</option>
              <option value="ham"> Ham</option>
              <option value="mushrooms"> Mushrooms</option>
              <option value="cheese"> Cheese</option>
              <option value="tuna"> Tuna</option>
              <option value="pineapple">Pineapple</option>
            </Field>
          </div> */}
          {/* <div>
            <label>Sauces</label>
            <div>
              <label>
                <Field
                  name="sauces"
                  component="input"
                  type="checkbox"
                  value="ketchup"
                />{' '}
                Ketchup
              </label>
              <label>
                <Field
                  name="sauces"
                  component="input"
                  type="checkbox"
                  value="mustard"
                />{' '}
                Mustard
              </label>
              <label>
                <Field
                  name="sauces"
                  component="input"
                  type="checkbox"
                  value="mayonnaise"
                />{' '}
                Mayonnaise
              </label>
              <label>
                <Field
                  name="sauces"
                  component="input"
                  type="checkbox"
                  value="guacamole"
                />{' '}
                Guacamole 🥑
              </label>
            </div>
          </div> */}
          {/* <div>
            <label>Best Stooge</label>
            <div>
              <label>
                <Field
                  name="stooge"
                  component="input"
                  type="radio"
                  value="larry"
                />{' '}
                Larry
              </label>
              <label>
                <Field
                  name="stooge"
                  component="input"
                  type="radio"
                  value="moe"
                />{' '}
                Moe
              </label>
              <label>
                <Field
                  name="stooge"
                  component="input"
                  type="radio"
                  value="curly"
                />{' '}
                Curly
              </label>
            </div>
          </div> */}
          <div>
            <label>Rally Point</label>
            <Field name="rallyPoint" component="input" text="text" placeholder="Rally Point Address" />
          </div>
          <div>
            <label>Details</label>
            <Field name="details" component="input" type="text" placeholder="Enter Specific Details Here" />
          </div>
          
          <div className="buttons">
            <button type="submit" disabled={submitting || pristine}>
              Submit
            </button>
            {/* <button
              type="button"
              onClick={form.reset}
              disabled={submitting || pristine}
            >
              Reset
            </button> */}
          </div>
          
        </form>
      )}
    />
  </Styles>
)
export default OrgForm;
//render(<App />, document.getElementById("root"));
