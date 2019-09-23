import React,{useState} from 'react';
import { Formik, Field, Form, FormikActions } from 'formik';
import List from './list';
import {Grid1Columns} from './grid'


interface Values {
    keyword1: string;
    keyword2: string;
  }
const Inputs: React.FC<{}> = () => {
    const [reset, setReset] = useState(false);
    const handleReset = (e: any) => {
        e.preventDefault();
        fetch("http://localhost:3001/pause",
          {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
          }).then(res => {
            console.log(res);
            setReset(true);
          }) ;
      }
    return (
    <div className="container">
      <h1>Stream Tweet API</h1>
      <Formik
        initialValues={{
          keyword1: '',
          keyword2: ''
        }}
        onSubmit={(values: Values, { setSubmitting }: FormikActions<Values>) => {
          setTimeout(() => {
            console.log(values);
            setReset(false);
            const term = values.keyword1+","+values.keyword2
            fetch("http://localhost:3001/setSearchTerm",
                {
                    method: "POST",
                    headers: {
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ term })
                })
            setSubmitting(false);
          }, 500);
        }}
        render={() => (
        <Form>
            <Field type="text" name="keyword1" />
            <Field type="text" name="keyword2" />
            <button type="submit">
              Submit
            </button>
            <button onClick={handleReset}>
              reset
            </button>
        </Form>
        )}
      />
        <List mustReset={reset}/>
    </div>
    );
};

export default Inputs;
