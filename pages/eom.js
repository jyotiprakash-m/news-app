import Head from 'next/head';
import styles from '../styles/EOM.module.css';
import { Toolbar } from '../components/toolbar';
import { Image } from 'antd';
function EMO({ employee }) {
    console.log(employee)
    return (
        <>
            <Head>
                <title>Employee Of The Month</title>
                <meta
                    name="description"
                    content={`This month's employee of the month is ${employee.name}`}
                />

                <meta property="og:image" content={employee.image} />
                <meta property="og:title" content="Employee Of The Month" />
                <meta
                    property="og:description"
                    content={`This month's employee of the month is ${employee.name}`}
                />

                <meta property="twitter:image" content={employee.image} />
                <meta property="twitter:title" content="Employee Of The Month" />
                <meta
                    property="twitter:description"
                    content={`This month's employee of the month is ${employee.name}`}
                />
            </Head>
            <div className="page-container">
                <Toolbar />

                <div className={styles.main}>
                    <h1>Employee Of The Month</h1>

                    <div className={styles.employeeOfTheMonth}>
                        <h3>{employee.name}</h3>
                        <h6>{employee.position}</h6>
                        <Image src={employee.image} alt="employee" />
                        <p>{employee.description}</p>
                    </div>
                </div>
            </div>
        </>
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
