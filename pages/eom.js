import React from 'react'
import styles from '../styles/EOM.module.css';
import { Toolbar } from '../components/toolbar';
function EMO({ employee }) {
    console.log(employee)
    return (
        <div className="page-container">
            <Toolbar />

            <div className={styles.main}>
                <h1>Employee Of The Month</h1>

                <div className={styles.employeeOfTheMonth}>
                    <h3>{employee.name}</h3>
                    <h6>{employee.position}</h6>
                    <img src={employee.image} alt="employee" />
                    <p>{employee.description}</p>
                </div>
            </div>
        </div>
    )
}

// Server Side Props
export const getServerSideProps = async pageContext => {
    const response = await fetch('https://my-json-server.typicode.com/jyotiprakash-m/news-app/employeeOfTheMonth');

    const employee = await response.json();

    return {
        props: {
            employee
        }
    }
}


export default EMO
